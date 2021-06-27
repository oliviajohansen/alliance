export const ChatPageData = [
  {
    id: "1",
    name: "Sarah Lee",
    description: "How are you doing?",
  },
  {
    id: "2",
    name: "Gary Anderson",
    description: "Brb watch some dark here",
  },
  {
    id: "3",
    name: "Cameron Williamson",
    description: "Ok!",
  },
  {
    id: "4",
    name: "Jane Couper",
    description: "Thanks! I'll call you there!",
  },
];

export const ChatRoomData = {
  1: [
    {
      _id: 0,
      text: "New room created.",
      createdAt: new Date(2021, 1, 2, 3, 40).getTime(),
      system: true,
    },
    {
      _id: 1,
      text: "Hi Sarah I saw that you are from SPS. I am a Singaporean university graduate from London and am looking to join the same industry. I was wondering if we could connect to discuss more about sustainable energy in Singapore",
      createdAt: new Date(2021, 1, 2, 3, 45).getTime(),
      user: {
        _id: 1,
        name: "Suzan Winterson",
      },
    },
    {
      _id: 2,
      text: "Hi Suzan, welcome back! I would love to exchange information on sustainable energy!",
      createdAt: new Date(2021, 1, 2, 3, 50).getTime(),
      user: {
        _id: 2,
        name: "Sarah Lee",
      },
    },
  ],
  2: [
    {
      _id: 0,
      text: "Buddy Match By Industry: Electronics.",
      createdAt: new Date(2021, 4, 3, 9, 10).getTime(),
      system: true,
    },
    {
      _id: 1,
      text: "Hi Gary, I've just returned from overseas studies and would love to know more about the Singapore electronics industry from a local expert. Could we schedule a virtual meeting?",
      createdAt: new Date(2021, 4, 3, 9, 11).getTime(),
      user: {
        _id: 1,
        name: "Suzan Winterson",
      },
    },
    {
      _id: 2,
      text: "Hi Suzan, great to hear that about your interest in electronics. I'll be available next wed 7pm for the video call you mentioned.",
      createdAt: new Date(2021, 4, 3, 9, 20).getTime(),
      user: {
        _id: 2,
        name: "Gary Anderson",
      },
    },
  ],
  3: [
    {
      _id: 0,
      text: "Buddy Match By Interest: Music, Reading.",
      createdAt: new Date(2021, 7, 12, 12, 0).getTime(),
      system: true,
    },
    {
      _id: 1,
      text: "Hi Cameron! I am a Singaporean university graduate from London and am looking to rebuild my circle of friends in Singapore. What type of books do you read? I enjoy reading Japanese Manga",
      createdAt: new Date(2021, 7, 12, 2, 0).getTime(),
      user: {
        _id: 1,
        name: "Suzan Winterson",
      },
    },
    {
      _id: 2,
      text: "Hi Suzan :) I enjoy both Korean and Japanese comics! I am currently reading AOT manga",
      createdAt: new Date(2021, 7, 12, 2, 30).getTime(),
      user: {
        _id: 2,
        name: "Cameron Williamson",
      },
    },
  ],
  4: [
    {
      _id: 0,
      text: "New Room Created",
      createdAt: new Date(2021, 7, 12, 12, 0).getTime(),
      system: true,
    },
    {
      _id: 1,
      text: "Hi Jane",
      createdAt: new Date(2021, 7, 12, 12, 30).getTime(),
      user: {
        _id: 1,
        name: "Suzan Winterson",
      },
    },
    {
      _id: 2,
      text: "Hi Suzan",
      createdAt: new Date(2021, 7, 12, 12, 35).getTime(),
      user: {
        _id: 2,
        name: "Jane Couper",
      },
    },
  ],
};

