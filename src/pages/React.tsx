import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const limit = 10;

function ReactTopic({ data }) {
    console.log(this, data);
    return (
        <Layout pageTitle="React Topic">
            <p>纵览React技术栈生态</p>
        </Layout>
    );
}

export default ReactTopic;
