import {PaginatedQuery, RevenueSource} from "../../types/common";
import { objectToURLSearchParams } from "../../utils/common";
import http, { HTTPOptions } from "../http";

export const fetchRevenueDistribution = (payload?:PaginatedQuery,options?:HTTPOptions) => {
    const query = objectToURLSearchParams(payload || {});  
    return http.get<RevenueSource[]>(
      `/revenue-distribution${query?`?${query}`:''}`,
      options
    );
  };