export const Industries = [
  {
    title: "A",
    data: ["Accountancy", "Aerospace", "Agriculture", "Air Transport", "Architecture"]
  },
  {
    title: "B",
    data: ["Beauty Services", "Biopharmaceutical Manufacturing", "Built Environment"]
  },
  {
    title: "C",
    data: ["Consultancy"]
  },
  {
    title: "D",
    data: ["Design"]
  },
  {
    title: "E",
    data: ["Early Childhood Care and Education", "Electronics", "Energy and Chemicals", "Energy and Power", "Environmental Services"]
  },
  {
    title: "F",
    data: ["Finance", "Food Manufacturing", "Food Services"]
  },
  {
    title: "G",
    data: ["Healthcare", "hotel and Accommodation Services", "Human Resource"]
  },
  {
    title: "I",
    data: ["Information and Communications Technology", "Insurance"]
  },
  {
    title: "L",
    data: ["Landscape", "Legal", "Logistics"]
  },
  {
    title: "M",
    data: ["Marine and Offshore Engineering", "Media"]
  },
  {
    title: "P",
    data: ["Precision Engineering", "Public Service (Education)", "Public Transport"]
  },
  {
    title: "R",
    data: ["Real Estate", "Retail"]
  },
  {
    title: "S",
    data: ["Sea Transport", "Security", "Social Service"]
  },
  {
    title: "T",
    data: ["Tourism", "Training and Adult Education"]
  },
  {
    title: "W",
    data: ["Wholesale Trade"]
  }
]

export const AllianceAcademyData = [
  {
    title: "Weekly Score",
    data: ["2,000/10,000"],
  },
  {
    title: "Classes in Progress",
    data: ["Singlish for Beginners", "Malay Culture"],
  },
  {
    title: "Reccomended Classes",
    data: ["Common Customs and Practices", "Hokkien for Beginners"],
  },
  {
    title: "Weekly Leader Board",
    data: ["Sarah Lee", "Sophie Vane"],
  },
];

export const BuddyUpIndustryData = [
  {
    id: 1,
    name: "Annette Black",
    common: "Electronics",
  },
  {
    id: 2,
    name: "Sarah Lee",
    common: "Electronics",
  },
  {
    id: 3,
    name: "Tan Wei Liang",
    common: "Informatioin & Communications Technology",
  },
  {
    id: 4,
    name: "Jane Cooper",
    common: "Informatioin & Communications Technology",
  },
  {
    id: 5,
    name: "Lim Hui Qing",
    common: "Informatioin & Communications Technology",
  },
  {
    id: 6,
    name: "Jacob Jones",
    common: "Energy and Power",
  },
];

export const BuddyUpInterestData = [
  {
    id: 1,
    name: "Annette Black",
    common: "Music, Reading, Sports, Video Editing",
  },
  {
    id: 2,
    name: "Sarah Lee",
    common: "Art, Music, Reading, Sports, Video Editing",
  },
  {
    id: 3,
    name: "Cameron Williamson",
    common: "Art, Music, Reading, Sports, Video Editing",
  },
  {
    id: 4,
    name: "Tan Wei Liang",
    common: "Blogging, Music, Reading, Sports, Video Editing",
  },
  {
    id: 5,
    name: "Lim Hui Qing",
    common: "Blogging, Music, Reading, Sports, Video Editing",
  },
  {
    id: 6,
    name: "Jacob Jones",
    common: "Music, Sports, Video Editing",
  },
  {
    id: 7,
    name: "Sophia Vane",
    common: "Art Blogging, Music, Reading",
  },
];

export const BuddyUpCountryData = [
  {
    id: 1,
    name: "Annette Black",
    common: "France",
  },
  {
    id: 2,
    name: "Gary Anderson",
    common: "France",
  },
  {
    id: 3,
    name: "Cameron Williamson",
    common: "France",
  },
  {
    id: 4,
    name: "Jane Cooper",
    common: "Amsterdam",
  },
  {
    id: 5,
    name: "Brena Smily",
    common: "Germany",
  },
  {
    id: 6,
    name: "Jacob Jones",
    common: "Italy",
  },
  {
    id: 7,
    name: "Sophia Vane",
    common: "Italy",
  },
];
