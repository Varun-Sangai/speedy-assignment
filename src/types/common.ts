import { PaginationProps, TableBodyProps, TableCellProps, TableFooterProps, TableHeadProps, TableProps, TableRowProps } from "@mui/material";
import { TablerIconsProps } from "@tabler/icons-react";

export type User={
    id:number;
    name:string;
    isActive:boolean;
    isSubscribed:boolean;
}


export type Songs={
    id:number;
    title:string;
    artist:Artist;
    streamCount:number;
    lastStreamedDate:string;
    user:User;
}


export type Artist={
    id:number;
    name:string;
    streamCount:number;
}

export type PlatformStats={
    totalStreamCount:number;
    totalUsers:number;
    totalActiveUsers:number;
    totalRevenue:number;
    mostPlayedArtist:Artist;
}

export type UserGrowthData={
    month:string;
    users:number;
    activeUsers:number;
}


export type RevenueSourceType="Subscriptions" | "Advertisements";

export type RevenueSource={
    source:RevenueSourceType;
    amount:number;
}

export type PaginatedQuery={
    _page?:number;
    _limit?:number;
    q?:string;
    _sort?:string[];
    _order?:string[];
}


export type SongsQuery={
    streamCount_gte?:string;
    streamCount_lte?:string;
    "user.isSubscribed"?:boolean;
}&PaginatedQuery;

export type ArtistsQuery={
    streamCount_gte?:string;
    streamCount_lte?:string;
}&PaginatedQuery;



export interface ColumnDataProps<T> extends TableCellProps {
    index: string;
    render: (value: T) => React.ReactNode | string;
  }
  export interface ColumnHeaderProps extends TableCellProps {
    index: string;
    render: () => React.ReactNode | string;
  }
  
  export interface MuiTableProps<T> {
    data: T[];
    loading: boolean;
    children?: React.ReactNode;
    tableProps?: TableProps;
    tableHeaderProps?: TableHeadProps;
    headersDataRender: { tableRowProps?: TableRowProps; columnsHeaderData: ColumnHeaderProps[] };
    columnsDataRender: ColumnDataProps<T>[];
    tableBodyProps?: TableBodyProps;
    pagination?: { paginationEnabled: boolean, paginationProps?: PaginationProps };
    tableFooterProps?: TableFooterProps;
    tableWrapperProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  }


  export interface DashboardCardProps {
    image: any;
    heading?: string;
    value?: string;
    bgColor?:string;
    }

  export interface SideBarItemProps {
    text: string;
    link: string;
    icon: (props: TablerIconsProps) => JSX.Element;
    startsWith: boolean;
  }