import Chart from "react-apexcharts";
import { useTheme } from '@mui/material/styles';
import {Typography, Avatar, Skeleton } from '@mui/material';

import DashboardCard from '../shared/DashboardCard';
import { useRevenueDistribution } from "../../../hooks/useRevenueDistribution";
import { useMemo, useRef } from "react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setRevenueDistributionSource } from "../../../store/features/RevenueDistributionSlice";
import { RevenueSourceType } from "../../../types/common";

const RevenueDistributionOverview = () => {

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primaryLight = theme.palette.primary.light;


  const dispatch=useAppDispatch();
  const {source}=useAppSelector((state)=>state.revenueDistributionSlice);
  const sourceRef=useRef<RevenueSourceType | undefined>(source);
  const { revenueDistribution, loading} = useRevenueDistribution();
  
  // chart
  const optionscolumnchart: any = useMemo(() => {
    sourceRef.current=source;
    return {
      chart: {
        type: 'donut',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        events:{
          click:function(event:any,_chartContext:any,opts:any){
            if(event.type=="touchend" || event.type=="touchstart"){
              return;
            }
            if(sourceRef.current!=revenueDistribution?.sources[opts?.dataPointIndex] as RevenueSourceType)
            {
              dispatch(setRevenueDistributionSource(revenueDistribution?.sources[opts?.dataPointIndex] as RevenueSourceType))
            }
            else {
              dispatch(setRevenueDistributionSource(undefined))
            }
          }
        }
      },
      colors: [primary, primaryLight],
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          donut: {
            size: '75%',
            background: 'transparent',
          },
        },
      },
      labels: revenueDistribution?.sources || undefined,
      tooltip: {
        theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
        fillSeriesColor: false,
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
    };
  }, [loading,source]);

  const seriescolumnchart: any = useMemo(() => {
    return revenueDistribution?.amounts || [];
  }, [loading]);

  return (
    <DashboardCard title="Revenue Distribution" subtitle="Breakdown of revenue from different sources" wrapperClassName="h-full">
      <div className="flex flex-col h-full justify-between gap-5">
        <div className="flex gap-2">
          <div className="flex flex-col gap-1 flex-1">
            {loading ? <>
              <Typography className='w-full' variant="h3" fontWeight="700">
                <Skeleton animation="wave"></Skeleton>
              </Typography>
              <Typography variant="subtitle2" fontWeight="600">
                <Skeleton animation="wave"></Skeleton>
              </Typography>
            </> :
              <>
                <Typography variant="h3" fontWeight="700">
                  ${revenueDistribution?.amounts[0] || 0}
                </Typography>
                <Typography variant="subtitle2" fontWeight="600">
                  {revenueDistribution?.sources[0]}
                </Typography>
              </>
            }
          </div>
          <div className="flex flex-col gap-1 flex-1">
            {loading ? <>
              <Typography className='w-full' variant="h3" fontWeight="700">
                <Skeleton animation="wave"></Skeleton>
              </Typography>
              <Typography variant="subtitle2" fontWeight="600">
                <Skeleton animation="wave"></Skeleton>
              </Typography>
            </> : <>
              <Typography variant="h3" fontWeight="700">
                ${revenueDistribution?.amounts[1] || 0}
              </Typography>
              <Typography variant="subtitle2" fontWeight="600">
                {revenueDistribution?.sources[1]}
              </Typography>
            </>
            }
          </div>
        </div>
        <div className="overflow-hidden w-full">
          {loading ? <div className="flex justify-center"><Skeleton variant="circular" animation="wave" height={"200px"} width={"200px"}></Skeleton> </div> : <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="donut"
            height={"260px"}
            width={"100%"}
          />}
        </div>
        <div className="flex justify-center flex-wrap gap-3">
          <div className="flex gap-1 items-center">
            {loading ? <Skeleton variant="circular" animation="wave">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: primary, svg: { display: 'none' } }}
              ></Avatar>
            </Skeleton> :
              <>
                <Avatar
                  sx={{ width: 9, height: 9, bgcolor: primary, svg: { display: 'none' } }}
                ></Avatar>
                <Typography variant="subtitle2" className="flex-1" color="textSecondary">
                  {revenueDistribution?.sources[0]}
                </Typography>
              </>
            }
          </div>
          <div className="flex gap-1 items-center">
            {loading ? <Skeleton variant="circular" animation="wave">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: primaryLight, svg: { display: 'none' } }}
              ></Avatar>
            </Skeleton> :
              <>
                <Avatar
                  sx={{ width: 9, height: 9, bgcolor: primaryLight, svg: { display: 'none' } }}
                ></Avatar>
                <Typography variant="subtitle2" className="flex-1" color="textSecondary">
                  {revenueDistribution?.sources[1]}
                </Typography>
              </>
            }
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default React.memo(RevenueDistributionOverview);
