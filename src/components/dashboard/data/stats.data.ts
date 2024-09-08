import { DashboardStatsCardProps } from "../../../types/common";
import usersIcon from "../../../assets/user-svgrepo-com.svg";
import activeUsersIcon from "../../../assets/user-heart-svgrepo-com.svg";
import musicIcon from "../../../assets/music-notes-svgrepo-com.svg";
import revenueIcon from "../../../assets/currency-revenue-svgrepo-com.svg";
export const StatsCardsData: DashboardStatsCardProps[] = [
    {
        heading: "Total Users",
        image: usersIcon,
        bgColor: '#ECF2FF',
    },
    {
        heading: "Active Users",
        image: activeUsersIcon,
        bgColor: '#E8F7FF',
    },
    {
        heading: "Total Streams",
        image: musicIcon,
        bgColor: '#FEF5E5',
    },
    {
        heading: "Revenue",
        image: revenueIcon,
        bgColor: '#E6FFFA',
    }
]