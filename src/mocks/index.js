let id = 0;

export const navLinks = [
  {
    id: 0,
    title: "Store",
  },
  {
    id: 1,
    title: "Mac",
  },
  {
    id: 2,
    title: "iPad",
  },
  {
    id: 3,
    title: "iPhone",
  },
  {
    id: 4,
    title: "Watch",
  },
  {
    id: 5,
    title: "Vision",
  },
  {
    id: 6,
    title: "AirPods",
  },
  {
    id: 7,
    title: "TV & Home",
  },
  {
    id: 8,
    title: "Entertainment",
  },
  {
    id: 9,
    title: "Accessories",
  },
  {
    id: 10,
    title: "Support",
  },
  //   {
  //     id: 11,
  //     title: "",
  //   },
];

export const navData = [
  {
    id: id++,
    title: "Store",
    children: [
      {
        childTitle: "Shop",
        links: [
          "Shop the Latest",
          "Mac",
          "iPad",
          "iPhone",
          "Apple Watch",
          "Accessories",
        ],
      },
      {
        childTitle: "Quick Links",
        links: [
          "Find a Store",
          "Order Status",
          "Apple Trade In",
          "Financing",
          "College Student Offer",
        ],
      },
      {
        childTitle: "Shop Special Stores",
        links: [
          "Certified Refurbished",
          "Education",
          "Business",
          "Veterans and Military",
          "Government",
        ],
      },
    ],
  },
  {
    id: id++,
    title: "Mac",
    children: [
      {
        childTitle: "Explore Mac",
        links: [
          "Explore All Mac",
          "MacBook Air",
          "MacBook pro",
          "iMac",
          "Mac mini",
          "Mac Studio",
          "Mac Pro",
          "Displays",
        ],
        childtitle: [
          "Compare Mac",
          "Mac Does That"
        ]
      },
      {
        childTitle: "Shop Mac",
        links: [
          "Shop Mac",
          "Mac Accessories",
          "Apple Trade In",
          "Financing",
          "College Student Offer",
        ],
      },
      {
        childTitle: "More from Mac",
        links: [
          "Mac Support",
          "macOS Sonoma Preview",
          "AppleCare+for Mac",
          "Final Cut Pro",
          "Logic Pro",
          "Continuty",
          "iCloud+",
          "Mac for Business",
          "Education",
        ],
      },
    ],
  },
  {
    id: id++,
    title: "iPad",
    children: [
      {
        childTitle: "Explore iPad",
        links: [
          "Explore All iPad",
          "iPad Pro",
          "iPad Air",
          "iPad",
          "iPad mini",
          "Apple Pencil",
          "Keyboards",
        ],
        childtitle: [
          "Compare iPad",
          "Why iPad"
        ]
      },
      {
        childTitle: "Shop iPad",
        links: [
          "Shop iPad",
          "iPad Accessories",
          "Apple Trade In",
          "Financing",
          "College Student Offer",
        ],
      },
      {
        childTitle: "More from iPad",
        links: [
          "iPad Support",
          "iPadOS 17 Preview",
          "AppleCare+for iPad",
          "Final Cut Pro for iPad",
          "Logic Pro for iPad",
          "iCloud+",
          "Education",
        ],
      },
    ],
  },
  {
    id: id++,
    title: "iPhone",
    children: [
      {
        childTitle: "Explore iPhone",
        links: [
          "Explore All iPhone",
          "iPhone 14 Pro",
          "iPhone 14",
          "iPhone 13",
          "iPhone 12",
          "iPhone SE",
        ],
        childtitle: [
          "Compare iPhone",
          "Switch from Android"
        ]
      },
      {
        childTitle: "Shop iPhone",
        links: [
          "Shop iPhone",
          "iPhone Accessories",
          "Apple Trade In",
          "Carrier Deals at Apple",
          "Financing",
        ],
      },
      {
        childTitle: "More from iPhone",
        links: [
          "iPhone Support",
          "iOS 17 Preview",
          "AppleCare+for iPhone",
          "iPhone Privacy",
          "iCloud+",
          "Wallet,Pay, Card",
          "Siri",
        ],
      },
    ],
  },
  {

    id: id++,
    title: "Watch",
    children: [
      {
        childTitle: "Explore Watch",
        links: [
          "Explore All Apple Watch",
          "Apple Watch Ultra",
          "Apple Watch Series 8",
          "Apple Watch SE",
          "Apple Watch Nike",
          "Apple Watch Hermès",
        ],
        childtitle: [
          "Compare Watch",
          "Why Apple Watch"
        ]
      },
      {
        childTitle: "Shop Watch",
        links: [
          "Shop Apple Watch",
          "Apple Watch Studio",
          "Apple Watch Bands",
          "Apple Watch Accessories",
          "Apple Trade In",
          "Financing",
        ],
      },
      {
        childTitle: "More from Watch",
        links: [
          "Apple Watch Support",
          "WatchOS 10 Preview",
          "AppleCare+",
          "Apple Fitness+",
        ],
      },
    ], 
  },
  {
    id: id++,
    title: "Vision",
    children: [],
  },
  {
    id: id++,
    title: "AirPods",
    children: [
      {
        childTitle: "Explore AirPods",
        links: [
          "Explore All AirPods",
          "AirPods Pro 2nd generation",
          "AirPods 2nd generation",
          "AirPods 3rd generation",
          "AirPods Max",
        ],
        childtitle: [
          "Compare Airpods",
        ]
      },
      {
        childTitle: "Shop AirPods",
        links: [
          "Shop AirPods",
          "AirPods Accessories"
        ],
      },
      {
        childTitle: "More from AirPods",
        links: [
          "AirPods Support",
          "AppleCare+for Headphones",
          "Apple Music"
        ],
      },
    ],
  },
  {
    id: id++,
    title: "iPad",
    children: [
      {
        childTitle: "Explore TV & Home",
        links: [
          "Explore TV & Home",
          "Apple TV 4K",
          "HomePod",
          "HomePod mini",
        ],
      },
      {
        childTitle: "Shop TV & Home",
        links: [
          "Shop Apple TV 4K",
          "Shop HomePod",
          "Shop HomePod mini",
          "Shop Siri Remote",
          "TV & Home Accesspries",
        ],
      },
      {
        childTitle: "More from TV & Home",
        links: [
          "Apple TV Support",
          "HomePod Support",
          "AppleCare+",
          "Apple TV app",
          "Apple TV+",
          "Home app",
          "Apple Music",
          "Siri",
          "AirPlay"
        ],
      },
    ],
  },
  {
    id: id++,
    title: "Entertainment",
    children: [
      {
        childTitle: "Explore Entertainment",
        links: [
          "Explore Entertainment",
          "Apple One",
          "Apple TV+",
          "Apple Music",
          "Apple Arcade",
          "Apple Fitness+",
          "Apple News+",
          "Apple Podcasts",
          "Apple Books",
          "App Store"
        ],
      },
      {
        childTitle: "Support",
        links: [
          "Apple TV+ Support",
          "Apple Music Support",
        ],
      },
    ],
  },
  {
    id: id++,
    title: "Accessories",
    children: [
      {
        childTitle: "Shop Accessories",
        links: [
          "Shop All Accessories",
          "Mac",
          "iPad",
          "iPhone",
          "Apple Watch",
          "Airpods",
          "TV & Home",
        ],
      },
      {
        childTitle: "Explore Accessories",
        links: [
          "Made by Apple",
          "Beats by Dr.Dre",
          "AirTag"
        ],
      },
    ],
  },
  {
    id: id++,
    title: "Support",
    children: [
      {
        childTitle: "Explore Explore Support",
        links: [
          "iPhone",
          "Mac",
          "iPad",
          "Watch",
          "AirPods",
          "Music",
          "TV",
        ],
        childtitle: [
          "Explore Support",
        ]
      },
      {
        childTitle: "Get Help",
        links: [
          "Community",
          "Check Coverage",
          "Repair",
          "Contact Us",
        ],
      },
      {
        childTitle: "Helpful Topics",
        links: [
          "Get AppleCare+",
          "Apple ID & Password",
          "Billing & Subscriptions",
          "Find My",
          "Accessibility",
        ],
      },
    ],
  },
];
  