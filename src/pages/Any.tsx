import React from 'react';
import GithubQuery from '../components/Query';

const ReactTopic = () => {
    return <GithubQuery title="Any Topic" query="stars:>30000" />;
};
export default ReactTopic;
