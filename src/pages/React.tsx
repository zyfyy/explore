import React from 'react';
import GithubQuery from '../components/Query';

const ReactTopic = () => {
    return <GithubQuery title="React" query="topic:react stars:>10000" />;
};
export default ReactTopic;
