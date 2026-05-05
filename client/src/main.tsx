import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './shared/lib/react-query.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    {/* </Provider> */}
  </StrictMode>,
);
