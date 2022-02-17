import { CSSProperties } from 'react';
import styled from 'styled-components';

export interface CSSText extends CSSProperties {
  '--speed': string;
}

const Wrapper = styled.div`
  font-size: 2.5vw;
  font-weight: 700;
  overflow: hidden;
  color: var(--color-text);
  border-top: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;

  --marquee-width: 65vw;
`;

const Text = styled.span`
  display: inline-block;
  white-space: nowrap;
  width: var(--marquee-width);
  text-shadow: var(--marquee-width) 0 currentColor,
    calc(var(--marquee-width) * 2) 0 currentColor,
    calc(var(--marquee-width) * 3) 0 currentColor,
    calc(var(--marquee-width) * 4) 0 currentColor;

  will-change: transform;
  animation: marquee var(--speed) linear infinite;
  /* animation-play-state: paused; */

  &:after {
    content: '—';
    padding: 0 0.5em;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    text-shadow: none;
    width: auto;
    display: block;
    text-align: center;
    white-space: normal;
  }
`;

export const Marquee = ({
  speed = 5,
  children,
}: {
  speed: number;
  children: string;
}) => (
  <Wrapper>
    <Text style={{ '--speed': `${speed}s` } as CSSText}>{children}</Text>
  </Wrapper>
);
