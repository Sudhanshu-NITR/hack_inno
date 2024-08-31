import React from 'react';
import styled, { keyframes } from 'styled-components';

const fall = keyframes`
  to {
    transform: translate3d(-30em, 0, 0);
  }
`;

const tailFade = keyframes`
  0%, 50% {
    width: var(--star-tail-length);
    opacity: 1;
  }

  70%, 80% {
    width: 0;
    opacity: 0.4;
  }

  100% {
    width: 0;
    opacity: 0;
  }
`;

const blink = keyframes`
  50% {
    opacity: 0.6;
  }
`;

const StarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  transform: rotate(-45deg);
`;

const Star = styled.div`
  --star-color: #ffffff;
  --star-tail-length: 6em;
  --star-tail-height: 2px;
  --star-width: calc(var(--star-tail-length) / 6);
  --fall-duration: 9s;
  --tail-fade-duration: var(--fall-duration);

  position: absolute;
  top: var(--top-offset);
  left: 0;
  width: var(--star-tail-length);
  height: var(--star-tail-height);
  color: var(--star-color);
  background: linear-gradient(45deg, currentColor, transparent);
  border-radius: 50%;
  filter: drop-shadow(0 0 6px currentColor);
  transform: translate3d(104em, 0, 0);
  animation: ${fall} var(--fall-duration) var(--fall-delay) linear infinite, ${tailFade} var(--tail-fade-duration) var(--fall-delay) ease-out infinite;

  &::before, &::after {
    position: absolute;
    content: '';
    top: 0;
    left: calc(var(--star-width) / -2);
    width: var(--star-width);
    height: 100%;
    background: linear-gradient(45deg, transparent, currentColor, transparent);
    border-radius: inherit;
    animation: ${blink} 2s linear infinite;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const StarField = () => {
  const generateStars = () => {
    const starElements = [];
    const starCount = 50;

    const randomRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    for (let i = 0; i < starCount; i++) {
      const topOffset = randomRange(0, 10000) / 100 + 'vh';
      const starTailLength = randomRange(500, 750) / 100 + 'em';
      const fallDuration = randomRange(6000, 12000) / 1000 + 's';
      const fallDelay = randomRange(0, 10000) / 1000 + 's';

      starElements.push(
        <Star
          key={i}
          style={{
            '--top-offset': topOffset,
            '--star-tail-length': starTailLength,
            '--fall-duration': fallDuration,
            '--fall-delay': fallDelay,
          }}
        />
      );
    }

    return starElements;
  };

  return (
    <StarContainer>
      {generateStars()}
    </StarContainer>
  );
};

export default StarField;
