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
            title:
              'Golf November Victor Echo Oscar Zulu Charlie Lima Quebec Foxtrot India Delta Kilo Hotel X-ray Whiskey Mike Papa Sierra Juliett',
            description:
              'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
            label: '12/7/2020',
          },
          {
            id: 2,
            title:
              'Sierra Juliett November Golf Victor X-ray Alfa Zulu Mike Delta Echo Uniform',
            description:
              'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
            label: '3/5/2021',
          },
          {
            id: 3,
            title:
              'Juliett Sierra Tango Charlie Hotel Mike Lima Uniform Bravo Romeo Papa',
            description:
              'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
            label: '6/6/2021',
          },
          {
            id: 4,
            title:
              'Hotel Zulu Romeo Papa Uniform India Alfa Charlie X-ray Yankee Echo Victor Tango November Mike Juliett Lima',
            description:
              'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
            label: '9/24/2020',
          },
          {
            id: 5,
            title:
              'Golf Delta November Quebec Charlie Bravo Oscar Tango Alfa Foxtrot Uniform Lima Kilo Mike Romeo Zulu Victor Juliett Whiskey',
            description:
              'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
            label: '10/12/2020',
          },
          {
            id: 6,
            title:
              'Papa Whiskey Golf Alfa India Mike Juliett Delta Victor Kilo Charlie Quebec Hotel Zulu X-ray Uniform November',
            description:
              'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
            label: '8/4/2021',
          },
          {
            id: 7,
            title:
              'Yankee Oscar Echo Zulu Tango Sierra Quebec Charlie Bravo Romeo Hotel Uniform Whiskey Foxtrot Victor',
            description:
              'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
            label: '2/6/2021',
          },
          {
            id: 8,
            title:
              'Quebec Sierra Juliett X-ray Uniform Bravo Golf Alfa India Yankee Oscar Tango November Lima Victor Echo Kilo Zulu Charlie Hotel',
            description: 'Duis consequat dui nec nisi volutpat eleifend.',
            label: '11/25/2020',
          },
          {
            id: 9,
            title:
              'Quebec Delta Hotel India Zulu Lima Whiskey Alfa Golf Charlie Kilo Mike Oscar Uniform Romeo Victor Foxtrot',
            description:
              'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
            label: '9/16/2020',
          },
          {
            id: 10,
            title:
              'Charlie Bravo Foxtrot Tango Echo Juliett Papa Sierra Kilo Whiskey Delta Alfa Golf India',
            description:
              'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
            label: '2/20/2021',
          },
          {
            id: 11,
            title:
              'Tango Alfa Papa Foxtrot November Whiskey Sierra Golf Bravo Romeo Quebec Kilo Uniform Victor',
            description:
              'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
            label: '3/30/2021',
          },
          {
            id: 12,
            title:
              'X-ray Oscar Bravo India Victor Papa Golf Sierra Uniform Foxtrot Lima Echo Whiskey Delta Tango Charlie',
            description:
              'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
            label: '10/11/2020',
          },
          {
            id: 13,
            title:
              'Oscar Bravo Delta India Kilo Foxtrot Whiskey Quebec Mike Papa Romeo Victor Zulu Echo',
            description:
              'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
            label: '11/22/2020',
          },
          {
            id: 14,
            title:
              'Uniform Golf Kilo Foxtrot X-ray Victor Papa Yankee Whiskey Zulu Delta Bravo Alfa India Hotel Sierra',
            description:
              'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
            label: '11/25/2020',
          },
          {
            id: 15,
            title:
              'November Kilo Quebec Whiskey Golf Victor Uniform Papa Hotel Yankee India Lima',
            description:
              'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
            label: '11/26/2020',
          },
          {
            id: 16,
            title:
              'November Golf Sierra Zulu Charlie Papa Kilo Victor Hotel Echo Romeo Tango Mike X-ray Yankee Lima Uniform India Whiskey',
            description:
              'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
            label: '12/23/2020',
          },
          {
            id: 17,
            title:
              'Oscar Mike India Hotel Romeo Lima Tango Delta Yankee X-ray Echo Bravo Kilo Juliett Alfa Uniform Zulu Foxtrot November Charlie',
            description:
              'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
            label: '3/30/2021',
          },
          {
            id: 18,
            title:
              'Papa Foxtrot Juliett Delta Yankee Uniform Hotel Bravo Quebec November',
            description:
              'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
            label: '9/5/2021',
          },
          {
            id: 19,
            title:
              'India Kilo Sierra Hotel Yankee Lima Delta Echo X-ray Mike Juliett Romeo Oscar November Tango Uniform Alfa Zulu',
            description:
              'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
            label: '12/28/2020',
          },
          {
            id: 20,
            title:
              'Mike Sierra Zulu November Foxtrot Delta Tango Charlie X-ray Whiskey Alfa Uniform Quebec India',
            description:
              'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
            label: '5/18/2021',
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
            title:
              'Juliett Delta Echo Romeo Mike Zulu November Victor Charlie Oscar',
            description: 'Aliquam quis turpis eget elit sodales scelerisque.',
            label: '9/25/2020',
          },
          {
            id: 2,
            title:
              'Sierra X-ray November Echo Tango Lima Mike Juliett Romeo Uniform Charlie Zulu Whiskey Hotel Delta',
            description:
              'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
            label: '3/12/2021',
          },
          {
            id: 3,
            title:
              'Echo Yankee Tango Kilo Victor Uniform November X-ray Romeo India Oscar Charlie Sierra Whiskey',
            description:
              'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
            label: '12/16/2020',
          },
          {
            id: 4,
            title:
              'Charlie Bravo Papa November Echo Uniform X-ray Mike Victor Alfa Delta Oscar Lima Yankee Romeo Juliett',
            description:
              'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
            label: '6/29/2021',
          },
          {
            id: 5,
            title:
              'Echo November Mike Whiskey Bravo Hotel Kilo Foxtrot Charlie Oscar Lima Romeo Delta',
            description:
              'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
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
            title:
              'Bravo Victor Hotel Oscar India Charlie Delta Papa Quebec Echo X-ray November Foxtrot Mike Yankee Sierra Uniform',
            description:
              'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
            label: '2/18/2021',
          },
          {
            id: 2,
            title:
              'Uniform Golf Zulu Alfa Charlie November Whiskey Yankee Bravo Papa Echo Victor Juliett Sierra',
            description:
              'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
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
            title:
              'Zulu Bravo Oscar Delta Uniform Papa November Romeo Echo India Quebec Alfa Mike Lima Charlie Golf Sierra',
            description:
              'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
            label: '1/9/2021',
          },
          {
            id: 2,
            title:
              'Oscar Echo Hotel India Mike Foxtrot Victor Golf Juliett Delta Bravo',
            description: 'Proin risus.',
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
            title:
              'November Quebec Foxtrot Alfa India Zulu Oscar Charlie Golf Echo X-ray Juliett Uniform',
            description:
              'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
            label: '9/25/2020',
          },
          {
            id: 2,
            title:
              'India Romeo Uniform Golf Zulu Echo Papa Hotel Delta Oscar X-ray Yankee Mike Quebec Bravo Whiskey',
            description:
              'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
            label: '7/13/2021',
          },
          {
            id: 3,
            title:
              'Echo Juliett Zulu Mike Kilo Charlie Sierra India November Whiskey Lima Romeo Delta Oscar',
            description:
              'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
            label: '11/10/2020',
          },
        ],
      },
    ],
  },
]);
