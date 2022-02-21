import SecureUserTokenService from './SecureUserTokenService';

// TODO: room for improvement here, turn into functional component?
class AuthService {
 secureTokenService: SecureUserTokenService = new SecureUserTokenService();

  initialize() {}

  getUserToken(): string | undefined {
    return this.secureTokenService.get();
  }

  getAccessToken(): string {
    const userToken = this.secureTokenService.get();
    return userToken ?? '';
  }

  setUserToken(userToken: string) {
    this.secureTokenService.set(userToken);
  }

  clearUserToken() {
    this.secureTokenService.clear();
  }
}

export default AuthService;
