import React, { Suspense } from 'react';
import Router from './routes/Router';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  );
}

export default App;
