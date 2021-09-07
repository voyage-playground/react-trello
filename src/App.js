import { Block, Provider } from '@actovos-consulting-group/ui-core';
import React from 'react';
import Board from 'react-trello';
import styled, { createGlobalStyle, css } from 'styled-components';
import styledNormalize from 'styled-normalize';
import Ship from './img/ship_grey.png';

const GlobalStyle = createGlobalStyle(
  () => css`
    ${styledNormalize}

    div#root {
      height: 100%;
      min-height: 100%;
      display: grid;
      grid-template-rows: auto 1fr auto;
    }

    html,
    body {
      height: 100%;
      background: white;
    }
    * {
      box-sizing: border-box;
    }

    a[variant='default'],
    a[variant='white'] {
      text-decoration: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-transition-delay: 9999s;
      -webkit-transition: color 9999s ease-out, background-color 9999s ease-out;
    }

    .lightbox-title-content {
      display: none;
    }
  `
);

const data = {
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
};

const StyledBoard = styled(Board)`
  height: 100%;
  background: none;
`;

const App = () => {
  return (
    <Provider>
      <Block p={20} bg="white" style={{ textAlign: 'center' }}>
        <img src={Ship} style={{ width: 50 }} alt="Voyage" />
      </Block>
      <Block p={20}>
        <StyledBoard data={data} editable />
        <GlobalStyle />
      </Block>
    </Provider>
  );
};

export default App;
