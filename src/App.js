import {
  Block,
  Flex,
  Provider,
  Text,
  Toaster,
} from '@actovos-consulting-group/ui-core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Board from 'react-trello';
import styled, { createGlobalStyle, css } from 'styled-components';
import styledNormalize from 'styled-normalize';
import Ship from './img/voyage-white.png';

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
  const [loading, setLoading] = useState(true);
  const [lanes, setLanes] = useState({ lanes: [] });

  const fetch = async () => {
    const { data } = await instance.get('/board');
    setLanes(data);
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleUpdate = async (data) => {
    await instance.post('/board', data);
    Toaster.alert({ variant: 'success', value: 'Updated Board!' });
  };

  return (
    <Provider>
      <Flex alignItems="center" bg="#ff4d86" p={10}>
        <img src={Ship} style={{ width: 30 }} alt="Voyage" />
        <Text ml={20} fontSize={16} color="white">
          Software Development Tasks
        </Text>
      </Flex>
      <Block p={20}>
        {!loading && (
          <StyledBoard onDataChange={handleUpdate} data={lanes} editable />
        )}
      </Block>
      <GlobalStyle />
      <Toaster.Provider />
    </Provider>
  );
};

export default App;
