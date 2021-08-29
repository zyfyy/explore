import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
const routes = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/topic/react',
    title: 'React',
  },
  {
    path: '/topic/javascript',
    title: 'Javascript',
  },
  {
    path: '/topic/typescript',
    title: 'Typescript',
  },
  {
    path: '/topic/css',
    title: 'Css',
  },
  {
    path: '/topic/html',
    title: 'Html',
  },
  {
    path: '/topic/k8s',
    title: 'K8s',
  },
  {
    path: '/All',
    title: 'All Topic',
  },
];

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
`;
const Li = styled.li`
  padding-right: 2rem;
`;
const SLink = styled(Link)`
  color: ${({ theme }) => theme.link};
`;

function Nav() {
  return (
    <nav>
      <Ul>
        {routes.map((item) => {
          return (
            <Li key={item.path}>
              <SLink href={item.path}>{item.title}</SLink>
            </Li>
          );
        })}
      </Ul>
    </nav>
  );
}

export default Nav;
