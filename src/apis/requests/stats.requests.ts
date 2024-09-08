import { PlatformStats } from "../../types/common";
import http, { HTTPOptions } from "../http";

export const fetchStats=(options?:HTTPOptions) =>
  http.get<PlatformStats>(`/stats`,options);