import { styled } from "styled-components";

export const CreatePostContainer = styled.div`
  border-radius: 0.5rem;
  border: 2px solid #35373b;
  background: #27292d;
  padding: 1.25rem;
  position: relative;
  margin-bottom: 1rem;
`;

export const CreatePostTitle = styled.h3`
  color: #c5c7ca;
  font-size: 1.125rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const CreatePostInput = styled.input`
  height: 4.5rem;
  border-radius: 0.5rem;
  background: #191920;
  border: none;
  width: 99.5%;
  margin-bottom: 1rem;
  &::-webkit-input-placeholder {
    padding-left: 4.5rem;
    font-size: 1rem;
  }
`;

export const CreatePostBottom = styled.div`
    text-align: left;
    display: flex;
    justify-content: flex-end;
`;

export const CreatePostBtn = styled.button`
  border-radius: 0.25rem;
  height: 2.6875rem;
  width: 6.9375rem;
  background: #4a96ff;
  border: none;
  color: white;
`;

export const CreatePostEmoji = styled.div`
  width: 3rem;
  height: 3rem;
  background: #27292d;
  border-radius: 50%;
  position: absolute;
  text-align: center;
  align-items: center;
  line-height: 3rem;
  top: 4.5rem;
  left: 2rem;
`;
