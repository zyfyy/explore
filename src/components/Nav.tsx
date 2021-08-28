import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
const routes = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/React',
        title: 'React'
    },
    {
        path: '/Js',
        title: 'Javascript'
    },
    {
        path: '/Ts',
        title: 'Typescript'
    },
    {
        path: '/Css',
        title: 'Css'
    },
    {
        path: '/Html',
        title: 'Html'
    },
    {
        path: '/K8s',
        title: 'K8s'
    },
    {
        path: '/All',
        title: 'All Topic'
    },
    {
        path: '/Any',
        title: 'Any Topic'
    }
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
    color:${({theme}) => theme.link};
`;


function Nav() {
    return (
        <nav>
            <Ul>
                {routes.map(item => {
                    return (
                        <Li key={item.path}>
                            <SLink to={item.path}>
                                {item.title}
                            </SLink>
                        </Li>
                    );
                })}
            </Ul>
        </nav>
    );
}

export default Nav;
