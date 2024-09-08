import { Typography } from "@mui/material";
import { DashboardCardProps } from "../../types/common";

export default function DashboardCard(props: DashboardCardProps) {
    const {heading, value, bgColor } = props
    return (
        <div style={{ background: bgColor }} className={`flex px-5 h-full py-10 rounded-2xl  justify-between items-center `}>
            {/* <img className="" src={image} alt="img"></img> */}
            <div className="flex-col flex">
                <Typography
                    color="textSecondary"
                    variant="subtitle2"
                    fontWeight={400}
                >
                    {heading}
                </Typography>
                <Typography
                    variant="h4"
                >
                    {value}
                </Typography>
            </div>
        </div >
    );
}