import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Wrapper = styled.article`
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  aspect-ratio: 0.76;
  background: linear-gradient(0deg, #1d1d1d 0%, rgba(21, 21, 21, 0) 100%);
  border-bottom: 3px solid var(--color-primary);
  position: relative;
  padding: var(--spacing);
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  background-color: var(--color-secondary);
`;

const Text = styled.p`
  font-size: 1.3rem;
`;

// hack for the cap image smaller than the rest
const Img = styled(Image)`
  ${Wrapper}:last-child & {
    padding: 5rem !important;
  }
`;

type Item = { title: string; image: string; price: number };

export const Card = ({ item }: { item: Item }) => (
  <Wrapper>
    <ImageWrapper>
      <Img src={item.image} layout="fill" objectFit="contain" />
    </ImageWrapper>
    <Info>
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>
    </Info>
  </Wrapper>
);
