import styled from 'styled-components';

const Wrapper = styled.button`
  border-radius: 50px;
  background-color: var(--color-secondary);
  border: 1.5px solid var(--color-primary);
  padding: 0.5em;

  &:hover {
    background-color: var(--hover);
  }
  &:focus,
  &:active {
    outline: 2px solid var(--color-primary);
    outline-offset: 4px;
    background-color: var(--active);
  }
`;

const Text = styled.span`
  padding: 0.5em 1em;
  font-size: 1.2rem;
  color: var(--color-text);
  text-transform: uppercase;
  font-weight: 700;
`;

export const Button = ({ title }: { title: string }) => (
  <Wrapper>
    <Text>{title}</Text>
  </Wrapper>
);
