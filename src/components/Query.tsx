import React, { useCallback, useEffect, useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import InfiniteScroll from 'react-infinite-scroll-component';

import Layout from './Layout';
import Card from '../components/Card';
import Loading from '../components/Loading';

import './Query.css';

const gqlCLient = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
        authorization: `Bearer ${process.env.GATSBY_API_KEY}`
    }
});

interface TopicType {
    totalCount: number;
    nodes: {
        topic: {
            name: string;
            stargazerCount: number;
        };
    }[];
}

interface LauguageType {
    totalCount: number;
    nodes: {
        name: string;
        color: number;
    }[];
}

interface RepositoryType {
    search: {
        repos: {
            cursor: string;
            repo: {
                name: string;
                description: string;
                openGraphImageUrl: string;
                url: string;
                homepageUrl: string;
                stars: number;
                forks: number;
                watchers: {
                    totalCount: number;
                };
                repositoryTopics: TopicType;
                languages: LauguageType;
            };
        }[];
    };
}

export type RepoCard = RepositoryType['search']['repos'][0];

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
                    repositoryTopics(first: 100) {
                        totalCount
                        nodes {
                            topic {
                                name
                                stargazerCount
                            }
                        }
                    }
                    languages(first: 100) {
                        totalCount
                        nodes {
                            name
                            color
                        }
                    }
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

interface staticQueryType {
    title: string;
    query: string;
}

type githubQueryType = Pick<staticQueryType, 'query'>;

export function GithubQuery({ query }: githubQueryType) {
    const [cards, setCards] = useState<RepoCard[]>([]);
    const [cursor, setCursor] = useState(null);
    const [hasMore, setHaseMore] = useState(true);

    const fetchData = useCallback(
        async (cursor: string) => {
            const data: RepositoryType = await gqlCLient.request(graphqlQuery, {
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
        },
        [query]
    );

    useEffect(() => {
        setCards([]);
        setHaseMore(true);
        fetchData(null);
    }, [query]);

    return (
        <div>
            <InfiniteScroll
                dataLength={cards.length}
                hasMore={hasMore}
                next={() => fetchData(cursor)}
                endMessage={`没有更多了(total: ${cards.length})`}
                loader={<Loading />}
            >
                {cards.map(card => {
                    return <Card key={card.cursor} data={card.repo} />;
                })}
            </InfiniteScroll>
        </div>
    );
}

function StaticQuery({ title, query }: staticQueryType) {
    return (
        <Layout pageTitle={title}>
            <GithubQuery query={query} />
        </Layout>
    );
}

// export default GithubQuery;
export default StaticQuery;
