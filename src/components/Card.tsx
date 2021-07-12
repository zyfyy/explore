import React from 'react';
import styled from 'styled-components';

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

const getHost = (url: string): string => {
    try {
        return new URL(url).host;
    } catch (e) {
        console.log(e, url);
        return url;
    }
};

function Card(props) {
    const { data } = props;
    return (
        <Border>
            <Link href={data.url} target="_blank">
                <Title>{data.name}</Title>
                <Content>
                    <Img src={data.openGraphImageUrl} />
                    <Desc>{data.description}</Desc>
                </Content>
            </Link>
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
