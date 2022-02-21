import React, { useContext } from 'react';

import AuthService from './AuthService';

export const AuthContext = React.createContext<AuthService | undefined>(
  undefined,
);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('Wrap app with AuthProvider');
  }
  return ctx;
};

interface Props {
  children: React.ReactNode;
  authService: AuthService;
}

export const AuthProvider: React.FC<Props> = ({
  authService,
  children,
}: Props) => {
  return (
    <AuthContext.Provider value={authService}>{children}</AuthContext.Provider>
  );
};
