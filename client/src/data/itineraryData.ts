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

// Full itinerary data
export const itineraryData: {
  days: DayData[];
} = {
  days: [
    {
      id: "day1",
      number: 1,
      title: "Mattupetty Route",
      subtitle: "Easy circuit with scenic spots and an early finish",
      description: "An easy circuit with early finish - perfect for your first day. Visit Top Station, Echo Point and Mattupetty Dam.",
      image: "https://www.keralahydeltourism.com/images/news/Sun_moon_valley.jpg",
      priorityLocations: [
        { name: "Top Station" },
        { name: "Echo Point" },
        { name: "Mattupetty Dam" },
        { name: "Carmelagiri Elephant Park", isOptional: true },
        { name: "Tea tasting at a local estate" }
      ],
      routePlan: "Clockwise loop from Munnar → Top Station → Echo → Mattupetty → Carmelagiri → back to Munnar",
      locations: [
        {
          id: 1,
          name: "Leave hotel after breakfast",
          time: "8:00 AM - Departure",
          description: "Begin your day with a hearty meal as lunch options near Top Station are limited.",
          image: "",
          isPriority: false,
          travelTip: "Pack snacks, water, and wear layers as temperatures can vary throughout the day."
        },
        {
          id: 2,
          name: "Top Station",
          time: "9:00 AM - Top Station",
          description: "Visit this panoramic viewpoint early to beat the crowds and enjoy clear morning views before the haze sets in.",
          image: "https://s7ap1.scene7.com/is/image/incredibleindia/top-station-munnar-kerala-1-attr-hero?qlt=82&ts=1726672844426",
          isPriority: true,
          details: [
            "Amazing panoramic shots of valleys and tea estates",
            "On clear days, view extends to Tamil Nadu plains",
            "45-60 minutes recommended stay"
          ],
          coordinates: {
            lat: 10.1307,
            lng: 77.2422
          }
        },
        {
          id: 3,
          name: "Echo Point",
          time: "10:30 AM - Echo Point",
          description: "A quick, enjoyable stop where sound echoes across the valley. Just a 20-minute drive from Top Station.",
          image: "https://munnartourism.co.in/images//tourist-places/echo-point-munnar/echo-point-munnar-tourism-entry-ticket-boating-price.jpg",
          isPriority: true,
          details: [
            "Try shouting across the lake to hear the echo",
            "Beautiful lakeside views and photo opportunities",
            "30 minutes is sufficient for this stop"
          ],
          coordinates: {
            lat: 10.0579,
            lng: 77.1052
          }
        },
        {
          id: 4,
          name: "Mattupetty Dam",
          time: "11:15 AM - Mattupetty Dam",
          description: "Visit this serene dam before the midday crowds arrive. Walking around the dam provides beautiful views of surrounding landscapes.",
          image: "https://dreamlandmunnar.in/wp-content/uploads/2024/02/eZkZhdwABk_1600-ezgif.com-jpg-to-webp-converter.webp",
          isPriority: true,
          details: [
            "Optional boating activity available (30 min)",
            "Great landscape photography opportunities",
            "45-60 minutes recommended stay"
          ],
          coordinates: {
            lat: 10.1012,
            lng: 77.1124
          }
        },
        {
          id: 5,
          name: "Lunch near Mattupetty",
          time: "12:30 PM - Lunch Break",
          description: "Enjoy lunch at one of the restaurants near Mattupetty or head back toward Munnar for more dining options.",
          image: "",
          isPriority: false,
          travelTip: "Look for restaurants serving authentic Kerala cuisine - try local specialties like Meen Curry (fish curry) or Kerala-style chicken dishes."
        },
        {
          id: 6,
          name: "Carmelagiri Elephant Park",
          time: "2:00 PM - Carmelagiri Elephant Park (Optional)",
          description: "An optional stop where you can see elephants and even take an elephant ride if interested.",
          image: "https://www.ourmunnartrip.com/upload_pic/destinations/gallery/carmelgiri-elephant-park69.webp",
          isPriority: false,
          isOptional: true,
          details: [
            "Elephant rides available (additional cost)",
            "Can be skipped if not interested in animal activities",
            "30-45 minutes if you choose to stop"
          ],
          coordinates: {
            lat: 10.0845,
            lng: 77.0632
          }
        },
        {
          id: 7,
          name: "Tea Garden Tasting",
          time: "3:00 PM - Tea Tasting",
          description: "Visit a non-commercial tea garden like Rose Garden Estate for a more authentic tea tasting experience.",
          image: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/hwx7kejyxrupagsx4xt4/Hangzhou%20Longjing%20Tea%20Garden%205km%20light%20hike%3A%20Jiuxi%20Smoky%20Trees%20%2B%20Jiuxi%20Waterfall%20%2B%20Longjing%20Village%20Tea%20Picking%20%2B%20Tea%20Stir-frying%20%2B%20Tea%20Tasting%20%2B%20Qianlong%2018%20Imperial%20Tea%20Trees%20%2B%20Professional%20Tour%20Guide%20Accompanying%20and%20Explanating%20the%20Whole%20Course.jpg",
          isPriority: true,
          details: [
            "Skip the full factory tour - focus on tasting",
            "Beautiful views of surrounding tea gardens",
            "Opportunity to purchase authentic Munnar tea"
          ],
          coordinates: {
            lat: 10.0893,
            lng: 77.0593
          }
        },
        {
          id: 8,
          name: "Early Wrap-up",
          time: "4:00 PM - Return to Hotel",
          description: "Head back to your accommodation to relax and prepare for an early start tomorrow morning.",
          image: "",
          isPriority: false,
          travelTip: "Tomorrow requires a very early start (4:30 AM) for Kolukkumalai sunrise. Pack what you need tonight and get some rest."
        }
      ],
      summary: {
        title: "Day 1 Summary",
        points: [
          "Easy scenic drive with well-paved roads",
          "No long walks or hikes - comfortable for all travelers",
          "Approximately 6-7 hours total including all stops",
          "Early wrap-up (4-5 PM) so you can rest for Day 2's early sunrise"
        ]
      },
      duration: "6-7 hours total",
      count: "4 locations"
    },
    {
      id: "day2",
      number: 2,
      title: "Kolukkumalai & Western Munnar",
      subtitle: "Stunning sunrise and western side exploration",
      description: "Experience the unforgettable sunrise at Kolukkumalai followed by Gap Road, Lockhart gardens and more.",
      image: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/kolukkumalai-1657465095_d2642e149fe309ce153d.webp",
      priorityLocations: [
        { name: "Kolukkumalai Peak (Sunrise)" },
        { name: "Gap Road" },
        { name: "Lockhart Tea Garden" },
        { name: "Ariankal Dam" },
        { name: "Government Botanical Garden" },
        { name: "Chokramudi Peak", isOptional: true }
      ],
      locations: [
        {
          id: 1,
          name: "Leave hotel for Kolukkumalai Sunrise",
          time: "4:30 AM - Early Departure",
          description: "The early wake-up is absolutely worth it for this spectacular experience.",
          image: "",
          isPriority: true,
          travelTip: "Jeep required from Suryanelli (self-drive not possible). Pre-book jeep in advance (₹2000-₹2500). Wear warm layers - it gets cold at this altitude in the morning."
        },
        {
          id: 2,
          name: "Kolukkumalai Peak",
          time: "6:00 AM - Kolukkumalai Peak Sunrise",
          description: "Experience one of the most breathtaking sunrises in South India. The 1.5-hour jeep ride is bumpy but the reward is worth it.",
          image: "https://etravelfly.com/wp-content/uploads/2018/11/kolukkumalai-10.jpg",
          isPriority: true,
          details: [
            "World's highest tea plantation views",
            "Stunning views of clouds, hills and valleys",
            "Visit the tea factory (opens around 8 AM)",
            "Allow 2 hours at the peak"
          ],
          coordinates: {
            lat: 10.0176,
            lng: 77.2483
          }
        },
        {
          id: 3,
          name: "Return from Kolukkumalai",
          time: "9:00 AM - Return & Breakfast",
          description: "Return to Munnar town, have breakfast, and freshen up before continuing with the day's activities.",
          image: "",
          isPriority: false,
          details: [
            "Return to your hotel for breakfast and freshening up",
            "Or have breakfast at a local restaurant in Suryanelli/Munnar"
          ]
        },
        {
          id: 4,
          name: "Gap Road Viewpoint",
          time: "11:30 AM - Gap Road Viewpoint",
          description: "A scenic route on the way toward Lockhart area with beautiful views of valleys and tea plantations.",
          image: "https://media1.thrillophilia.com/filestore/3xg0qj9vbjsxt0ixzfc66kn0t105_image%20(2).jpg?w=400&dpr=2",
          isPriority: true,
          details: [
            "Multiple viewpoints along the road",
            "Perfect for landscape photography",
            "Quick stops along the drive (20-30 mins total)"
          ],
          coordinates: {
            lat: 10.0812,
            lng: 77.0365
          }
        },
        {
          id: 5,
          name: "Ariyankal Dam",
          time: "12:30 PM - Ariyankal Dam",
          description: "A hidden gem away from tourist crowds. This peaceful spot offers beautiful views of the dam and surrounding landscape.",
          image: "https://munnarinfo.in/uploads/profile/1531045131bgpcmjif441010.jpg",
          isPriority: true,
          details: [
            "Not crowded - peaceful atmosphere",
            "Beautiful reflections in the water",
            "Allow 30 minutes to 1 hour"
          ],
          coordinates: {
            lat: 10.0931,
            lng: 77.0193
          }
        },
        {
          id: 6,
          name: "Lunch in Bison Valley or Munnar",
          time: "1:30 PM - Lunch Break",
          description: "Enjoy lunch at a local restaurant before continuing with the afternoon activities.",
          image: "",
          isPriority: false
        },
        {
          id: 7,
          name: "Lockhart Tea Garden",
          time: "3:00 PM - Lockhart Tea Garden",
          description: "Skip the full factory tour (you've already done Kolukkumalai) and focus on enjoying the scenic views of this beautiful tea estate.",
          image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/eb/2e/0b/lockhart-tea-factory.jpg?w=1200&h=-1&s=1",
          isPriority: true,
          details: [
            "Walk through the tea gardens",
            "Enjoy breathtaking viewpoints",
            "Allow 1 hour for exploring"
          ],
          coordinates: {
            lat: 10.0773,
            lng: 77.0419
          }
        },
        {
          id: 8,
          name: "Government Botanical Garden",
          time: "4:30 PM - Botanical Garden",
          description: "Wind down your trip with a peaceful stroll through Munnar's beautiful botanical garden with well-maintained flowerbeds and lawns.",
          image: "https://munnartourism.co.in/images//tourist-places/floriculture-centre-munnar/floriculture-centre-munnar-tourism-entry-ticket-price.jpg",
          isPriority: true,
          details: [
            "Wide variety of flowers and plants",
            "Beautiful in the evening light",
            "Relaxing end to your Munnar adventure"
          ],
          coordinates: {
            lat: 10.0893,
            lng: 77.0596
          }
        },
        {
          id: 9,
          name: "Chokramudi Peak (Optional)",
          time: "Optional - Chokramudi Peak",
          description: "If you still have energy, consider visiting Chokramudi Peak for sunset views. Otherwise, enjoy the sunset from Pothamedu Viewpoint instead.",
          image: "",
          isPriority: false,
          isOptional: true,
          travelTip: "This is optional and only recommended if you're not too tired from the early morning start.",
          coordinates: {
            lat: 10.0621,
            lng: 77.0465
          }
        }
      ],
      summary: {
        title: "Day 2 Summary",
        points: [
          "Early sunrise experience at Kolukkumalai Peak",
          "Western Munnar exploration with key scenic spots",
          "Mix of natural views and garden exploration",
          "Peaceful end to your Munnar adventure"
        ]
      },
      duration: "Full day",
      count: "5-6 locations"
    }
  ]
};

