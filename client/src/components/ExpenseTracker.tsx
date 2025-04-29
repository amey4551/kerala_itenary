
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { CircleDollarSign, Receipt, History, UserCircle2, ArrowLeftRight, Filter, Calendar } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { supabaseAnonKey, supabaseUrl } from './app.config';




export const supabase = createClient(supabaseUrl, supabaseAnonKey)

const MEMBERS = ['Amey', 'Mahanta', 'Kaustubh', 'Piku', 'Yashesh'];
const EXPENSE_CATEGORIES = ['Hotel', 'Food', 'Transport', 'Activities', 'Shopping', 'Other'];
const SPLIT_TYPES = ['Equal', 'Individual'];

interface Expense {
  id: number;
  paid_by: string;
  amount: number;
  description: string;
  category: string;
  split_type: string;
  created_at: string;
}

interface Settlement {
  payer: string;
  payee: string;
  amount: number;
}

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [paidBy, setPaidBy] = useState(MEMBERS[0]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Hotel');
  const [splitType, setSplitType] = useState('Equal');
  const [selectedMemberFilter, setSelectedMemberFilter] = useState('All');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('');
  const [settlements, setSettlements] = useState<Settlement[]>([]);
  const [activeSection, setActiveSection] = useState<'add' | 'history' | 'settlements'>('add');

  useEffect(() => {
    fetchExpenses();
  }, []);

  async function fetchExpenses() {
    const { data, error } = await supabase
      .from('expenses')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error) setExpenses(data || []);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from('expenses').insert({
      paid_by: paidBy,
      amount: parseFloat(amount),
      description,
      category,
      split_type: splitType
    });
    if (!error) {
      setAmount('');
      setDescription('');
      setCategory('Hotel');
      fetchExpenses();
      calculateSettlements();
    }
  }

  function calculateSettlements() {
    const memberBalances: Record<string, number> = {};
    MEMBERS.forEach(member => memberBalances[member] = 0);

    expenses.forEach(expense => {
      if (expense.split_type === 'Equal') {
        const splitAmount = expense.amount / MEMBERS.length;
        memberBalances[expense.paid_by] += expense.amount;
        MEMBERS.forEach(member => {
          memberBalances[member] -= splitAmount;
        });
      } else {
        memberBalances[expense.paid_by] += expense.amount;
      }
    });

    const newSettlements: Settlement[] = [];
    const debtors = MEMBERS.filter(m => memberBalances[m] < 0)
      .sort((a, b) => memberBalances[a] - memberBalances[b]);
    const creditors = MEMBERS.filter(m => memberBalances[m] > 0)
      .sort((a, b) => memberBalances[b] - memberBalances[a]);

    while (debtors.length > 0 && creditors.length > 0) {
      const debtor = debtors[0];
      const creditor = creditors[0];
      
      const debtAmount = Math.abs(memberBalances[debtor]);
      const creditAmount = memberBalances[creditor];
      const settleAmount = Math.min(debtAmount, creditAmount);

      if (settleAmount > 0) {
        newSettlements.push({
          payer: debtor,
          payee: creditor,
          amount: parseFloat(settleAmount.toFixed(2))
        });
      }

      memberBalances[debtor] += settleAmount;
      memberBalances[creditor] -= settleAmount;

      if (Math.abs(memberBalances[debtor]) < 0.01) debtors.shift();
      if (Math.abs(memberBalances[creditor]) < 0.01) creditors.shift();
    }

    setSettlements(newSettlements);
  }

  const filteredExpenses = expenses.filter(expense => {
    const matchesMember = selectedMemberFilter === 'All' || expense.paid_by === selectedMemberFilter;
    const matchesCategory = selectedCategoryFilter === 'All' || expense.category === selectedCategoryFilter;
    const matchesDate = !dateFilter || expense.created_at.includes(dateFilter);
    return matchesMember && matchesCategory && matchesDate;
  });

  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const averagePerPerson = totalSpent / MEMBERS.length;

  if (activeSection === 'settlements') {
    return (
      <div className="container mx-auto p-4 max-w-3xl">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Settlements</h2>
          <Button onClick={() => setActiveSection('add')} variant="outline">Back</Button>
        </div>
        <div className="space-y-4">
          <Button onClick={calculateSettlements} className="w-full">
            Recalculate Settlements
          </Button>
          
          <div className="grid gap-4">
            {settlements.map((settlement, index) => (
              <Card key={index} className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">From</p>
                    <p className="font-medium">{settlement.payer}</p>
                  </div>
                  <ArrowLeftRight className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">To</p>
                    <p className="font-medium">{settlement.payee}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Amount</p>
                    <p className="font-medium text-green-600">₹{settlement.amount.toFixed(2)}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="grid gap-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
            <div className="flex items-center gap-3 mb-4">
              <CircleDollarSign className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold">Total Spent</h3>
            </div>
            <p className="text-3xl font-bold">₹{totalSpent.toFixed(2)}</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
            <div className="flex items-center gap-3 mb-4">
              <UserCircle2 className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-semibold">Per Person</h3>
            </div>
            <p className="text-3xl font-bold">₹{averagePerPerson.toFixed(2)}</p>
          </Card>

          <Card 
            className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setActiveSection('settlements')}
          >
            <div className="flex items-center gap-3 mb-4">
              <ArrowLeftRight className="w-8 h-8 text-purple-600" />
              <h3 className="text-xl font-semibold">Settlements</h3>
            </div>
            <p className="text-lg">{settlements.length} pending</p>
          </Card>
        </div>

        {activeSection === 'add' ? (
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Add Expense</h2>
              <Button onClick={() => setActiveSection('history')} variant="outline">
                <History className="w-4 h-4 mr-2" />
                View History
              </Button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Paid By</Label>
                  <Select value={paidBy} onValueChange={setPaidBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {MEMBERS.map(member => (
                        <SelectItem key={member} value={member}>{member}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Amount (₹)</Label>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {EXPENSE_CATEGORIES.map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Split Type</Label>
                  <Select value={splitType} onValueChange={setSplitType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SPLIT_TYPES.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Description</Label>
                  <Input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">Add Expense</Button>
            </form>
          </Card>
        ) : (
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Expense History</h2>
              <Button onClick={() => setActiveSection('add')} variant="outline">
                <Receipt className="w-4 h-4 mr-2" />
                Add New
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <Select value={selectedMemberFilter} onValueChange={setSelectedMemberFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by member" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Members</SelectItem>
                  {MEMBERS.map(member => (
                    <SelectItem key={member} value={member}>{member}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategoryFilter} onValueChange={setSelectedCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Categories</SelectItem>
                  {EXPENSE_CATEGORIES.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="w-full md:w-auto"
              />
            </div>

            <div className="grid gap-4">
              {filteredExpenses.map((expense) => (
                <Card key={expense.id} className="p-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium">{new Date(expense.created_at).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Paid By</p>
                      <p className="font-medium">{expense.paid_by}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Category</p>
                      <p className="font-medium">{expense.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Amount</p>
                      <p className="font-medium text-green-600">₹{expense.amount}</p>
                    </div>
                    <div className="col-span-2 md:col-span-3">
                      <p className="text-sm text-muted-foreground">Description</p>
                      <p className="font-medium">{expense.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Split Type</p>
                      <p className="font-medium">{expense.split_type}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
