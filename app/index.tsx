import React from "react";
import { SafeAreaView } from "react-native";
import HomePage from "./(tabs)/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


function index(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}
export default index;
