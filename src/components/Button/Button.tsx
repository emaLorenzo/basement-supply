import styled from 'styled-components';

const Wrapper = styled.button`
  border-radius: 50px;
  background-color: var(--color-secondary);
  border: 1.5px solid var(--color-primary);
  padding: 0.5em;
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
