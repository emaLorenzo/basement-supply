import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

import { Drawer, Title, CartDrawerItem } from '@/components';
import { useStore } from '@/store';

const Content = styled.div`
  padding: var(--spacing);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CloseButton = styled(Dialog.Close)`
  font-size: 1.5rem;
  border-radius: 50px;
  align-self: flex-end;
  text-transform: uppercase;
  padding: 0.5rem;
  border: none;
  background-color: var(--color-secondary);
  color: var(--color-text);
  margin-bottom: calc(var(--spacing) - 0.5rem);
  margin-right: calc(0.5rem * -1);

  &:hover {
    background-color: var(--hover);
  }
  &:focus,
  &:active {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
    background-color: var(--active);
  }

  & span {
    display: inline-block;
    transform: translateX(-50%);
    transition: transform 0.3s ease-in-out;
  }

  &:hover span,
  &:focus span,
  &:active span {
    transform: translateX(-10%);
  }
`;

const TitleWrapper = styled.div`
  font-size: max(5.6vw, 3rem);
  max-width: 100%;
  margin-bottom: 0.5rem;
  display: flex;
  gap: 0.4em;
  flex-wrap: wrap;

  @media ${({ theme }) => theme.queries.mobile} {
    font-size: 18vw;

    & h2:first-child {
      font-size: 27.5vw;
      transform: translateX(5px);
    }
    & h2:last-child {
      font-size: 27.2vw;
    }
  }
`;

const Items = styled.section`
  flex: 1;
  min-height: 8rem;
  overflow: auto;
  padding: var(--spacing);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: black;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
    border-radius: 00px; /*    roundness of the scroll thumb */
    border: 1px solid var(--color-background); /* creates padding around scroll thumb */
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: stretch;
  border-top: 1px solid var(--color-primary);
  font-size: max(2.5vw, 1.8rem);
  line-height: 1;
  margin-top: auto;

  @media ${({ theme }) => theme.queries.mobile} {
    flex-direction: column;
    border-top: none;
  }
`;

const Total = styled.p`
  flex: 1;
  border-right: 1px solid var(--color-primary);
  padding: var(--spacing);

  @media ${({ theme }) => theme.queries.mobile} {
    font-size: max(4.4vw, 1.2rem);
    border-bottom: 1px solid var(--color-primary);
    border-right: none;
  }
`;

const CheckoutButton = styled.button`
  background-color: var(--color-secondary);
  border: none;
  padding: var(--spacing);

  &:hover {
    background-color: var(--hover);
  }
  &:focus,
  &:active {
    outline: 2px solid var(--color-primary);
    background-color: var(--active);

    & span {
      -webkit-text-stroke-width: 0px;
      -webkit-text-fill-color: var(--color-text);
    }
  }

  @media ${({ theme }) => theme.queries.mobile} {
    font-size: min(14.3vw, 6.2rem);
    max-width: 100%;
  }
`;

export const CartDrawer = () => {
  const cartItems = useStore((state) => state.cartItems);

  const handleCheckout = () => {
    console.log('Your cart items -> ', cartItems);
  };
  return (
    <Drawer>
      <Content>
        <CloseButton>
          <span>→</span>
          Close
        </CloseButton>
        <TitleWrapper>
          <Title as="h2">your</Title>
          <Title as="h2" stroke>
            cart
          </Title>
        </TitleWrapper>
      </Content>
      <Items>
        {cartItems.map((cartItem) => (
          <CartDrawerItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </Items>
      <Footer>
        <Total>TOTAL: $37,50</Total>
        <CheckoutButton onClick={handleCheckout}>
          <Title stroke>Checkout</Title>
        </CheckoutButton>
      </Footer>
    </Drawer>
  );
};
