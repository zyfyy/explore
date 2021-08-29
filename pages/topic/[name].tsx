import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { useRouter } from 'next/dist/client/router';
import { useDebounce, useUpdateEffect } from 'react-use';
import styled from 'styled-components';

import { GithubQuery } from '../../components/Query';
import Layout from '../../components/Layout';

const Input = styled.input`
  border-radius: 10px;
  border: 1px solid gray;
  display: block;
  margin: 0 0 2em;
  padding: 6px 1em;
  outline: none;

  ::placeholder {
    color: gray;
  }
`;

const Topic: NextPage = () => {
  const route = useRouter();
  const routeTopic = route.query.name;
  console.log(routeTopic);

  const [topic, setTopic] = useState('');
  const [title, setTitle] = useState(routeTopic);
  const [query, setQuery] = useState(
    routeTopic ? `topic:${routeTopic} stars:>100` : 'stars:>100'
  );

  useDebounce(
    () => {
      if (topic) {
        setQuery(`topic:${topic} stars:>100`);
        setTitle(topic);
        history.pushState({}, '', `/topic/${topic}`);
      }
    },
    1000,
    [topic]
  );

  useUpdateEffect(() => {
    setQuery(`topic:${routeTopic} stars:>100`);
    setTitle(routeTopic);
  }, [routeTopic]);

  return (
    <div>
      <Head>
        <title>Github Explore | {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <Input
            placeholder="topic..."
            value={topic}
            onChange={({ currentTarget }) => {
              setTopic(currentTarget.value);
            }}
          />
          <GithubQuery query={query} />
        </>
      </Layout>
    </div>
  );
};

export default Topic;
