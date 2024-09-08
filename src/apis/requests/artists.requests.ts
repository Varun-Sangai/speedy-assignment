import {Artist, ArtistsQuery} from "../../types/common";
import { objectToURLSearchParams } from "../../utils/common";
import http, { HTTPOptions } from "../http";

export const fetchArtists = (payload:ArtistsQuery,options?:HTTPOptions) => {
    const query = objectToURLSearchParams(payload);  
    return http.get<Artist[]>(
      `/artists${query?`?${query}`:''}`,
      options
    );
  };