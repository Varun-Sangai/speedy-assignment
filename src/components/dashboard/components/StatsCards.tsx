import { useStats } from "../../../hooks/useStats";
import { getDashboardCardValue } from "../../../utils/common";
import DashboardCard from "../shared/DashboardStatsCard";
import { StatsCardsData} from "../data/stats.data";

export default function StatsCards(){
    const {stats,loading}=useStats();
    return <div className="grid gap-x-4 gap-y-6 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {StatsCardsData.map((cardData,index:number)=><div className="h-full"><DashboardCard key={index} {...cardData} value={getDashboardCardValue(index,stats)} loading={loading}></DashboardCard></div>)}    
    </div>
}