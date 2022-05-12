import React from "react";
import Router from "Route/Router";
import { QueryClient, QueryClientProvider } from "react-query";
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
   
      </QueryClientProvider>
    </>
  );
}

export default App;
