import React, { useCallback, useEffect, useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import { useToggle } from 'react-use';

import Layout from '../components/layout';
import Card from '../components/Card';
import Loading from '../components/Loading';

const gqlCLient = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
        authorization: `Bearer 0128952b37a4edfc2df2f75e5e167a9b9daed094`
    }
});
const query = gql`
    fragment result on SearchResultItemConnection {
        repositoryCount
        repos: edges {
            cursor
            repo: node {
                ... on Repository {
                    name
                    description
                    openGraphImageUrl
                    url
                    homepageUrl
                    stars: stargazerCount
                    forks: forkCount
                    watchers {
                        totalCount
                    }
                    labels {
                        totalCount
                    }
                    languages {
                        totalCount
                    }
                    diskUsage
                }
            }
        }
    }
    query ($query: String!, $cursor: String) {
        search(query: $query, type: REPOSITORY, first: 10, after: $cursor) {
            ...result
        }
    }
`;

function ReactTopic() {
    const [cards, setCards] = useState(null);
    const [loading, toggleLoading] = useToggle(true);

    const req = useCallback(async () => {
        const data = await gqlCLient.request(query, {
            query: 'topic:react stars:>10000'
        });
        return data;
    }, []);

    useEffect(() => {
        toggleLoading(true);
        const fetchData = async () => {
            const data = await req();
            console.log(data.search.repos);
            setCards(data.search.repos);
            toggleLoading(false);
        };
        fetchData();
    }, []);

    return (
        <Layout pageTitle="React Topic">
            <h4>纵览React技术栈生态</h4>
            {cards && cards.length
                ? cards.map((card, idx) => {
                    return <Card key={idx} data={card.repo} />;
                })
                : ''}
            <button>more</button>
            {loading ? <Loading /> : ''}
        </Layout>
    );
}

export default ReactTopic;
