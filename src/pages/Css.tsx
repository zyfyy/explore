import React from 'react';
import GithubQuery from '../components/Query';

const ReactTopic = () => {
    return (
        <GithubQuery title="Css" query="topic:css stars:>7000" />
    );
};
export default ReactTopic;
