import { Block, Provider } from '@actovos-consulting-group/ui-core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
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

const StyledBoard = styled(Board)`
  height: 100%;
  background: none;
`;

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const App = () => {
  const [lanes, setLanes] = useState({ lanes: [] });

  const fetch = async () => {
    const { data } = await instance.get('/board');
    setLanes(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleUpdate = async (data) => {
    await instance.post('/board', data);
  };

  return (
    <Provider>
      <Block p={20} bg="white" style={{ textAlign: 'center' }}>
        <img src={Ship} style={{ width: 50 }} alt="Voyage" />
      </Block>
      <Block p={20}>
        <StyledBoard onDataChange={handleUpdate} data={lanes} editable />
        <GlobalStyle />
      </Block>
    </Provider>
  );
};

export default App;
