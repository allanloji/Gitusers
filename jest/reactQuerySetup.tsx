import React from 'react';
import { QueryClientProvider, setLogger, QueryClient } from 'react-query';

const setupReactQuery = () => {
  setLogger({
    // eslint-disable-next-line no-console
    log: console.log,
    // eslint-disable-next-line no-console
    warn: console.warn,
    error: () => {},
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false, staleTime: 0 },
    },
  });

  // @ts-ignore
  const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return { wrapper, queryClient };
};

export default setupReactQuery;
