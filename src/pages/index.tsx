import type { NextPage } from 'next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Head, Marquee, Header, Footer } from '@/components';
import { BREAKPOINTS } from '@/theme';

const Wrapper = styled.main`
  height: 100%;
`;

const Title = styled(motion.h1)`
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

const Grid = styled.section`
  margin-top: 8rem;
  margin-bottom: 6rem;
  display: flex;
  padding: 0 var(--spacing);
  gap: var(--spacing);

  @media ${({ theme }) => theme.queries.mobile} {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 1;
  aspect-ratio: 0.76;
  background: linear-gradient(0deg, #1d1d1d 0%, rgba(21, 21, 21, 0) 100%);
  border-bottom: 3px solid var(--color-primary);
`;

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <Wrapper>
        <Header />
        <Title
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          BASEMENT <Supply>SUPPLY</Supply>
        </Title>
        <Marquee speed={5}>A man can’t have enough base­ment swag</Marquee>
        <Grid>
          <Card />
          <Card />
          <Card />
        </Grid>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;
