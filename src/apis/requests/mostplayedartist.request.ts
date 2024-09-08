import { Artist} from "../../types/common";
import http, { HTTPOptions } from "../http";

export const fetchMostPlayedArtist=(options?:HTTPOptions) =>
  http.get<Artist>(`/most-played-artist`,options);