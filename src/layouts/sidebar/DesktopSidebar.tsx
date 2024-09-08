import { SideBarItemProps } from "../../types/common";
import SideBarItem from "./cards/SidebarItemCard";
import { items } from "./data/data";
import streamifylogo from "../../assets/streamify_logo-removebg.png";
export default function Sidebar() {
  return (
    <div className="flex flex-col border-r-[2px] transition-all border-solid border-grey-200 bg-white lg:w-[var(--sidebar-width)] w-0 overflow-hidden h-[100%]">
      <div className="lg:h-20 flex items-center pl-3">
        <img src={streamifylogo} className="h-full"></img>
      </div>
      <div className="flex flex-col px-4 py-2 justify-between overflow-y-auto flex-grow">
        <div className="flex flex-col gap-2">
          {items.map(
            (item: SideBarItemProps, index: number) => (
              <SideBarItem key={index} {...item}></SideBarItem>
            )
          )}
        </div>
      </div>
    </div>
  );
}