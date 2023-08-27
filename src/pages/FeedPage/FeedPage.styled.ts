import { css, keyframes, styled } from "styled-components";

const blurAnimation = keyframes`
  from {
    filter: blur(0);
  }
  to {
    filter: blur(10px);
  }
`;

export const FeedContainer = styled.div<{ $isBlur?: boolean }>`
  padding: 0 25%;
  margin: auto;

  ${({ $isBlur }) =>
    $isBlur &&
    css`
      animation: ${blurAnimation} 1s forwards;
    `}
`;

export const FeedTopSection = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

export const FeedGreeting = styled.h2`
  color: #c5c7ca;
  font-size: 1.75rem;
  font-weight: 500;
`;

export const FeedGreetingDesc = styled.p`
  color: #7f8084;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  width: 75%;
  text-align: left;
`;

export const FeedBottomSection = styled.div``;
