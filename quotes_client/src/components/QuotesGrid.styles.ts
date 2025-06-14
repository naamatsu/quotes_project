import styled from "styled-components";

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

