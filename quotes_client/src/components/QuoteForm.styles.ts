import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1.1rem;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  background: black;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  min-height: 45px;
  width: 200px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-left: 25px;

  &:hover {
    background: #333;
  }
  &:disabled {
    background: #999;
    cursor: not-allowed;
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin: 4px 0 0;
  min-height: 18px;
`;