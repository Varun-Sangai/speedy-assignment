import { Stats } from "fs";
import { Artist, PaginatedQuery, PlatformStats } from "../types/common";

export function objectToURLSearchParams(obj: { [key: string]: any }): string {
    const params = new URLSearchParams();
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        console.log(value);
        // Check if value is an array and convert to comma-separated string
        if(value!==undefined && value!=="")
        params.append(key, Array.isArray(value) ? value.toString() : value);
      }
    }

    return params.toString();;
  }

  export function getDashboardCardValue(index:number,stats:PlatformStats|undefined):string{
    if(stats){
    if(index==4)
    {
      return (stats[`${Object.keys(stats)[index] as keyof PlatformStats}`] as Artist)?.name;
    }
    if(index==3)
      return `$${stats[`${Object.keys(stats)[index] as keyof PlatformStats}`]?.toString()}`;
    
    return stats[`${Object.keys(stats)[index] as keyof PlatformStats}`]?.toString();
  }
  return "";
  }

export function formatDateString(inputDate:number|string|Date):string {
    const date = new Date(inputDate);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);  
    return formattedDate;
}


export function convertSortParameter(paginatedQuery?:PaginatedQuery){

  if(paginatedQuery && Object.keys(paginatedQuery).length > 0 && paginatedQuery["_sort"]){
    paginatedQuery["_order"] =[]
    paginatedQuery["_sort"].map((item)=>{
      if(item.startsWith("-"))
      paginatedQuery["_order"]?.push("desc")
      else
      paginatedQuery["_order"]?.push("asc")
    })
  }  
  return undefined;
}


export function wait(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export function generateArray(size:number) {
  if (size < 0) {
    return [];
  }
  return Array(size).fill(null);
}
  