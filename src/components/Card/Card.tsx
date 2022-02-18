import styled from 'styled-components';
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
  display: grid;
  place-items: center;

  ${Wrapper}:hover & {
    background: linear-gradient(0deg, #2d2d2d 0%, rgba(21, 21, 21, 0) 100%);
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

const AddToCart = styled.p`
  opacity: 0;
  position: absolute;
  text-transform: uppercase;
  color: var(--color-secondary);
  font-size: 1.8rem;
  -webkit-text-stroke-color: var(--color-primary);
  -webkit-text-stroke-width: 1px;
  background-image: url('/images/glove.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 4.3em;
  line-height: 4.3em;
  transition: opacity 0.2s ease-in-out;

  ${Wrapper}:hover, ${Wrapper}:focus & {
    opacity: 1;
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
        <AddToCart>Add to cart</AddToCart>
      </ImageWrapper>
      <Info>
        <Text>{item.title}</Text>
        <Text>{item.price}</Text>
      </Info>
    </article>
  </Wrapper>
);
