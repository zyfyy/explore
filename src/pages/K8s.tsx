import React from 'react';
import GithubQuery from '../components/Query';

const ReactTopic = () => {
    return <GithubQuery title="k8s" query="topic:kubernetes stars:>5000" />;
};
export default ReactTopic;
