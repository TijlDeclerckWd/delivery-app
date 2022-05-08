import { AuthService } from '../auth';
import { ApiError } from './apiTypes';

interface Options extends RequestInit {
  skipAuthentication?: boolean;
  alternativeBaseUrl?: string;
}

// TODO: I had to remove the 'private keyword used in this doc, try to add it again
class FetchService {
  baseUrl: string;
  authService: AuthService | undefined;

  constructor(baseUrl: string, authService?: AuthService) {
    this.baseUrl = baseUrl;
    this.authService = authService;
  }

  post(endpoint: string, options?: Options) {
    return this.request(endpoint, { ...options, method: 'POST' });
  }

  put(endpoint: string, options?: Options) {
    return this.request(endpoint, { ...options, method: 'PUT' });
  }

  get(endpoint: string, options?: Options) {
    return this.request(endpoint, options);
  }

  patch(endpoint: string, options?: Options) {
    return this.request(endpoint, { ...options, method: 'PATCH' });
  }

  delete(endpoint: string, options?: Options) {
    return this.request(endpoint, { ...options, method: 'DELETE' });
  }

  request(endpoint: string, options?: Options) {
    const requestInit = {
      ...this.options(options),
      headers: this.headers(options),
    };

    if (options?.body && !(options?.body instanceof FormData)) {
      requestInit.body = JSON.stringify(options.body);
    }

    // TODO: reimplement this once the token through AUTHORIZATION has been reinstated
    if (this.authService != null && !options?.skipAuthentication) {
      const userToken = this.authService.getUserToken();
      if (userToken != null) {
        requestInit.headers.append(
          'Authorization',
          `Bearer ${userToken}`,
        );
      }
    }

    // TODO: handle this to handle the incoming errors from the server
    return fetch(this.endpoint(endpoint, options?.alternativeBaseUrl), requestInit)
      .then(response => (response.ok ? response : Promise.reject(response)))
      .then(async res => {
        const resAsText = await res.text();
        try {
          return JSON.parse(resAsText);
        } catch (e) {
          return Promise.resolve();
        }
      })
      .catch(async err => {
        const { status } = err;
        
        if (err instanceof Error) {
          return Promise.reject({
            title: err.message,
          });
        }
        
        const apiError = await this.parseErrorResponse(err, endpoint);
        
        if (status === 401) {
          // this.authService?.clearUserToken();
          return Promise.reject({
            ...apiError,
            title: 'Unauthorized',
          });
        }

        if (status === 403) {
          // TODO: reactivate this?
          // this.authService?.clearUserToken();
          return Promise.reject({
            ...apiError,
            title: 'Forbidden',
          });
        }

        if (status === 404) {
          return Promise.reject({
            ...apiError,
            title: 'Not found',
          });
        }

        return Promise.reject(apiError);
      });
  }

  async parseErrorResponse(
    err: any,
    endpoint: string,
  ): Promise<ApiError> {
    const txt = await err.text();
    try {
      const json = JSON.parse(txt);

      return {
        title:
          json.error ?? json.title ?? json.message ?? 'Something went wrong',
        description: json.error_description ?? json.detail ?? '',
        fields: json.errors ?? {},
        endpoint,
        redirect_url: json.redirect_url,
      };
    } catch {
      return {
        title: 'Something went wrong',
        description: '',
        endpoint,
      };
    }
  }

  endpoint(endpoint: string, alternativeBaseUrl?: string) {
    return `${alternativeBaseUrl || this.baseUrl}/${endpoint}`;
  }

  options(options?: Options) {
    const defaultOptions: RequestInit = {
      method: 'GET',
    };
    return {
      ...defaultOptions,
      ...options,
    };
  }

  headers(options?: Options) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    if (options?.headers) {
      Object.entries(options.headers).forEach(([key, header]) => {
        if (!header) {
          headers.delete(key);
        } else {
          headers.set(key, header);
        }
      });
    }

    return headers;
  }
}

export default FetchService;
