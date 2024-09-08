import MostStreamedSongsOverview from './components/dashboard/MostStreamedSongs';
import RecentStreamsTable from './components/dashboard/RecentStreamsTable';
import RevenueDistributionOverview from './components/dashboard/RevenueDistribution';
import StatsCards from './components/dashboard/stats/StatsCard';
import UserGrowthOverview from './components/dashboard/UserGrowth';
function App() {
  return (
    <div className='flex flex-col gap-6 sm:p-6 px-3 py-4'>
      <div className='w-full'>
        <StatsCards></StatsCards>
      </div>
      <div className='w-full'>
        <MostStreamedSongsOverview></MostStreamedSongsOverview>
      </div>
      <div className='flex sm:flex-row flex-col gap-6'>
        <div className='sm:flex-[2_2_0] flex-[unset]'>
          <UserGrowthOverview></UserGrowthOverview>
        </div>
        <div className='sm:flex-1 flex-[unset]'>
          <RevenueDistributionOverview></RevenueDistributionOverview>
        </div>
      </div>
      <div className='w-full'>
        <RecentStreamsTable></RecentStreamsTable>
      </div>
    </div>
  )
}

export default App
