import React from "react";
import { FetchProvider, FetchService } from "../core/api";

import { AppContextProvider } from "../core/context";
import { API_ROOT } from "helpers";
import { AuthProvider, AuthService } from "core/auth";

interface Props {
  children: React.ReactNode;
}

const authService = new AuthService();
const fetchService = new FetchService(API_ROOT ?? "", authService);

const AppProviders: React.FC<Props> = ({ children }: Props) => {
  return (
    <AppContextProvider>
      <FetchProvider fetchService={fetchService}>
        <AuthProvider authService={authService}>{children}</AuthProvider>
      </FetchProvider>
    </AppContextProvider>
  );
};

export default AppProviders;
