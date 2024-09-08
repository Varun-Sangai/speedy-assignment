import { Dispatch, SetStateAction} from "react";
import SideBarItem from "./cards/SidebarItemCard";
import { SideBarItemProps } from "../../../types/common";
import { IconX } from '@tabler/icons-react';
import { items } from "./data/data";
import streamifyLogo from "../../../assets/streamify_logo_white.png";
export default function MenuSideNav({
  open,
  setopen,
}: {
  open: boolean;
  setopen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className={`${open ? "fixed top-0 right-0 w-full h-full bg-black/50  z-10" : ""}`}>
      <div className={`fixed top-0 right-0 w-60 h-full  bg-tertiary-main transition-all z-10 ${open ? "translate-x-0" : "translate-x-60"}`}>
        <div className="flex flex-col px-4 py-4 gap-6 h-full">
          <div className="flex flex-col gap-4">
            <IconX className="self-start cursor-pointer !text-white" onClick={() => {
              setopen(!open);
              const body = document.body;
              body.style.overflow = open ? "auto" : "hidden";
            }}></IconX>
            <div className="flex h-10">
             <img src={streamifyLogo} className="h-full w-auto"></img> 
            </div>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <div className="flex flex-col gap-2">
                {items.map(
                  (item: SideBarItemProps, index: number) => (
                    <SideBarItem key={index} {...item}></SideBarItem>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
