export interface ApiError {
  title: string;
  description: string;
  fields?: any;
  endpoint: string;
  redirect_url?: string;
}

export interface ApiResponse<T> {
  status: number;
  message: any;
  result: T;
}
