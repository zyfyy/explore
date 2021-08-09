import React, { useState } from 'react';
import { useDebounce } from 'react-use';
import styled from 'styled-components';

import { GithubQuery } from '../components/Query';
import Layout from '../components/Layout';

type InputAttrProps = {
    size: number;
};

type InputProps = {
    padding: string;
};

const Input = styled.input.attrs<InputAttrProps>(props => ({
    size: props.size
}))<InputProps>`
    border-radius: 10px;
    border: 1px solid gray;
    display: block;
    margin: 0 0 2em;
    padding: ${props => props.padding};
    outline: none;

    ::placeholder {
        color: gray;
    }
`;

const ReactTopic = () => {
    const [topic, setTopic] = useState('');
    const [query, setQuery] = useState('stars:>100');

    useDebounce(
        () => {
            if (topic) {
                setQuery(`topic:${topic} stars:>100`);
            }
        },
        1000,
        [topic]
    );

    return (
        <Layout pageTitle="Any topic">
            <Input
                size={30}
                placeholder="topic..."
                padding="6px 1em"
                onChange={({ currentTarget }) => {
                    setTopic(currentTarget.value);
                }}
            />
            <GithubQuery query={query} />
        </Layout>
    );
};
export default ReactTopic;
