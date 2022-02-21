import React, { useContext } from 'react';

import FetchService from './FetchService';

export const FetchContext = React.createContext<FetchService | undefined>(
  undefined,
);

export const useFetch = () => {
  const ctx = useContext(FetchContext);
  if (!ctx) {
    throw new Error('Wrap app with FetchProvider');
  }
  return ctx;
};

interface Props {
  children: React.ReactNode;
  fetchService: FetchService;
}

export const FetchProvider: React.FC<Props> = ({
  fetchService,
  children,
}: Props) => {
  return (
    <FetchContext.Provider value={fetchService}>
      {children}
    </FetchContext.Provider>
  );
};
