import {PaginatedQuery, User} from "../../types/common";
import { objectToURLSearchParams } from "../../utils/common";
import http, { HTTPOptions } from "../http";

export const fetchusers = (payload:PaginatedQuery,options?:HTTPOptions) => {
    const query = objectToURLSearchParams(payload);  
    return http.get<User[]>(
      `/users${query?`?${query}`:''}`,
      options
    );
  };