import React from 'react';
import GithubQuery from '../components/Query';

const ReactTopic = () => {
    return (
        <GithubQuery title="Javascript" query="topic:javascript stars:>10000" />
    );
};
export default ReactTopic;
