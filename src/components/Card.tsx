import React from 'react';
import styled from 'styled-components';

import { RepoCard } from './Query';

type Repo = RepoCard['repo'];

const Border = styled.div`
    border-radius: 12px;
    padding: 12px;
    border: 1px solid #ccc;
    margin-bottom: 1em;
    box-shadow: #dedede 0px 0px 10px 0px;
    transition: box-shadow 200ms;

    &:hover {
        box-shadow: #dedede 5px 5px 10px 0px;
    }
`;
const Link = styled.a`
    color: #000;
    text-decoration: none;
`;
const Title = styled.div`
    font-size: 22px;
`;
const Content = styled.div`
    display: flex;
    margin: 1em 0;
`;
const Img = styled.img`
    width: 150px;
    height: 150px;
    flex: 1;
    display: block;
    margin: 0 auto;
    border-radius: 50%;
`;
const Desc = styled.div`
    flex: 2;
    padding: 1em;
`;
const Info = styled.div`
    display: flex;
`;
const Star = styled.div`
    flex: 1;
`;
const Url = styled.a`
    flex: 1;
    color: green;
    text-align: right;
`;
const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    column-gap: 1em;
    row-gap: 5px;
    padding: 0;
`;
const ListItem = styled.li`
    white-space: nowrap;
    background: #ddf4ff;
    color: #0969da;
    font-weight: 500;
    padding: 0 10px;
    font-size: 12px;
    line-height: 22px;
    border-radius: 2em;
    cursor: pointer;
    &:hover {
        background: #54aeff66;
    }
`;

const getHost = (url: string): string => {
    try {
        return new URL(url).host;
    } catch (e) {
        console.log(e, url);
        return url;
    }
};

function Card(props: { data: Repo }) {
    const { data } = props;
    return (
        <Border>
            <Link href={data.url} target="_blank">
                <Title>{data.name}</Title>
                <Content>
                    <Img src={data.openGraphImageUrl} />
                    <Desc>
                        <p>{data.description}</p>
                    </Desc>
                </Content>
            </Link>
            <List>
                {data.repositoryTopics.nodes.map(item => {
                    return (
                        <ListItem key={item.topic.name}>
                            {item.topic.name}
                        </ListItem>
                    );
                })}
            </List>
            <Info>
                <Star>star: {data.stars}</Star>
                <Url href={data.homepageUrl} target="_blank">
                    {getHost(data.homepageUrl || data.url)}
                </Url>
            </Info>
        </Border>
    );
}

export default Card;
