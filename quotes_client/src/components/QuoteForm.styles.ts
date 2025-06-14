import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  display: flex;
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
  min-height: 40px;
  width: 200px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #333;
  }
`;