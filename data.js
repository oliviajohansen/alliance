export const ChatPageData = [
    {
        id: '1',
        name: "Sarah Lee",
        description: "How are you doing?"
    },
    {
        id: '2',
        name: "Gary Anderson",
        description: "Brb watch some dark here"
    },
    {
        id: '3',
        name: 'Cameron Williamson',
        description: 'Ok!'
    },
    {
        id: '4',
        name: 'Jane Couper',
        description: "Thanks! I'll call you there!"
    }
];

export const ChatRoomData = {
    1: [
    {
      _id: 0,
      text: 'New room created.',
      createdAt: new Date(2021, 1, 2, 3, 40).getTime(),
      system: true
    },
    {
      _id: 1,
      text: 'Hi Sarah I saw that you are from SPS. I am a Singaporean university graduate from London and am looking to join the same industry. I was wondering if we could connect to discuss more about sustainable energy in Singapore',
      createdAt: new Date(2021, 1, 2, 3, 45).getTime(),
      user: {
        _id: 1,
        name: 'Suzan Winterson'
      }
    },
    {
      _id: 2,
      text: 'Hi Suzan, welcome back! I would love to exchange information on sustainable energy!',
      createdAt: new Date(2021, 1, 2, 3, 50).getTime(),
      user: {
        _id: 2,
        name: 'Sarah Lee'
      }
    }
  ],
  2: [
    {
      _id: 0,
      text: 'Buddy Match By Industry: Electronics.',
      createdAt: new Date(2021, 4, 3, 9, 10).getTime(),
      system: true
    },
    {
      _id: 1,
      text: "Hi Gary, I've just returned from overseas studies and would love to know more about the Singapore electronics industry from a local expert. Could we schedule a virtual meeting?",
      createdAt: new Date(2021, 4, 3, 9, 11).getTime(),
      user: {
        _id: 1,
        name: 'Suzan Winterson'
      }
    },
    {
      _id: 2,
      text: "Hi Suzan, great to hear that about your interest in electronics. I'll be available next wed 7pm for the video call you mentioned.",
      createdAt: new Date(2021, 4, 3, 9, 20).getTime(),
      user: {
        _id: 2,
        name: 'Gary Anderson'
      }
    }
  ],
  3: [
    {
      _id: 0,
      text: 'Buddy Match By Interest: Music, Reading.',
      createdAt: new Date(2021, 7, 12, 12, 0).getTime(),
      system: true
    },
    {
      _id: 1,
      text: 'Hi Cameron! I am a Singaporean university graduate from London and am looking to rebuild my circle of friends in Singapore. What type of books do you read? I enjoy reading Japanese Manga',
      createdAt: new Date(2021, 7, 12, 2, 0).getTime(),
      user: {
        _id: 1,
        name: 'Suzan Winterson'
      }
    },
    {
      _id: 2,
      text: 'Hi Suzan :) I enjoy both Korean and Japanese comics! I am currently reading AOT manga',
      createdAt: new Date(2021, 7, 12, 2, 30).getTime(),
      user: {
        _id: 2,
        name: 'Cameron Williamson'
      }
    }
  ],
  4: [
    {
      _id: 0,
      text: 'New Room Created',
      createdAt: new Date(2021, 7, 12, 12, 0).getTime(),
      system: true
    },
    {
      _id: 1,
      text: 'Hi Jane',
      createdAt: new Date(2021, 7, 12, 12, 30).getTime(),
      user: {
        _id: 1,
        name: 'Suzan Winterson'
      }
    },
    {
      _id: 2,
      text: 'Hi Suzan',
      createdAt: new Date(2021, 7, 12, 12, 35).getTime(),
      user: {
        _id: 2,
        name: 'Jane Couper'
      }
    }
  ],
};