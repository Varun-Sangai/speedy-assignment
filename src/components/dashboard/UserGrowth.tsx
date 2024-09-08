import React, { lazy, useMemo } from 'react';
const Chart = lazy(() => import("react-apexcharts"));
import { useTheme } from '@mui/material/styles';
import {Typography, Avatar,Skeleton } from '@mui/material';
import { IconArrowDownRight, IconArrowUpLeft,} from '@tabler/icons-react';
import DashboardCard from '../shared/DashboardCard';
import { useUserGrowth } from '../../hooks/useUserGrowth';

const UsersGrowthOverview = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const error = theme.palette.error.main;
  const success = theme.palette.success.main;
  const errorLight = theme.palette.error.light;
  const successLight = theme.palette.success.light;

  const { userGrowthData, loading } = useUserGrowth();

  // chart
  const optionscolumnchart: any = useMemo(() => {

    return {
      chart: {
        type: 'line',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      fill: {
        type: 'solid',
      },
      xaxis: {
        categories: userGrowthData?.timeline || [],
        axisBorder: {
          show: false,
        },
        labels:{
          trim:true
        }
      },
      grid: {
        borderColor: 'rgba(0,0,0,0.1)',
        strokeDashArray: 3,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      markers: {
        size: 0,
      },
      tooltip: {
        theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      },
    };
  }, [loading])

  const seriescolumnchart: any = useMemo(() => {
    return [
      {
        name: 'Users',
        color: primary,
        data: userGrowthData?.totalUsers,
      },
      {
        name: 'Active User',
        color: secondary,
        data: userGrowthData?.totalActiveUsers,
      }
    ];
  }, [loading])

  return (
    <DashboardCard
      title="User Growth Insights"
      footer={
        <div className='mt-5'>
          {loading ? <div className='flex flex-col h-[260px] justify-between gap-5'>
            <Skeleton variant='rectangular' className='rounded-lg' animation="wave" height={"6px"} width={"100%"}></Skeleton>
            <Skeleton variant='rectangular' className='rounded-lg' animation="wave" height={"6px"} width={"100%"}></Skeleton>
            <Skeleton variant='rectangular' className='rounded-lg' animation="wave" height={"6px"} width={"100%"}></Skeleton>
            <Skeleton variant='rectangular' className='rounded-lg' animation="wave" height={"6px"} width={"100%"}></Skeleton>
            <Skeleton variant='rectangular' className='rounded-lg' animation="wave" height={"6px"} width={"100%"}></Skeleton>
            <Skeleton variant='rectangular' className='rounded-lg' animation="wave" height={"6px"} width={"100%"}></Skeleton>
            <Skeleton variant='rectangular' className='rounded-lg' animation="wave" height={"6px"} width={"100%"}></Skeleton>
            <Skeleton variant='rectangular' className='rounded-lg' animation="wave" height={"6px"} width={"100%"}></Skeleton>
            <Skeleton variant='rectangular' className='rounded-lg' animation="wave" height={"6px"} width={"100%"}></Skeleton>
            <Skeleton variant='rectangular' className='rounded-lg' animation="wave" height={"6px"} width={"100%"}></Skeleton>
          </div> : <Chart height={"260px"} options={optionscolumnchart} type='line' series={seriescolumnchart}/>}
        </div>
      }
    >
      <div className='flex gap-2'>
        <div className='flex flex-col gap-1 flex-1'>
          <Typography variant="h3" fontWeight="700">
            Users
          </Typography>
          <div className='flex gap-1 items-center'>
            {loading ? <>
              <Skeleton variant='circular' animation="wave">
                <Avatar sx={{ width: 27, height: 27 }}></Avatar>
              </Skeleton>
              <Typography className='flex-1' variant="subtitle2" fontWeight="600">
                <Skeleton animation="wave"></Skeleton>
              </Typography>
            </> :
              <>
                <Avatar sx={{ bgcolor: ((userGrowthData?.userPercentageGrowth || 0) > 0 ? successLight : errorLight), width: 27, height: 27 }}>
                  {(userGrowthData?.userPercentageGrowth || 0) > 0 ? <IconArrowUpLeft width={20} color={success} />:<IconArrowDownRight width={20} color={error} /> }
                </Avatar>
                <Typography variant="subtitle2" fontWeight="600">
                  {userGrowthData?.userPercentageGrowth || 0}%
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  last year
                </Typography>
              </>
            }
          </div>
        </div>
        <div className='flex flex-col gap-1 flex-1'>
          <Typography variant="h3" fontWeight="700">
            Active Users
          </Typography>
          <div className='flex gap-1 items-center'>
            {loading ? <>
              <Skeleton variant='circular' animation="wave">
                <Avatar sx={{ width: 27, height: 27 }}></Avatar>
              </Skeleton>
              <Typography className='flex-1' variant="subtitle2" fontWeight="600">
                <Skeleton animation="wave"></Skeleton>
              </Typography>
            </> :
              <>
                <Avatar sx={{ bgcolor: ((userGrowthData?.activeUserPercentageGrowth || 0) > 0 ? successLight : errorLight), width: 27, height: 27 }}>
                  {(userGrowthData?.activeUserPercentageGrowth || 0) > 0 ? <IconArrowUpLeft width={20} color={success} />:<IconArrowDownRight width={20} color={error} /> }
                </Avatar>
                <Typography variant="subtitle2" fontWeight="600">
                  {userGrowthData?.activeUserPercentageGrowth || 0}%
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  last year
                </Typography>
              </>
            }
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default React.memo(UsersGrowthOverview);
