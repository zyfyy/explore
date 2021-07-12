import React, { useCallback, useEffect, useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import InfiniteScroll from 'react-infinite-scroll-component';

import Layout from './Layout';
import Card from '../components/Card';
import Loading from '../components/Loading';

const gqlCLient = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
        authorization: `Bearer 0128952b37a4edfc2df2f75e5e167a9b9daed094`
    }
});

const graphqlQuery = gql`
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

interface githubQueryType {
    title: string;
    query: string;
}
function GithubQuery({ title, query }: githubQueryType) {
    const [cards, setCards] = useState([]);
    const [cursor, setCursor] = useState(null);
    const [hasMore, setHaseMore] = useState(true);

    const fetchData = useCallback(async () => {
        const data = await gqlCLient.request(graphqlQuery, {
            query,
            cursor
        });
        const res = data.search.repos;
        if (!res.length) {
            setHaseMore(false);
            return;
        }
        setCursor(res[res.length - 1]?.cursor);
        setCards(pre => {
            return pre.concat(res);
        });
    }, [query, cursor]);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Layout pageTitle={title}>
            <div>
                <InfiniteScroll
                    dataLength={cards.length}
                    hasMore={hasMore}
                    next={fetchData}
                    endMessage={`没有更多了(total: ${cards.length})`}
                    loader={<Loading />}
                >
                    {cards.map(card => {
                        return <Card key={card.cursor} data={card.repo} />;
                    })}
                </InfiniteScroll>
            </div>
        </Layout>
    );
}

export default GithubQuery;
