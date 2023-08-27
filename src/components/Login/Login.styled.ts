import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 28%;
  margin: auto;
  text-align: center;
  background: #27292d;
  border: 2px solid #545454;
  border-radius: 5px;
  padding: 2rem;
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 100;
`;

export const LoginSubTitle = styled.h3`
  color: #6b6c70;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.02625rem;
  margin: 0.25rem;
`;

export const LoginTitle = styled.h2`
  color: #fff;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: normal;
  margin: 0.5rem;
  margin-bottom: 2.5rem;
`;

export const LoginFormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

export const FormItemLabelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
`;

export const FormItemLabel = styled.div`
  color: #c5c7ca;
  font-size: 0.85rem;
  font-weight: 300;
`;

export const FormItemInput = styled.input`
  border-radius: 0.25rem;
  border: 1.5px solid #35373b;
  color: #7f8084;
  font-size: 1rem;
  height: 2.5rem;
  background: #27292d;
  margin-bottom: 1rem;
  width: 98%;
  &::-webkit-input-placeholder {
    padding-left: 0.5rem;
  }
`;

export const FormSubmitBtn = styled.button`
  border-radius: 0.25rem;
  background: #4a96ff;
  height: 2.5rem;
  width: 100%;
  border: none;
  color: white;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const LinkContainer = styled.div`
  width: 100%;
  text-align: left;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #7f8084;
  font-size: 0.875rem;
  font-weight: 400;
  .highlight {
    color: #c5c7ca;
  }
`;

export const FormPasswordIcon = styled.img`
  position: absolute;
  margin-left: 30px;
  cursor: pointer;
  top: 40%;
  right: 5%;
`;
