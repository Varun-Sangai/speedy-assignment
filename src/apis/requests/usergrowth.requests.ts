import {PaginatedQuery, UserGrowthData } from "../../types/common";
import { objectToURLSearchParams } from "../../utils/common";
import http, { HTTPOptions } from "../http";

export const fetchUserGrowth = (payload?:PaginatedQuery,options?:HTTPOptions) => {
    const query = objectToURLSearchParams(payload || {});  
    return http.get<UserGrowthData[]>(
      `/user-growth${query?`?${query}`:''}`,
      options
    );
  };