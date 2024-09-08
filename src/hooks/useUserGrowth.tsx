import { useEffect, useState } from "react"
import { fetchUserGrowth } from "../apis/requests/usergrowth.requests";
import { PaginatedQuery } from "../types/common";

export function useUserGrowth(paginationOptionsProp?:PaginatedQuery) {
    const [paginationOptions]=useState<PaginatedQuery | undefined>(paginationOptionsProp);
    const [{ userGrowthData, loading }, setState] = useState<{
        userGrowthData?: {
            timeline: string[],
            totalUsers: number[],
            totalActiveUsers: number[],
            userPercentageGrowth: number;
            activeUserPercentageGrowth: number;
        },
        loading: boolean
    }>({
        loading: true
    });

    useEffect(() => {
        fetchUserGrowth(paginationOptions).then(async(data) => {
            const timeline: string[] = [];
            const totalUsers: number[] = [];
            const totalActiveUsers: number[] = [];
            data.map((item) => {
                timeline.push(item.month);
                totalUsers.push(item.users);
                totalActiveUsers.push(item.activeUsers);
            })
            setState({ userGrowthData: { timeline, totalUsers, totalActiveUsers,userPercentageGrowth:Number(((totalUsers[totalUsers.length-1]-totalUsers[0])/totalUsers[0]).toFixed(2)),activeUserPercentageGrowth:Number(((totalUsers[totalUsers.length-1]-totalUsers[0])/totalUsers[0]).toFixed(2)) }, loading: false });
        }).catch((err) => {
            console.log(err);
        })
    }, [paginationOptions]);
    return { userGrowthData, loading};
}