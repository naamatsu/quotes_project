import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  color: red;
  text-align: center;
  font-family: Georgia, serif;
`;

const ErrorFallback = () => (
  <Wrapper>
    <h2>Something went wrong.</h2>
    <p>Please reload the page or try again later.</p>
  </Wrapper>
);

export default ErrorFallback;