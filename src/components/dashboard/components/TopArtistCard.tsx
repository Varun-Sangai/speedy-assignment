import { Skeleton, Typography } from "@mui/material";
import guitarIcon from "../../../assets/guitar-svgrepo-com.svg";
import DashboardCard from "../shared/DashboardCard";
import { useMostlyPlayedArtist } from "../../../hooks/useMostPlayedArtist";
export default function TopArtistCard() {

    const { mostPlayedArtist, loading } = useMostlyPlayedArtist();

    return <DashboardCard wrapperClassName="h-full bg-error-light" title="Top artist" subtitle="The artist with the most streams in the past 30 days.">
        <>
            <div className="flex justify-center">
                <img src={guitarIcon} className="!h-52 !w-52"></img>
            </div>
            <div className="flex md:flex-col md:gap-5 flex-wrap flex-row gap-2">
                <div className="flex flex-col md:flex-[unset] flex-1 flex-shrink-0 gap-1">
                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                        Name
                    </Typography>
                    <Typography variant="h3" className="flex-shrink-0 whitespace-nowrap">
                        {loading ? <Skeleton animation="wave"></Skeleton> : mostPlayedArtist?.name}
                    </Typography>
                </div>
                <div className="flex flex-col md:flex-[unset] flex-1 gap-1">
                    <Typography color="textSecondary" variant="subtitle2"  fontWeight={400}>
                        Stream Count
                    </Typography>
                    <Typography variant="h3" className="flex-shrink-0 whitespace-nowrap">
                        {loading ? <Skeleton animation="wave"></Skeleton> : `${mostPlayedArtist?.streamCount} times played`}
                    </Typography>
                </div>
            </div>
        </>
    </DashboardCard>
}