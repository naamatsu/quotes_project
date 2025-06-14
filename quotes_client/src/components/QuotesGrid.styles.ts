import styled, { keyframes } from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
`;

export const Th = styled.th`
  text-align: left;
  padding: 1rem;
  border-bottom: 2px solid #ccc;
  font-size: 1rem;
  font-weight: bold;
`;

export const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  vertical-align: top;
`;

export const Tag = styled.span`
  background-color: #f3f3f3;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.85rem;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const Button = styled.button<{ disabled?: boolean }>`
  background: black;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;

  &:disabled {
    background: #999;
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.span`
  font-size: 1rem;
`;


const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const Spinner = styled.div`
  width: 36px;
  height: 36px;
  border: 4px solid #ccc;
  border-top: 4px solid black;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin: 0 auto 10px;
`;

export const LoadingMessage = styled.p`
  font-size: 1rem;
  color: #333;
`;


