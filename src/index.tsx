import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from '@/components/App';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorFallback } from '@/components/ErrorBoundary/ErrorFallback';
import { store } from '@/store/store';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ErrorBoundary fallback={<ErrorFallback />}>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
);
