"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { useState } from "react";

interface ReactQueryClientProviderProps {
  children: React.ReactNode;
}

function ReactQueryClientProvider({ children }: ReactQueryClientProviderProps) {
  // Check if window is defined (i.e., we're in a browser environment)
  const isBrowser = typeof window !== "undefined";

  // const queryClient = isBrowser
  //   ? new QueryClient({
  //       defaultOptions: {
  //         queries: {
  //           // cacheTime: 1000 * 60 * 60 * 24, // 24 hours
  //         },
  //       },
  //     })
  //   : null;

  const [queryClient] = useState(() => new QueryClient());

  const persister: any = isBrowser
    ? createSyncStoragePersister({
        storage: window.localStorage,
      })
    : null;

  if (!isBrowser) {
    return <>{children}</>; // Just render children for SSR.
  }

  return (
    <PersistQueryClientProvider
      client={queryClient!}
      persistOptions={{ persister }}
    >
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  );
}

export default ReactQueryClientProvider;
