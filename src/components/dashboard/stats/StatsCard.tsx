import { useStats } from "../../../hooks/useStats";
import { getDashboardCardValue } from "../../../utils/common";
import DashboardCard from "../../shared/DashboardStatsCard";
import { EnterPriseCardsData } from "./data";

export default function StatsCards(){
    const {stats}=useStats();
    return <div className="flex gap-4">
        {EnterPriseCardsData.map((cardData,index:number)=><div className="flex-1 h-full"><DashboardCard key={index} {...cardData} value={getDashboardCardValue(index,stats)}></DashboardCard></div>)}    
    </div>
}