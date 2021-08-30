import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';

import { RepoCard } from './Query';

type Repo = RepoCard['repo'];

const Border = styled.div`
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 1em;
  transition: box-shadow 200ms;
  border: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.cardbg};
  box-shadow: ${({ theme }) => theme.boxshadow} 0px 0px 10px 0px;
  &:hover {
    box-shadow: ${({ theme }) => theme.boxshadow} 5px 5px 10px 0px;
  }
`;
const Open = styled.a`
  color: ${({ theme }) => theme.text};
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
  ${({ theme }) => (theme.light ? '' : 'filter: brightness(0.85);')}

  &:hover {
    transform: rotate3d(0.9, 0.9, 0.9, 6deg);
    transition: transform 500ms ease-out;
  }
`;
const Desc = styled.div`
  flex: 2;
  padding: 1em;
  word-break: break-all;
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
const TopicLink = styled(Link)`
  text-decoration: none;
`;
const ListItem = styled.li`
  white-space: nowrap;
  font-weight: 500;
  padding: 0 10px;
  font-size: 12px;
  line-height: 22px;
  border-radius: 2em;
  cursor: pointer;
  font-weight: 500;

  background: ${({ theme }) => theme.topic.bg};
  color: ${({ theme }) => theme.topic.color};
  &:hover {
    background: ${({ theme }) => theme.topic.hoverBg};
    color: ${({ theme }) => theme.topic.hoverColor};
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
      <Open href={data.url} target="_blank">
        <Title>{data.name}</Title>
        <Content>
          <Img src={data.openGraphImageUrl} />
          <Desc>
            <p>{data.description}</p>
          </Desc>
        </Content>
      </Open>
      <List>
        {data.repositoryTopics.nodes.map((item) => {
          return (
            <TopicLink href={`/topic/${item.topic.name}`} key={item.topic.name}>
              <ListItem>{item.topic.name}</ListItem>
            </TopicLink>
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
