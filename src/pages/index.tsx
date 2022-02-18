import type { NextPage } from 'next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Head, Marquee, Header, Footer, Card, CartDrawer } from '@/components';

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
  -webkit-text-stroke: 2px var(--color-text);
  -webkit-text-fill-color: transparent;
`;

const Supply = styled(TextStroke)`
  &::before,
  ::after {
    font-size: 0.15em;
    line-height: 2.5em;
    vertical-align: middle;
    border-radius: 50%;
    border: 1.5px solid currentColor;
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
  padding: 0 var(--spacing);

  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(calc(550px / 2 - var(--spacing) * 1.5), 1fr)
  );
  grid-gap: var(--spacing);

  @media ${({ theme }) => theme.queries.mobile} {
    grid-: column;
  }
`;

const items = [
  {
    id: 1,
    title: 'Black t-shirt',
    image: '/images/remera.webp',
    price: 7.95,
  },
  { id: 2, title: 'Black hoodie', image: '/images/buzo.webp', price: 13 },
  { id: 3, title: 'Black cap', image: '/images/gorra.webp', price: 23 },
];

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
          {items.map(({ id, ...item }) => (
            <Card key={id} item={item} />
          ))}
        </Grid>
        <Footer />
      </Wrapper>
      <CartDrawer />
    </>
  );
};

export default Home;
