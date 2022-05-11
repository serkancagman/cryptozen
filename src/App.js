import React from "react";
import Router from "Route/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ScrollToTop from "Hooks/ScrollToTop";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <Router />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
