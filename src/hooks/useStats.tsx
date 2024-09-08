import { useEffect, useState } from "react"
import { fetchStats } from "../apis/requests/stats.requests";
import { PlatformStats } from "../types/common";

export function useStats() {
    const [{ stats, loading }, setState] = useState<{
        stats?:PlatformStats ,
        loading: boolean
    }>({
        loading: true
    });
    useEffect(() => {
        fetchStats().then((data) => {
            setState({stats:data, loading: false });
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    return { stats, loading };
}