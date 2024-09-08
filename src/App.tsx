import { lazy } from 'react';
const MostStreamedSongsOverview =lazy(()=>import('./components/dashboard/components/MostStreamedSongs'));
const RecentStreamsTable=lazy(()=>import('./components/dashboard/components/RecentStreamsTable'));
const RevenueDistributionOverview =lazy(()=>import('./components/dashboard/components/RevenueDistribution'));
const StatsCards =lazy(()=>import('./components/dashboard/components/StatsCards'));
const TopArtistCard =lazy(()=>import('./components/dashboard/components/TopArtistCard'));
const UserGrowthOverview=lazy(()=>import('./components/dashboard/components/UserGrowth'));
function App() {
  return (
    <div className='w-full'>
      <div className='flex flex-col gap-6 sm:p-6 px-3 py-4'>
        <div className='w-full'>
          <StatsCards></StatsCards>
        </div>
        <div className='w-full flex md:flex-row flex-col gap-6'>
          <div>
            <TopArtistCard></TopArtistCard>
          </div>
          <div className='flex-1'>
            <MostStreamedSongsOverview></MostStreamedSongsOverview>
          </div>
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
    </div>
  )
}

export default App
