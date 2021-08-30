import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useMedia } from 'react-use';

declare module 'styled-components' {
  export interface DefaultTheme {
    light: boolean;
    body: string;
    title: string;
    h1: string;
    link: string;
    text: string;
    cardbg: string;
    border: string;
    boxshadow: string;
    topic: {
      bg: string;
      color: string;
      hoverBg: string;
      hoverColor: string;
    };
  }
}

const lightTheme = {
  light: true,
  body: '#fff',
  title: 'gray',
  h1: 'rebeccapurple;',
  link: '#000',
  text: '#363537',
  cardbg: '#fff',
  border: '1px solid #ccc',
  boxshadow: '#dedede',
  topic: {
    bg: '#ddf4ff',
    color: '#0969da',
    hoverBg: '#54aeff66',
    hoverColor: '#0969da',
  },
};

const darkTheme = {
  light: false,
  body: '#555',
  title: '#d6d6d6',
  h1: '#9d53e7',
  link: '#ccc',
  text: '#ddd',
  cardbg: '#333',
  border: '1px solid #333',
  boxshadow: '#232323',
  topic: {
    bg: '#4184e426',
    color: '#539bf5',
    hoverBg: '#316dca',
    hoverColor: '#cdd9e5',
  },
};

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
`;

function Theme({ children }: { children: React.ReactChild }) {
  const preferDark = useMedia('(prefers-color-scheme: dark)');
  const theme = preferDark ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      {children}
    </ThemeProvider>
  );
}

export default Theme;
