
// Types for our itinerary data
export interface Location {
  id: number;
  name: string;
  time: string;
  description: string;
  image: string;
  isPriority: boolean;
  isOptional?: boolean;
  details?: string[];
  travelTip?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface DaySummary {
  title: string;
  points: string[];
}

export interface DayData {
  id: string;
  number: number;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  priorityLocations: {
    name: string;
    isOptional?: boolean;
  }[];
  routePlan?: string;
  locations: Location[];
  summary: DaySummary;
  duration: string;
  count: string;
}

export const itineraryData: {
  days: DayData[];
} = {
  days: [
    {
      id: "day1",
      number: 1,
      date: "2025-04-30",
      title: "Journey to Ernakulam & Alleppey",
      subtitle: "Train journey and evening in Alleppey",
      description: "Travel from Madgaon to Ernakulam and transfer to Alleppey",
      image: "",
      priorityLocations: [
        { name: "Ernakulam Junction Arrival" },
        { name: "Transfer to Alleppey" },
      ],
      routePlan: "Madgaon → Ernakulam → Alleppey",
      locations: [
        {
          id: 1,
          name: "Departure from Madgaon",
          time: "5:30 AM",
          description: "Board Ernakulam Jn. Duronto Express (12223)",
          image: "",
          isPriority: true,
          travelTip: "Ensure to carry snacks and water for the journey",
        },
        {
          id: 2,
          name: "Arrival at Ernakulam",
          time: "7:00 PM",
          description: "Arrive at Ernakulam Junction",
          image: "",
          isPriority: true,
        },
        {
          id: 3,
          name: "Transfer to Alleppey",
          time: "8:00 PM",
          description: "55KM journey to Alleppey",
          image: "",
          isPriority: true,
          travelTip: "Consider having dinner at Ernakulam before departure",
        },
      ],
      summary: {
        title: "Day 1 Summary",
        points: [
          "13.5 hours train journey",
          "Evening arrival at Ernakulam",
          "Night transfer to Alleppey",
          "Prepare for temple visits next day",
        ],
      },
      duration: "14-15 hours",
      count: "3 main locations",
    },
    {
      id: "day2",
      number: 2,
      date: "2025-05-01",
      title: "Alleppey Exploration",
      subtitle: "Temples and Backwaters",
      description: "Experience Alleppey's spiritual and natural beauty",
      image: "",
      priorityLocations: [
        { name: "Mullakkal Rajarajeswari Temple" },
        { name: "Ambalapuzha Sri Krishna Temple" },
        { name: "Mannarasala Sree Nagaraja Temple" },
        { name: "Alleppey Backwater Sanctuary" },
      ],
      routePlan: "Temple Circuit → Backwaters → Munnar",
      locations: [
        {
          id: 1,
          name: "Mullakkal Rajarajeswari Temple",
          time: "Morning",
          description: "Start the day with divine blessings",
          image: "",
          isPriority: true,
        },
        {
          id: 2,
          name: "Ambalapuzha Sri Krishna Temple",
          time: "Mid-morning",
          description: "14 km from Mullakkal Temple",
          image: "",
          isPriority: true,
          travelTip: "Try the famous temple prasadam",
        },
        {
          id: 3,
          name: "Mannarasala Sree Nagaraja Temple",
          time: "Afternoon",
          description: "32 km journey",
          image: "",
          isPriority: true,
        },
        {
          id: 4,
          name: "Lunch Break",
          time: "Afternoon",
          description: "Local Kerala cuisine",
          image: "",
          isPriority: false,
        },
        {
          id: 5,
          name: "Alleppey Backwater Sanctuary",
          time: "Evening",
          description: "Shikara Ride experience",
          image: "",
          isPriority: true,
          travelTip: "Best time for photography during sunset",
        },
        {
          id: 6,
          name: "Travel to Munnar",
          time: "Night",
          description: "Night journey to hill station",
          image: "",
          isPriority: true,
        },
      ],
      summary: {
        title: "Day 2 Summary",
        points: [
          "Three significant temples",
          "Traditional Kerala backwaters",
          "Evening departure to Munnar",
          "Cultural and natural experiences",
        ],
      },
      duration: "12-14 hours",
      count: "4 main locations",
    },
    {
      id: "day3",
      number: 3,
      date: "2025-05-02",
      title: "Munnar Day 1",
      subtitle: "Scenic Viewpoints & Nature",
      description: "Explore the most scenic locations in Munnar",
      image: "",
      priorityLocations: [
        { name: "Top Station" },
        { name: "Echo Point" },
        { name: "Mattupetty Dam" },
        { name: "Carmelagiri Elephant Park", isOptional: true },
        { name: "Botanical Garden" },
      ],
      routePlan: "Top Station → Echo Point → Mattupetty Dam → Activities",
      locations: [
        {
          id: 1,
          name: "Depart Hotel",
          time: "7:30 AM",
          description: "Start your day early to avoid crowds",
          image: "",
          isPriority: false,
        },
        {
          id: 2,
          name: "Top Station",
          time: "8:00 AM",
          description: "Highest point in Munnar offering panoramic views",
          image: "",
          isPriority: true,
          travelTip: "Timing depends on hotel location",
        },
        {
          id: 3,
          name: "Echo Point",
          time: "10:00 AM",
          description: "17 km scenic spot with natural echo phenomenon",
          image: "",
          isPriority: true,
        },
        {
          id: 4,
          name: "Mattupetty Dam",
          time: "11:30 AM",
          description: "Beautiful dam and lake surrounded by tea gardens",
          image: "",
          isPriority: true,
        },
        {
          id: 5,
          name: "Lunch Break",
          time: "1:00 PM",
          description: "Local Kerala cuisine",
          image: "",
          isPriority: false,
        },
        {
          id: 6,
          name: "Carmelagiri Elephant Park",
          time: "3:30 PM",
          description: "Open 9:00 AM to 5:00 PM",
          image: "",
          isPriority: true,
          isOptional: true,
          travelTip: "25 km, ~45 mins travel",
        },
        {
          id: 7,
          name: "Botanical Garden",
          time: "4:30 PM",
          description: "Open 9:00 AM to 6:30 PM",
          image: "",
          isPriority: true,
          travelTip: "5 km, ~15 mins travel",
        },
        {
          id: 8,
          name: "Return to Hotel",
          time: "6:30 PM",
          description: "Evening at leisure",
          image: "",
          isPriority: false,
        },
      ],
      summary: {
        title: "Day 3 Highlights",
        points: [
          "Early morning scenic views",
          "Visit 3 major attractions",
          "Optional wildlife encounter",
          "Evening nature walk",
        ],
      },
      duration: "11 hours",
      count: "5 main locations",
    },
    {
      id: "day4",
      number: 4,
      date: "2025-05-03",
      title: "Munnar Day 2",
      subtitle: "Sunrise Adventure & Tea Gardens",
      description: "Early morning trek and tea plantation visits",
      image: "",
      priorityLocations: [
        { name: "Kolukkumalai Sunrise Point" },
        { name: "Ariyankal Dam" },
        { name: "Gap Road Viewpoint" },
        { name: "Lockhart Tea Garden" },
      ],
      routePlan: "Sunrise Trek → Dam Visit → Tea Gardens",
      locations: [
        {
          id: 1,
          name: "Jeep Ride to Kolukkumalai",
          time: "4:00 AM",
          description: "10 km, ~1 hr by jeep",
          image: "",
          isPriority: true,
          travelTip: "Wear warm clothes and carry water",
        },
        {
          id: 2,
          name: "Trek & Photography",
          time: "6:00 AM",
          description: "1.5-2 hrs trek",
          image: "",
          isPriority: true,
        },
        {
          id: 3,
          name: "Return & Breakfast",
          time: "11:30 AM",
          description: "Return by boat (to be confirmed)",
          image: "",
          isPriority: true,
        },
        {
          id: 4,
          name: "Ariyankal Dam",
          time: "12:30 PM",
          description: "14 km, ~30 mins travel",
          image: "",
          isPriority: true,
        },
        {
          id: 5,
          name: "Lunch Break",
          time: "1:30 PM",
          description: "Local cuisine",
          image: "",
          isPriority: false,
        },
        {
          id: 6,
          name: "Gap Road Viewpoint",
          time: "3:00 PM",
          description: "8.7 km, ~20 mins travel",
          image: "",
          isPriority: true,
        },
        {
          id: 7,
          name: "Lockhart Tea Garden",
          time: "4:30 PM",
          description: "3 km, ~10 mins travel",
          image: "",
          isPriority: true,
        },
      ],
      summary: {
        title: "Day 4 Highlights",
        points: [
          "Early morning sunrise trek",
          "Boat return journey",
          "Scenic viewpoints",
          "Tea garden exploration",
        ],
      },
      duration: "12-13 hours",
      count: "4 main locations",
    },
    {
      id: "day5",
      number: 5,
      date: "2025-05-04",
      title: "Munnar Day 3 & Travel to Kochi",
      subtitle: "Adventure & Chocolate Factory",
      description: "Final day in Munnar and evening transfer to Kochi",
      image: "",
      priorityLocations: [
        { name: "Adventure Park" },
        { name: "Macofa Chocolate Factory" },
        { name: "Transfer to Kochi" },
      ],
      routePlan: "Adventure Activities → Chocolate Factory → Kochi",
      locations: [
        {
          id: 1,
          name: "Adventure Park",
          time: "9:00 AM",
          description: "Morning adventure activities",
          image: "",
          isPriority: true,
        },
        {
          id: 2,
          name: "Lunch Break",
          time: "1:30 PM",
          description: "Local cuisine",
          image: "",
          isPriority: false,
        },
        {
          id: 3,
          name: "Macofa Chocolate Factory",
          time: "3:30 PM",
          description: "Chocolate making and shopping",
          image: "",
          isPriority: true,
        },
        {
          id: 4,
          name: "Travel to Kochi",
          time: "5:00 PM",
          description: "151 km, ~4.5-5 hrs journey",
          image: "",
          isPriority: true,
          travelTip: "Plan for dinner en route",
        },
        {
          id: 5,
          name: "Arrive in Kochi",
          time: "10:00 PM",
          description: "Check-in and night rest",
          image: "",
          isPriority: true,
        },
      ],
      summary: {
        title: "Day 5 Highlights",
        points: [
          "Morning adventure activities",
          "Chocolate factory visit",
          "Long journey to Kochi",
          "Night arrival in city",
        ],
      },
      duration: "13 hours",
      count: "3 main locations",
    },
    {
      id: "day6",
      number: 6,
      date: "2025-05-05",
      title: "Kochi Sightseeing",
      subtitle: "Temples, Heritage & Markets",
      description: "Explore the cultural heritage of Kochi",
      image: "",
      priorityLocations: [
        { name: "Sree Poornathrayeesa Temple" },
        { name: "Dutch Palace" },
        { name: "Paradesi Synagogue" },
        { name: "Marine Drive" },
      ],
      routePlan: "Temples → Heritage Sites → Markets → Marine Drive",
      locations: [
        {
          id: 1,
          name: "Sree Poornathrayeesa Temple",
          time: "7:00 AM",
          description: "Morning prayers",
          image: "",
          isPriority: true,
        },
        {
          id: 2,
          name: "Ernakulam Shiva Temple",
          time: "8:00 AM",
          description: "6 km, ~20 mins travel",
          image: "",
          isPriority: true,
        },
        {
          id: 3,
          name: "Hotel Return",
          time: "9:00 AM",
          description: "Saree change and checkout",
          image: "",
          isPriority: false,
        },
        {
          id: 4,
          name: "Dutch Palace, Mattancherry",
          time: "10:30 AM",
          description: "10 km, ~30 mins travel",
          image: "",
          isPriority: true,
        },
        {
          id: 5,
          name: "Paradesi Synagogue",
          time: "12:30 PM",
          description: "Note: Closed on Fridays & Saturdays",
          image: "",
          isPriority: true,
        },
        {
          id: 6,
          name: "Lunch Break",
          time: "1:30 PM",
          description: "Local Kerala cuisine",
          image: "",
          isPriority: false,
        },
        {
          id: 7,
          name: "Jew Town & GM Market",
          time: "3:30 PM",
          description: "Shopping and exploration",
          image: "",
          isPriority: true,
        },
        {
          id: 8,
          name: "Water Metro to Marine Drive",
          time: "5:00 PM",
          description: "30 mins round trip",
          image: "",
          isPriority: true,
        },
        {
          id: 9,
          name: "Rainbow Bridge & Broadway",
          time: "6:00 PM",
          description: "Evening market walk",
          image: "",
          isPriority: true,
        },
        {
          id: 10,
          name: "Return to Hotel",
          time: "8:00 PM",
          description: "Dinner, packing and rest",
          image: "",
          isPriority: true,
        },
      ],
      summary: {
        title: "Day 6 Highlights",
        points: [
          "Morning temple visits",
          "Historical sites exploration",
          "Market shopping",
          "Evening water ride",
        ],
      },
      duration: "13-14 hours",
      count: "8 main locations",
    },
    {
      id: "day7",
      number: 7,
      date: "2025-05-06",
      title: "Return Journey",
      subtitle: "Train back to Madgaon",
      description: "Early morning departure to Madgaon",
      image: "",
      priorityLocations: [
        { name: "Ernakulam Junction Departure" },
        { name: "Arrival at Madgaon" },
      ],
      routePlan: "Ernakulam → Madgaon",
      locations: [
        {
          id: 1,
          name: "Departure from Ernakulam",
          time: "5:15 AM",
          description: "Board Pune SF Express (22149)",
          image: "",
          isPriority: true,
          travelTip: "Arrive 30 mins before departure",
        },
        {
          id: 2,
          name: "Arrival at Madgaon",
          time: "5:00 PM",
          description: "Journey completion",
          image: "",
          isPriority: true,
        },
      ],
      summary: {
        title: "Day 7 Summary",
        points: [
          "Early morning departure",
          "12-hour train journey",
          "Evening arrival at Madgaon",
        ],
      },
      duration: "12 hours",
      count: "2 main locations",
    },
  ],
};

// Food Recommendations
export const foodSpots = [
  {
    area: "Alappuzha",
    restaurants: [
      {
        name: "Thaff Restaurant",
        specialty: "Karimeen Pollichathu",
        budget: "₹200-300 per person",
        location: "Near Boat Jetty",
      },
      {
        name: "Harbours Restaurant",
        specialty: "Kerala Fish Curry Meals",
        budget: "₹150-200 per person",
        location: "Beach Road",
      },
    ],
  },
  {
    area: "Munnar",
    restaurants: [
      {
        name: "Saravana Bhavan",
        specialty: "South Indian Vegetarian",
        budget: "₹100-150 per person",
        location: "Town Center",
      },
      {
        name: "Rapsy Restaurant",
        specialty: "Kerala Parotta and Beef",
        budget: "₹150-200 per person",
        location: "Near Bus Stand",
      },
    ],
  },
];

// Highlights data
export const highlights = [
  {
    title: "Key Locations",
    icon: "location",
    description:
      "Visit carefully selected spots across Kerala",
  },
  {
    title: "Optimized Timing",
    icon: "clock",
    description: "Carefully planned to avoid crowds and get the best views",
  },
  {
    title: "Balanced Experience",
    icon: "layout",
    description:
      "Mix of spirituality, nature, adventure and culture with flexibility",
  },
];

// Map data for visualization
export const mapLocations = {
  day1: [
    {
      id: 1,
      name: "Madgaon Junction",
      coordinates: "73.9575° E, 15.2751° N",
      isPriority: true,
    },
    {
      id: 2,
      name: "Ernakulam Junction",
      coordinates: "76.2795° E, 9.9951° N",
      isPriority: true,
    },
    {
      id: 3,
      name: "Alleppey",
      coordinates: "76.3388° E, 9.4981° N",
      isPriority: true,
    },
  ],
  day2: [
    {
      id: 1,
      name: "Mullakkal Temple",
      coordinates: "76.3352° E, 9.4969° N",
      isPriority: true,
    },
    {
      id: 2,
      name: "Ambalapuzha Temple",
      coordinates: "76.3578° E, 9.3776° N",
      isPriority: true,
    },
    {
      id: 3,
      name: "Mannarasala Temple",
      coordinates: "76.3834° E, 9.3218° N",
      isPriority: true,
    },
    {
      id: 4,
      name: "Backwater Sanctuary",
      coordinates: "76.3446° E, 9.4981° N",
      isPriority: true,
    },
  ],
};
