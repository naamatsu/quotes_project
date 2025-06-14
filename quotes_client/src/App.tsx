import React from 'react';
import ErrorFallback from './components/ErrorFallback';
import ErrorBoundary from './components/ErrorBoundry';
import QuotesOfTheDay from './pages/QuotesOfTheDay';

function App() {

  return (
   <ErrorBoundary fallback={ErrorFallback}>
    <QuotesOfTheDay />
   </ErrorBoundary>
  )
}

export default App
