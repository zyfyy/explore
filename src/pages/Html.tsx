import React from 'react';
import GithubQuery from '../components/Query';

const ReactTopic = () => {
    return (
        <GithubQuery title="html" query="topic:html stars:>7000" />
    );
};
export default ReactTopic;
