import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Wrapper = styled.button`
  overflow: hidden;
  background-color: transparent;
  border: none;
  padding: 0;
  transition: transform 0.2s ease-in-out;

  &:focus,
  &:active {
    outline: 2px solid var(--color-primary);
    outline-offset: 16px;
    transform: translateY(calc(-1 * var(--spacing)));
  }
`;

const ImageWrapper = styled.div`
  aspect-ratio: 0.76;
  background: linear-gradient(0deg, #1d1d1d 0%, rgba(21, 21, 21, 0) 100%);
  border-bottom: 3px solid var(--color-primary);
  position: relative;
  padding: var(--spacing);

  ${Wrapper}:hover & {
    /* border-bottom-width: 5px; */
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  color: var(--color-text);
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
    <article>
      <ImageWrapper>
        <Img
          src={item.image}
          layout="fill"
          objectFit="contain"
          alt={`Product image for ${item.title}`}
        />
      </ImageWrapper>
      <Info>
        <Text>{item.title}</Text>
        <Text>{item.price}</Text>
      </Info>
    </article>
  </Wrapper>
);
