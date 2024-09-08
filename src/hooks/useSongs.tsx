import { useCallback, useEffect,useState } from "react";
import { Songs, SongsQuery } from "../types/common";
import { fetchSongs } from "../apis/requests/songs.requests";
import {  wait } from "../utils/common";
import useDebounceFunction from "./useDebounceFunction";

function useSongs(paginationOptionsProp?:SongsQuery){

    const [searching, setSearching] = useState<boolean>(true);
    const [paginationSearching, setPaginationSearching] = useState<boolean>(true);
    const [paginationOptions, setPaginationOptions] = useState<SongsQuery | undefined>(paginationOptionsProp);
    const [{ songs, loading }, setState] = useState<{songs?: Songs[];loading: boolean}>({loading: true});

    useEffect(()=>{
        if(paginationOptionsProp?.["user.isSubscribed"]==true && !loading){
            setState({ loading: true });
            setPaginationSearching(true);
            setSearching(true);
            setPaginationOptions((prev)=>{return {...prev,"user.isSubscribed":true}});
        }else if(paginationOptionsProp?.["user.isSubscribed"]==false && !loading){
            setState({ loading: true });
            setPaginationSearching(true);
            setSearching(true);
            setPaginationOptions((prev)=>{return {...prev,"user.isSubscribed":false}});
        }else if(paginationOptionsProp?.["user.isSubscribed"]==undefined && !loading){
            setState({ loading: true });
            setPaginationSearching(true);
            setSearching(true);
            setPaginationOptions((prev)=>{return {...prev,"user.isSubscribed":undefined}});
        }
    },[paginationOptionsProp?.["user.isSubscribed"]]);

    useEffect(() => {
        setState({ loading: true });
        fetchSongs(paginationOptions).then(async (data) => {
            await wait(2000);
            if(Array.isArray(data))
            setState({ songs: data, loading: false });
            else
            setState({ songs: data?.data, loading: false });
            setSearching(false);
            setPaginationSearching(false);
        }).catch((err) => {
            console.log(err);
        })
    }, [paginationOptions])

    const handlePaginationState = useCallback((page: number) => {
        setPaginationOptions({
            ...paginationOptions,
            _page: page
        })
    }, [paginationOptions]);

    const handlePageChange = useCallback((_event:React.ChangeEvent<unknown>, page: number) => {
        if (!paginationSearching)
            setPaginationSearching(true);
        handlePaginationState(page);
    }, [handlePaginationState,paginationSearching]);

    const handleSearchState = useCallback((value: string) => {
        setPaginationOptions({
            ...paginationOptions,
            q: value,
            _page: 1
        })
    }, [paginationOptions]);

    const debouncedSearchState = useDebounceFunction(handleSearchState, 1000);

    const handleSongsSearch = useCallback((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (!searching)
            setSearching(true);
        debouncedSearchState(event.target.value)
    }, [debouncedSearchState, searching]);

    const handleSort = useCallback((value: string, apply: boolean) => {
        const _sort: Set<string> = new Set<string>([...paginationOptions?._sort || []]);
        const _order:string[]=[];
        if (apply) {
            if (!_sort.has(value)) {
                _sort.add(value);
                _order.push("desc");
            }
        } else {
            if (_sort.has(value)) {
                _sort.delete(value);
            }
        }
            setPaginationOptions({
                ...paginationOptions,
                _sort: Array.from(_sort),
                _order
            })
    }, [paginationOptions]);

    const handleLimitChange = useCallback((_limit: number) => {
        setPaginationOptions({
            ...paginationOptions,
            _limit
        })
    }, [paginationOptions]);

    return { songs, loading, handleSongsSearch,handlePageChange,handleLimitChange, paginationOptions,paginationSearching,searching,handleSort };
}

export default useSongs;