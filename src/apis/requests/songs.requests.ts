import {Songs, SongsQuery } from "../../types/common";
import { objectToURLSearchParams } from "../../utils/common";
import http, { HTTPOptions } from "../http";

export const fetchSongs = (payload?:SongsQuery,options?:HTTPOptions) => {
    console.log(payload);
    const query = objectToURLSearchParams(payload || {});  
    console.log(query);
    return http.get<Songs[]|{[key:string]:any}>(
      `/songs${query?`?${query}`:''}`,
      options
    );
  };