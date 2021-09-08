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
            id: 1,
            title: 'Create new logo',
            description:
              'The logo is like 5 years old and we need a new one fast!',
            label: '12/7/2020',
          },
          {
            id: 2,
            title: 'Login button bug',
            description: 'The login button is acting odd and flashing weird.',
            label: '3/5/2021',
          },
          {
            id: 3,
            title: 'Mobile friendly',
            description:
              'The UI interface is not mobile friendly and we should take a deep dive into this.',
            label: '6/6/2021',
          },
          {
            id: 4,
            title: 'Remove HTML blink tags',
            description: 'Why are we using stuff from the 90s?',
            label: '9/24/2020',
          },
          {
            id: 5,
            title: 'Use the new color scheme',
            description:
              'Marketing has set out a new color scheme we need to adopt on the web.',
            label: '10/12/2020',
          },
          {
            id: 6,
            title: 'Remove all food images',
            description:
              'We should not have pictures of food on our website as it makes people too hungry.',
            label: '8/4/2021',
          },
        ],
      },
      {
        id: 'lane2',
        title: 'Selected for Development',
        label: '0/0',
        cards: [
          {
            id: 1,
            title: 'Create a diagram',
            description:
              'We should have an architecture diagram for the entire app processes.',
            label: '9/25/2020',
          },
          {
            id: 2,
            title: 'E2E tests',
            description: 'Consider using cypress for E2E tests.',
            label: '3/12/2021',
          },
          {
            id: 3,
            title: 'Stop the background music',
            description:
              'This is not myspace. We should not play background music and annoy people.',
            label: '12/16/2020',
          },
          {
            id: 4,
            title: 'Add coupon code box',
            description:
              'Users should be able to add a coupon code to get a discount.',
            label: '6/29/2021',
          },
          {
            id: 5,
            title: 'Add steal your data checkbox',
            description:
              'We should autocheck a checkbox upon signup to let users know we will steal their data.',
            label: '8/17/2021',
          },
        ],
      },
      {
        id: 'lane3',
        title: 'In Progress',
        label: '0/0',
        cards: [
          {
            id: 1,
            title: 'Nav height',
            description:
              'The nav is way to tall and does not meet design spec.',
            label: '2/18/2021',
          },
          {
            id: 2,
            title: 'Integrate Voyage',
            description:
              'We need to integrate Voyage for PR preview deployments.',
            label: '5/25/2021',
          },
        ],
      },
      {
        id: 'lane4',
        title: 'In QA',
        label: '0/0',
        cards: [
          {
            id: 1,
            title: 'Password Reset',
            description: 'Allow users to reset their password.',
            label: '1/9/2021',
          },
          {
            id: 2,
            title: 'Setup an actual DB',
            description:
              'Move off of microsoft access to a real DB. Maybe SQL server.',
            label: '8/15/2021',
          },
        ],
      },
      {
        id: 'lane5',
        title: 'Shipped',
        label: '0/0',
        cards: [
          {
            id: 1,
            title: 'Pay Us Page',
            description:
              'Create a page where users can pay us 100 dollars with one click for no reason.',
            label: '9/25/2020',
          },
          {
            id: 2,
            title: 'Video Chat',
            description: 'Allow users to video chat with customer support.',
            label: '7/13/2021',
          },
          {
            id: 3,
            title: 'Sell flamethrowers',
            description: 'Pull an Elon and sell random stuff.',
            label: '11/10/2020',
          },
        ],
      },
    ],
  },
]);
