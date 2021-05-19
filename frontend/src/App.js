import React, { Suspense } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from './routes/Router';
import theme from './style/theme';

const GlobalStyle = createGlobalStyle`
   a{
		text-decoration: none;
		color: inherit;
	}
	*{
		box-sizing: border-box;
	}
  body {
    font-size:14px;
    width: 100%;
		height: 100%;
    line-height: 1.43;
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
