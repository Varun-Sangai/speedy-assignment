import { Skeleton, Typography } from "@mui/material";
import { DashboardStatsCardProps } from "../../../types/common";

export default function StatsCard(props: DashboardStatsCardProps) {
    const {heading, value, bgColor,image,loading} = props
    return (
        <div style={{ background: bgColor }} className={`flex px-5 h-full py-10 rounded-2xl  justify-between items-center `}>
            <div className="flex flex-col gap-1">
                <Typography
                    color="textSecondary"
                    variant="subtitle2"
                    fontWeight={400}
                >
                    {heading}
                </Typography>
                <Typography
                    variant="h3"
                >
                    {loading?<Skeleton animation="wave"></Skeleton>:value}
                </Typography>
            </div>
            <div className="h-16">
                <img src={image} className="h-full w-auto"></img>
            </div>
        </div >
    );
}