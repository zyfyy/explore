import * as React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

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
const H1 = styled.h1`
    color: ${({ theme }) => theme.h1};
`;

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    return (
        <Theme>
            <Main>
                <title>{`${pageTitle} | ${data.site.siteMetadata.title}`}</title>
                <Title>{data.site.siteMetadata.title}</Title>
                <Nav />
                <H1>{pageTitle}</H1>
                {children}
            </Main>
        </Theme>
    );
};

export default Layout;
