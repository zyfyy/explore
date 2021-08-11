import React, { useState, useEffect } from 'react';
import { useDebounce, useUpdateEffect } from 'react-use';
import styled from 'styled-components';

import { GithubQuery } from '../../components/Query';
import Layout from '../../components/Layout';

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

interface ReactTopicProp {
    params: {
        topic: string;
    };
}

const ReactTopic = ({ params }: ReactTopicProp) => {
    const routeTopic = params.topic;
    console.log(routeTopic);
    const [topic, setTopic] = useState('');
    const [query, setQuery] = useState(
        routeTopic ? `topic:${routeTopic} stars:>100` : 'stars:>100'
    );

    useDebounce(
        () => {
            if (topic) {
                setQuery(`topic:${topic} stars:>100`);
                history.pushState({}, '', `/Any/${topic}`);
            }
        },
        1000,
        [topic]
    );

    useUpdateEffect(() => {
        setQuery(`topic:${routeTopic} stars:>100`);
    }, [routeTopic]);

    return (
        <Layout pageTitle={``}>
            <Input
                size={30}
                placeholder="topic..."
                padding="6px 1em"
                value={topic}
                onChange={({ currentTarget }) => {
                    setTopic(currentTarget.value);
                }}
            />
            <GithubQuery query={query} />
        </Layout>
    );
};
export default ReactTopic;
