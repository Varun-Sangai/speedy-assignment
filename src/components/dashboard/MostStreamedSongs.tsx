import { useCallback, useMemo, useState } from 'react';
import { MenuItem, Select, Skeleton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DashboardCard from '../shared/DashboardCard';
import useSongs from '../../hooks/useSongs';
import { Songs } from '../../types/common';


import Chart from "react-apexcharts";
import React from 'react';


const MostStreamedSongsOverview = () => {
    // chart color
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;

    const { songs, loading,handleLimitChange } = useSongs({ _sort: ['streamCount'],_order:["desc"]});
    const [selectValue,setSelectValue]=useState<number>(1);

    const handleSelectChange=useCallback((event:any)=>{
        setSelectValue(event.target.value);
        handleLimitChange(event.target.value+4);
    },[]);
    // chart
    const optionscolumnchart: any = useMemo(() => {

        const songsName: string[] = []
        songs?.map((item: Songs, index: number) => {
            if (index <= selectValue+3)
                songsName.push(item.title);
        })

        return {
            chart: {
                type: 'bar',
                fontFamily: "'Plus Jakarta Sans', sans-serif;",
                foreColor: '#adb0bb',
                toolbar: {
                    show: false,
                },
                height: 370,
            },
            colors: [primary, secondary],
            plotOptions: {
                bar: {
                    horizontal: false,
                    barHeight: '60%',
                    columnWidth: '40%',
                    borderRadius: [6],
                    borderRadiusApplication: 'end',
                    borderRadiusWhenStacked: 'all',
                },
            },
            stroke: {
                show: true,
                width: 5,
                lineCap: "butt",
                colors: ["transparent"],
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false,
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
            yaxis: {
                tickAmount: 4,
            },
            xaxis: {
                categories: songsName,
                axisBorder: {
                    show: false,
                },
                labels:{
                    trim:true
                }
            },
            tooltip: {
                theme: 'light',
                fillSeriesColor: false,
            },
        };
    }, [loading]);

    const seriescolumnchart: any = useMemo(() => {
        const streamCount: number[] = []
        songs?.map((item: Songs, index: number) => {
            if (index <= selectValue+3)
                streamCount.push(item.streamCount);
        })
        return [
            {
                name: 'Stream count over past 30 days',
                color: primary,
                data: streamCount,
            },
        ];
    }, [loading])

    return (

        <DashboardCard title="Most Streamed Songs" subtitle={`Top ${selectValue+4} most streamed songs over past 30 days`} action={
            <Select
                labelId="month-dd"
                id="month-dd"
                value={selectValue}
                size="small"
                onChange={handleSelectChange}
            >
                <MenuItem value={1}>Top 5</MenuItem>
                <MenuItem value={2}>Top 6</MenuItem>
                <MenuItem value={3}>Top 7</MenuItem>
            </Select>
        }>
            {loading ? <div className='flex justify-between px-10 py-6 items-end h-[370px]'>
                <Skeleton variant='rectangular' className='rounded-lg' height={"80%"} width={"5%"} animation="wave"></Skeleton>
                <Skeleton variant='rectangular' className='rounded-lg' height={"90%"} width={"5%"} animation="wave"></Skeleton>
                <Skeleton variant='rectangular' className='rounded-lg' height={"70%"} width={"5%"} animation="wave"></Skeleton>
                <Skeleton variant='rectangular' className='rounded-lg' height={"95%"} width={"5%"} animation="wave"></Skeleton>
                <Skeleton variant='rectangular' className='rounded-lg' height={"85%"} width={"5%"} animation="wave"></Skeleton>
                <Skeleton variant='rectangular' className='rounded-lg' height={"75%"} width={"5%"} animation="wave"></Skeleton>
                <Skeleton variant='rectangular' className='rounded-lg' height={"80%"} width={"5%"} animation="wave"></Skeleton>
                <Skeleton variant='rectangular' className='rounded-lg' height={"85%"} width={"5%"} animation="wave"></Skeleton>
            </div> : <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="bar"
                height="370px"
            />}
        </DashboardCard>
    );
};

export default React.memo(MostStreamedSongsOverview);
