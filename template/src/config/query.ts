import { QueryClient } from "react-query";

const queryClient = new QueryClient();

queryClient.setDefaultOptions({
  queries: { retry: false, refetchOnWindowFocus: false },
});

export default queryClient;
