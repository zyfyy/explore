import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Github Explore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <ul>
          <li>github graphql api on gatsby graphql layer </li>
        </ul>
      </Layout>
    </div>
  );
};

export default Home;
