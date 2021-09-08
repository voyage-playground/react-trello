db.createUser({
  user: 'root',
  pwd: 'secret',
  roles: [
    {
      role: 'readWrite',
      db: 'trello_clone',
    },
  ],
});

db = new Mongo().getDB('trello_clone');

db.createCollection('boards', { capped: false });

db.boards.insert([
  {
    _id: 1,
    lanes: [
      {
        id: 'lane1',
        title: 'Backlog',
        label: '2/2',
        cards: [
          {
            id: 'Card1',
            title: 'Write Blog',
            description: 'Can AI make memes',
            label: '30 mins',
            draggable: false,
          },
          {
            id: 'Card2',
            title: 'Pay Rent',
            description: 'Transfer via NEFT',
            label: '5 mins',
            metadata: { sha: 'be312a1' },
          },
        ],
      },
      {
        id: 'lane2',
        title: 'Selected for Development',
        label: '0/0',
        cards: [],
      },
      {
        id: 'lane3',
        title: 'In Progress',
        label: '0/0',
        cards: [],
      },
      {
        id: 'lane4',
        title: 'In QA',
        label: '0/0',
        cards: [],
      },
      {
        id: 'lane5',
        title: 'Shipped',
        label: '0/0',
        cards: [],
      },
    ],
  },
]);
