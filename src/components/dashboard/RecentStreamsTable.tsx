import {
    Typography,
    TableSortLabel,
} from '@mui/material';
import MuiInputTextField from '../shared/MuiInputTextField';
import useSongs from '../../hooks/useSongs';
import { ColumnDataProps, ColumnHeaderProps, Songs } from '../../types/common';
import { formatDateString } from '../../utils/common';
import { useMemo } from 'react';
import MuiTable from '../shared/MuiTable';
import DashboardCard from '../shared/DashboardCard';
import { useAppSelector } from '../../store/hooks';
import React from 'react';


const RecentStreamsTable = () => {
    const { source } = useAppSelector((state) => state.revenueDistributionSlice);
    console.log(source);
    const { songs, loading, handleSort, handleSongsSearch, handlePageChange, paginationOptions, paginationSearching, searching } = useSongs({
        _page: 1,
        _limit: 10,
        "user.isSubscribed":source=="Advertisements"?false:source=="Subscriptions"?true:undefined
    });
    const renderColumnsHeading: ColumnHeaderProps[] = useMemo(() => {
        let renderColumnsHeadingTemp: ColumnHeaderProps[] = [
            {
                index: 'song-id',
                render: () => {
                    return 'Id';
                },
            },
            {
                index: 'song-name',
                render: () => {
                    return 'Name';
                },
            },
            {
                index: 'song-artist',
                render: () => {
                    return 'Artist';
                },
            },
            {
                index: 'song-stream-counts',
                onClick: () => {
                    handleSort("streamCount", !paginationOptions?._sort?.includes("streamCount"))
                },
                render: () => {
                    return <TableSortLabel active={paginationOptions?._sort?.includes("streamCount")} direction={paginationOptions?._sort?.includes("-streamCount") ? 'desc' : 'asc'}><Typography variant="subtitle2" fontWeight={600}>Stream Count</Typography></TableSortLabel>;
                },
            },
            {
                index: 'song-last-streamed-at',
                onClick: () => {
                },
                render: () => {
                    return <Typography variant="subtitle2" fontWeight={600}>Last Streamed At</Typography>;
                },
            },
            {
                index: 'streamed-by',
                render: () => {
                    return 'Streamed By';
                },
            },
        ];
        return renderColumnsHeadingTemp;
    }, [paginationOptions]);

    const renderColumnsData: ColumnDataProps<Songs>[] = useMemo(() => {
        let renderColumnsDataTemp: ColumnDataProps<Songs>[] = [
            {
                index: 'song-id',
                render: (value: Songs) => {
                    return <Typography
                        sx={{
                            fontSize: "15px",
                            fontWeight: "500",
                        }}
                    >{value?.id || ""}</Typography>
                },
            },
            {
                index: 'song-title',
                render: (value: Songs) => {
                    return <Typography variant="subtitle2" fontWeight={600}>{value?.title || ''}</Typography>;
                },
            },
            {
                index: 'song-artist',
                render: (value: Songs) => {
                    return <div>
                        <Typography variant="subtitle2" fontWeight={600}>
                            {value?.artist?.name || ""}
                        </Typography>
                        <Typography
                            color="textSecondary"
                            sx={{
                                fontSize: "13px",
                            }}
                        >
                           {value?.artist?.streamCount || ''} times played
                        </Typography></div>;
                },
            },
            {
                index: 'song-stream-counts',
                render: (value: Songs) => {
                    return <Typography variant="h6">{value?.streamCount || ''}</Typography>;
                },
            },
            {
                index: 'song-last-streamed-at',
                render: (value: Songs) => {
                    return formatDateString(value?.lastStreamedDate || '');
                },
            },
            {
                index: 'song-streamed-by',
                render: (value: Songs) => {
                    return <div>
                    <Typography variant="subtitle2" fontWeight={600}>
                        {value?.user?.name || ""}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        sx={{
                            fontSize: "13px",
                        }}
                    >
                        {value?.user?.isSubscribed?"Subscribed":"Not Subscribed"}
                    </Typography></div>;
                },
            },
        ];
        return renderColumnsDataTemp;
    }, []);

    return (
        <DashboardCard title='Recent Streams' action={
            <div className='xs:max-w-60 w-full xs:flex-1 xs:min-w-40'><MuiInputTextField
                id="searchStreams"
                placeholder="Search Recent Streams"
                name={"searchStreams"}
                onChange={handleSongsSearch}
                InputProps={{
                    readOnly: paginationSearching
                }}
            ></MuiInputTextField>
            </div>}
        >
            <MuiTable<Songs>
                loading={loading || searching || paginationSearching}
                tableProps={{ style: { tableLayout: 'auto' } }}
                data={songs || []}
                columnsDataRender={renderColumnsData}
                headersDataRender={{ columnsHeaderData: renderColumnsHeading }}
                pagination={{ paginationEnabled: !searching, paginationProps: { count: source==undefined?5:3, size: 'small', onChange: handlePageChange } }}
            ></MuiTable>
        </DashboardCard>
    );
};

export default React.memo(RecentStreamsTable);
