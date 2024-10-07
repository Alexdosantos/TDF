import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(73, 73, 73, 0.5);
`;

export const Title = styled.h1`
  text-align: center;
  padding: 2% 0 0 0;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  margin: 0 auto;
  margin-top: 20%;
`;

export const TextErro = styled.p`
  color: red;
`;

export const Input = styled.input`
  padding: 20px;
  border: 1px solid #8b8b8b;
  border-radius: 10px;
`;

export const Button = styled.button`
  padding: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: aliceblue;
  background: blue;

  &:hover {
    background: #0202ca;
  }
`;
