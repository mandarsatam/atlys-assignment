import { styled } from "styled-components";

export const PostContainer = styled.div`
  border-radius: 0.5rem;
  border: 2px solid #35373b;
  background: #27292d;
  padding: 1.5rem 1.25rem;
  position: relative;
  margin-bottom: 1rem;
`;

export const PostTopSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const LeftSection = styled.div`
  margin-right: 1rem;
  img {
    width: 2.75rem;
    height: 2.75rem;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
  }
`;

export const MiddleSection = styled.div`
  flex-grow: 1;
`;

export const RightSection = styled.div`
`

export const ProfileName = styled.div`
  color: #c5c7ca;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.25rem;
`;

export const CreateTime = styled.div`
  color: #7f8084;
  font-size: 0.875rem;
`;

export const PostContentSection = styled.div`
  border-radius: 0.5rem;
  background: #191920;
  border: none;
  margin-bottom: 1rem;
  padding: 1rem 1rem 1rem 5rem;
  font-size: 1rem;
  position: relative;
`;

export const PostLeftSection = styled.div`
  width: 3rem;
  height: 3rem;
  background: #27292d;
  border-radius: 50%;
  position: absolute;
  text-align: center;
  align-items: center;
  line-height: 3rem;
  top: 1rem;
  left: 1rem;
`;

export const PostRightSection = styled.div`
  color: #7f8084;
  font-family: Inter;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const PostCommentContainer = styled.div`
  display: flex;
  button {
    color: #7f8084;
    font-size: 0.875rem;
    font-weight: 500;
    border: none;
    background-color: #27292d;
    margin-left: 0.25rem;
  }
`;
