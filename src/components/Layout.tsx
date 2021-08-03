import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
// TODO gatsby-plugin-scss-typescript does not generat .d.ts file
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
} from './layout.module.css';

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
        <main className={container}>
            <title>{`${pageTitle} | ${data.site.siteMetadata.title}`}</title>
            <p className={siteTitle}>{data.site.siteMetadata.title}</p>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/React" className={navLinkText}>
                            React
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/Js" className={navLinkText}>
                            Javascript
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/Ts" className={navLinkText}>
                            Typescript
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/Css" className={navLinkText}>
                            Css
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/Html" className={navLinkText}>
                            Html
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/K8s" className={navLinkText}>
                            k8s
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/Any" className={navLinkText}>
                            Any Topic
                        </Link>
                    </li>
                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
    );
};

export default Layout;
