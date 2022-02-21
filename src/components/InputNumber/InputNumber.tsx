import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  border: 1px solid var(--color-primary);
  color: currentColor;
  border-radius: 20px;
  overflow: hidden;
  font-size: 1.3rem;

  @media ${({ theme }) => theme.queries.mobile} {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  border: none;
  color: currentColor;
  background-color: var(--color-secondary);
  padding: 0.2rem 0.7rem 0.2rem 0.7rem;
  outline: none;

  &:first-of-type {
    padding: 0.2rem 0.3rem 0.2rem 0.7rem;
  }
  &:last-of-type {
    padding: 0.2rem 0.7rem 0.2rem 0.3rem;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: var(--hover);
  }
`;

const Input = styled.input`
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  background-color: var(--color-secondary);
  border: none;
  color: currentColor;
  width: 2ch;
  outline: none;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export const InputNumber = ({ value, onChange }: Props) => (
  <Wrapper>
    <Button onClick={() => console.log('-')}>-</Button>
    <Input type="number" readOnly value={value} />
    <Button onClick={() => console.log('+')}>+</Button>
  </Wrapper>
);
