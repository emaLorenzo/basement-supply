import styled from 'styled-components';

const Wrapper = styled.main``;

const Title = styled.h1`
  font-size: 14.55vw;
  font-weight: 700;
  line-height: 0.85;
  text-align: center;
  transform: translateX(-5px);
  margin-bottom: 0.3em;
  text-transform: uppercase;
`;

const TextStroke = styled.span`
  -webkit-text-stroke: 2px white;
  -webkit-text-fill-color: transparent;
`;

export const Footer = () => (
  <Wrapper>
    <Title>WEAR everyday</Title>
  </Wrapper>
);
