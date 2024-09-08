import { useEffect, useState } from "react"
import { fetchRevenueDistribution } from "../apis/requests/revenuedistributions.requests";
import { PaginatedQuery } from "../types/common";
import { wait } from "../utils/common";

export function useRevenueDistribution(paginationOptionsProp?:PaginatedQuery){
    const [paginationOptions, setPaginationOptions]=useState<PaginatedQuery | undefined>(paginationOptionsProp);
    const [{ revenueDistribution, loading }, setState] = useState<{
        revenueDistribution?: {
            sources: string[],
            amounts: number[],
            totalAmount:number;
        },
        loading: boolean
    }>({
        loading: true
    });
    useEffect(() => {
        fetchRevenueDistribution(paginationOptions).then(async(data) => {
            const sources: string[] = [];
            const amounts: number[] = [];
            let totalAmount: number=0;
            data.map((item) => {
                sources.push(item?.source || "");
                amounts.push(item.amount);
                totalAmount+=item.amount
            })
            await wait(2000);
            setState({ revenueDistribution: { sources,amounts,totalAmount}, loading: false });
        }).catch((err) => {
            console.log(err);
        })
    }, [paginationOptions]);
    return { revenueDistribution, loading};
}