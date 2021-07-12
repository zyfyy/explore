import React from 'react';
import GithubQuery from '../components/Query';

const ReactTopic = () => {
    return (
        <GithubQuery title="Typescript" query="topic:typescript stars:>7000" />
    );
};
export default ReactTopic;
