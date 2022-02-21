import React, { useContext, useMemo, useState, useEffect } from 'react';
import { AppConfig } from './configTypes';
import config from './config/config';

export interface AppContextProps {
  appConfig: AppConfig;
}

export const AppContext = React.createContext<AppContextProps | null>(null);

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('Wrap app with AppContextProvider');
  }
  return ctx;
};

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [appConfig] = useState<AppConfig>(config);

  const value = useMemo(
    () => ({
      appConfig,
    }),
    [appConfig],
  );

  return <AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>;
};
