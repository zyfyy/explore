import React from 'react';
import styled from 'styled-components';

import Theme from './Theme';
import Nav from './Nav';

const Main = styled.main`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`;
const Title = styled.p`
  font-size: 3rem;
  color: ${({ theme }) => theme.title};
  font-weight: 700;
`;

const Layout = ({ children }: { children: React.ReactChild }) => {
  return (
    <Theme>
      <Main>
        <Title>Github Explore</Title>
        <Nav />
        {children}
      </Main>
    </Theme>
  );
};

export default Layout;
