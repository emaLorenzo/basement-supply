import styled from 'styled-components';
import Image from 'next/image';

import { CartItem } from '@/store';
import { InputNumber, InputSelect } from '@/components';

const Wrapper = styled.article`
  width: 100%;
  border: 1px solid var(--color-primary);
  display: flex;
`;

const ImageWrapper = styled.div`
  aspect-ratio: 1;
  background: linear-gradient(0deg, #1d1d1d 0%, rgba(21, 21, 21, 0) 100%);
  position: relative;
  flex: 1 1 30%;
  margin: 14px;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  flex: 1 1 70%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.h3`
  font-size: max(2.5vw, 0.875rem);
  max-width: 100%;
  text-transform: uppercase;
`;

const Subtitle = styled.h4`
  color: #999999;
  margin-bottom: 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 1.3rem;
  gap: 0.7rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;

  &:first-of-type {
    margin-top: auto;
  }
`;

const RowBetween = styled(Row)`
  justify-content: space-between;
`;

const Label = styled.label`
  text-transform: uppercase;

  @media ${({ theme }) => theme.queries.mobile} {
    font-size: 0.875rem;
  }
`;

const Total = styled.p`
  font-size: max(2.6vw, 1.5rem);
  line-height: 1;
  align-self: center;
  margin-left: auto;

  @media ${({ theme }) => theme.queries.mobile} {
    margin-left: 0px;
    margin-right: auto;
  }
`;

type Props = {
  cartItem: CartItem;
};

export const CartDrawerItem = ({ cartItem }: Props) => {
  const { item, quantity, size } = cartItem;
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={item.image} width="226" height="218" objectFit="contain" />
      </ImageWrapper>
      <Content>
        <Title>{item.title}</Title>
        <Subtitle>{item.subtitle}</Subtitle>
        <Row>
          <Label>quantity:</Label>
          <InputNumber
            value={quantity}
            onChange={(value) => {
              console.log(value);
            }}
          />
        </Row>
        <RowBetween>
          <Label>size:</Label>
          <InputSelect
            options={['S', 'M', 'L', 'XL']}
            onChange={(value) => {}}
          />
          <Total>$12,50</Total>
        </RowBetween>
      </Content>
    </Wrapper>
  );
};
