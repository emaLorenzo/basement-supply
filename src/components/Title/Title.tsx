import styled from 'styled-components';

const Text = styled.span`
  display: inline-block;
  font-weight: 700;
  line-height: 0.85;
  text-transform: uppercase;
  max-width: 100%;
`;

const Stroke = styled(Text)`
  -webkit-text-stroke: 2px var(--color-text);
  -webkit-text-fill-color: transparent;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Title = ({ stroke, children, ...delegated }: any) => {
  const Component = stroke ? Stroke : Text;
  return <Component {...delegated}>{children}</Component>;
};

Title.defaultProps = {
  stroke: false,
};
