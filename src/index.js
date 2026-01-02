import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import theme from './theme';
import QuerySuspense from './components/QuerySuspense';
import { ErrorBoundary } from 'react-error-boundary';

const cli = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<p>Loading...</p>}>
        <ErrorBoundary fallback={<div>エラーが発生しました</div>}>
          <QueryClientProvider client={cli}>
            <QuerySuspense />
          </QueryClientProvider>
        </ErrorBoundary>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
