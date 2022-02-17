import type { NextPage } from 'next';
import styled from 'styled-components';

import { Head, Marquee, Header, Footer } from '@/components';

const Wrapper = styled.main`
  height: 100%;
`;

const Title = styled.h1`
  font-size: 14.55vw;
  font-weight: 700;
  line-height: 0.85;
  text-align: center;
  transform: translateX(-5px);
  margin-bottom: 0.3em;
  text-transform: uppercase;
`;

const TextStroke = styled.span`
  -webkit-text-stroke: 2px white;
  -webkit-text-fill-color: transparent;
`;

const Supply = styled(TextStroke)`
  &::before,
  ::after {
    font-size: 0.15em;
    line-height: 2.5em;
    vertical-align: middle;
    border-radius: 50%;
    border: 1px solid white;
    width: 5.5em;
    height: 2.5em;
    display: inline-block;
    -webkit-text-stroke: 0px;
    -webkit-text-fill-color: var(--color-text);
    margin: 0 0.5em;
  }
  &::before {
    content: 'EST';
  }
  &::after {
    content: '2K19';
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <Wrapper>
        <Header />
        <Title>
          BASEMENT <Supply>SUPPLY</Supply>
        </Title>

        <Marquee speed={5}>A man can’t have enough base­ment swag</Marquee>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;
