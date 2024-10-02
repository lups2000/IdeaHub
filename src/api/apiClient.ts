import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class ApiClient {
  private baseURL: string = "https://oauth.reddit.com/";

  private async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.request<T>({
        baseURL: this.baseURL,
        ...config,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig,
    queryParams?: any
  ): Promise<T> {
    return (await queryParams)
      ? this.request<T>({ url, method: "GET", params: queryParams, ...config })
      : this.request<T>({ url, method: "GET", ...config });
  }

  public async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.request<T>({ url, method: "POST", data, ...config });
  }

}
