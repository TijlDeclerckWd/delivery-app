import { LocalStorageKey } from "../types";

class SecureUserTokenService {
  userToken: string | undefined;

  get() {
    if (this.userToken == null) {
      this.userToken = this.fetchUserToken();
    }
    return this.userToken;
  }

  set(userToken: string) {
    this.storeUserToken(userToken);
    this.userToken = userToken;
  }

  clear() {
    localStorage.removeItem(LocalStorageKey.USER_TOKEN);
    this.userToken = undefined;
  }

  fetchUserToken(): string | undefined {
    const token = localStorage.getItem(LocalStorageKey.USER_TOKEN);

    if (token != null) {
      return token;
    }
    return undefined;
  }

  storeUserToken(userToken: string) {
    localStorage.setItem(LocalStorageKey.USER_TOKEN, userToken);
  }
}

export default SecureUserTokenService;
