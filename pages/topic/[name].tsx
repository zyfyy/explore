import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { useRouter } from 'next/dist/client/router';

import StaticQuery from '../../components/Query';

const Topic: NextPage = () => {
  const route = useRouter();

  let title = route.query.name;
  if (Array.isArray(title)) {
    title = title[0];
  }
  let query = `topic:${title}`;

  return title ? (
    <div>
      <Head>
        <title>Github Explore | {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StaticQuery title={title || 'Any'} query={query} />
    </div>
  ) : (
    <></>
  );
};

export default Topic;
