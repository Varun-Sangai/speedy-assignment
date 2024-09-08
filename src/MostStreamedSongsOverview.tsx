import { lazy, Suspense } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig'
// @ts-ignore
import tailwindConfig from "../tailwind.config.js"

const Chart = lazy(() => import("react-apexcharts"));

const {theme} = resolveConfig(tailwindConfig)
 
const color = theme.colors.primary['main'];
// const color = theme.colors.secondary[500];

const MostStreamedSongsOverview = () => {
    const optionscolumnchart: any = {
        chart: {
            type: 'bar',
            fontFamily: "'Plus Jakarta Sans', sans-serif;",
            foreColor: '#adb0bb',
            toolbar: {
                show: false,
            },
            height: 370,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: '60%',
                columnWidth: '30%',
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
            categories: ['Blinding Lights', 'Levitating', 'Save Your Tears', 'Peaches', 'Stay'],
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            theme: 'light',
            fillSeriesColor: false,
        },
    };
    const seriescolumnchart: any = [
        {
            name: 'Stream count over past 30 days',
            color:color,
            data: [520000, 480000, 300000, 550000, 120000, 520000],
        },
    ];

    return (
        <div className='w-full'>
            <Suspense fallback={<div>loading...</div>}>
                <Chart
                    options={optionscolumnchart}
                    series={seriescolumnchart}
                    type="bar"
                    height="370px"
                />
            </Suspense>
        </div>
        // <DashboardCard title="Sales Overview" action={
        //     <Select
        //         labelId="month-dd"
        //         id="month-dd"
        //         value={month}
        //         size="small"
        //         onChange={handleChange}
        //     >
        //         <MenuItem value={1}>March 2023</MenuItem>
        //         <MenuItem value={2}>April 2023</MenuItem>
        //         <MenuItem value={3}>May 2023</MenuItem>
        //     </Select>
        // }>

        // </DashboardCard>
    );
};

export default MostStreamedSongsOverview;
