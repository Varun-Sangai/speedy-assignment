import {Songs, SongsQuery } from "../../types/common";
import { objectToURLSearchParams } from "../../utils/common";
import http, { HTTPOptions } from "../http";

export const fetchSongs = (payload?:SongsQuery,options?:HTTPOptions) => {
    console.log(payload);
    const query = objectToURLSearchParams(payload || {});  
    console.log(query);
    return http.get<{data:Songs[],totalCount:number}|Songs[]>(
      `/songs${query?`?${query}`:''}`,
      options
    );
  };