// Highlights data
export const highlights = [
  {
    title: "Key Locations",
    icon: "location",
    description: "Visit 10+ carefully selected spots to experience the best of Munnar"
  },
  {
    title: "Optimized Timing",
    icon: "clock",
    description: "Carefully planned to avoid crowds and get the best views"
  },
  {
    title: "Balanced Experience",
    icon: "layout",
    description: "Mix of scenery, activities and relaxation with flexibility built in"
  }
];

// Map data
export const mapLocations = {
  day1: [
    { id: 1, name: "Top Station", coordinates: "77.2422° E, 10.1307° N", isPriority: true },
    { id: 2, name: "Echo Point", coordinates: "77.1052° E, 10.0579° N", isPriority: true },
    { id: 3, name: "Mattupetty Dam", coordinates: "77.1124° E, 10.1012° N", isPriority: true },
    { id: 4, name: "Carmelagiri Elephant Park", coordinates: "77.0632° E, 10.0845° N (Optional)", isPriority: false },
    { id: 5, name: "Tea Garden", coordinates: "77.0593° E, 10.0893° N", isPriority: true }
  ],
  day2: [
    { id: 1, name: "Kolukkumalai Peak", coordinates: "77.2483° E, 10.0176° N", isPriority: true },
    { id: 2, name: "Gap Road Viewpoint", coordinates: "77.0365° E, 10.0812° N", isPriority: true },
    { id: 3, name: "Ariyankal Dam", coordinates: "77.0193° E, 10.0931° N", isPriority: true },
    { id: 4, name: "Lockhart Tea Garden", coordinates: "77.0419° E, 10.0773° N", isPriority: true },
    { id: 5, name: "Botanical Garden", coordinates: "77.0596° E, 10.0893° N", isPriority: true },
    { id: 6, name: "Chokramudi Peak", coordinates: "77.0465° E, 10.0621° N (Optional)", isPriority: false }
  ]
};

// Driving tips for the map
export const drivingTips = [
  "Munnar roads can be winding - drive carefully and allow extra time",
  "Morning fog is common - use headlights and drive slowly",
  "Keep emergency contacts and your hotel address handy",
  "Download offline maps before starting your journey"
];
