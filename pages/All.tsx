import React from 'react';
import Head from 'next/head';
import StaticQuery from '../components/Query';

const ReactTopic = () => {
  return (
    <div>
      <Head>
        <title>Github Explore | All</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StaticQuery title="All Topic" query="stars:>3000" />
    </div>
  );
};
export default ReactTopic;
