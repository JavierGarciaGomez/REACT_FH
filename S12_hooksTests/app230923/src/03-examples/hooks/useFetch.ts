import { useEffect, useState } from "react";

type FetchedData = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type FetchState = {
  data: FetchedData | undefined;
  isLoading: boolean;
  hasError: boolean;
};

export const useFetch = (url: string) => {
  const [fetchState, setFetchState] = useState<FetchState>({
    data: undefined,
    isLoading: true,
    hasError: false,
  });

  const getFetch = async () => {
    setFetchState({ ...fetchState, isLoading: true });
    const resp = await fetch(url);
    const data = await resp.json();
    setTimeout(() => {
      setFetchState({ ...fetchState, isLoading: false, data });
    }, 1000);
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    ...fetchState,
  };
};
