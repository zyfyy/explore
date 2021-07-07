import * as React from 'react';
import { Link } from 'gatsby';
import { container } from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
    return (
        <main className={container}>
            <title>My Github Explore - {pageTitle}</title>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/React">React Topic</Link>
                    </li>
                </ul>
            </nav>
            <h1>{pageTitle}</h1>
            {children}
        </main>
    );
};

export default Layout;
