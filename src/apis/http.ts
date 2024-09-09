/**
 * Generate HTTP headers
 */
const getHeader = async (headers = new Headers()): Promise<Headers> => {
  const defaultHeaders = new Headers();
  defaultHeaders.append('Accept', 'application/json');
  defaultHeaders.append('Content-Type', 'application/json');

  if (headers) {
    headers.forEach((value: string, key: string) => defaultHeaders.append(key, value));
  }
  return defaultHeaders;
};


/**
 * Generate Request URL
 */
export const getURL = (url: string, options: {mockedURL?: string }) => {
    const baseURL = options?.mockedURL ? options.mockedURL : import.meta.env.VITE_API_URL;
    return baseURL + url;
};


export type HTTPOptions = {
    mockedURL?:string;
    headers?: Headers;
    hasFiles?: boolean;
};


  
/**
 * Generate HTTP body
*/

export const getBody = (body?: unknown, hasFiles = false) => (hasFiles ? body : JSON.stringify(body));


//Custom Error Class
export class ApiResponseError extends Error {
  code = 400;

  constructor(message: string, code = 400) {
    super(message || 'Oops! Something went wrong');
    this.name = 'ApiResponseError';
    this.code = code;
  }
}


/**
 * HTTP GET Request
 */
const fetchGet= async<T> (url: string, options?: HTTPOptions) => {
  const result = await fetch(
    getURL(url, { mockedURL:options?.mockedURL || "" }),
    {
      method: 'GET',
      cache:"no-store",
      headers: await getHeader(options?.headers),
    },
  );
  const totalCount=await result.headers.get('x-total-count');

  const data=await result.json();
  if(totalCount){
    return {data,totalCount} as T;
  }
  return data as T;
}


const http = {
  get: fetchGet
};

export default http;
