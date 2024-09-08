import { useEffect, useState } from "react"
import { Artist} from "../types/common";
import { fetchMostPlayedArtist } from "../apis/requests/mostplayedartist.request";

export function useMostlyPlayedArtist() {
    const [{ mostPlayedArtist, loading }, setState] = useState<{
        mostPlayedArtist?:Artist ,
        loading: boolean
    }>({
        loading: true
    });
    useEffect(() => {
        fetchMostPlayedArtist().then((data) => {
            setState({mostPlayedArtist:data, loading: false });
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    return { mostPlayedArtist, loading };
}