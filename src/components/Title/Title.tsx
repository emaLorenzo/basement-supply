import { ReactChild, ReactNode } from 'react';
import styled from 'styled-components';

const Text = styled.span`
  display: inline-block;
  font-weight: 700;
  line-height: 0.85;
  text-transform: uppercase;
`;

const Stroke = styled(Text)`
  -webkit-text-stroke: 2px var(--color-text);
  -webkit-text-fill-color: transparent;
`;

export const Title = ({ stroke, children, ...delegated }: any) => {
  const Component = stroke ? Stroke : Text;
  return <Component {...delegated}>{children}</Component>;
};

Title.defaultProps = {
  stroke: false,
};
