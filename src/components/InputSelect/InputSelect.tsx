import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  display: inline-block;
  display: flex;
  align-items: baseline;
  gap: 0.2em;
`;

const Option = styled.button<{ selected: boolean }>`
  background-color: var(--color-secondary);
  color: currentColor;
  border: none;
  outline: none;
  border-radius: 20px;
  padding: 0.1em 0.4em;
  border: 1px solid var(--color-primary);
  border-width: ${(p) => (p.selected ? '1px' : '0px')};

  @media ${({ theme }) => theme.queries.mobile} {
    font-size: 1rem;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: var(--hover);
  }
`;

interface Props {
  selected: string;
  options: string[];
  onChange: (value: string) => void;
}

export const InputSelect = ({ selected, options, onChange }: Props) => {
  return (
    <Wrapper>
      {options.map((option) => (
        <Option
          key={option}
          onClick={() => onChange(option)}
          selected={selected === option}
        >
          {option}
        </Option>
      ))}
    </Wrapper>
  );
};
