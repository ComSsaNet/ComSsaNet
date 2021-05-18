import React, { Suspense } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Router from './routes/Router';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyle />
      <Router />
    </Suspense>
  );
}

export default App;
