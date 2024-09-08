import { PropsWithChildren } from "react";
import Sidebar from "./sidebar/DesktopSidebar";
import Header from "./header/Header";

export default function Layout(props:PropsWithChildren){
    return <main className="min-h-screen lg:!pl-[var(--sidebar-width)] pl-0 lg:!pt-[var(--header-height-lg)] pt-[var(--header-height)] transition-all w-full flex">
    <nav id="sidebar" className="!fixed block !z-[800] !top-0 !left-0 h-screen">
      <Sidebar></Sidebar>
    </nav>
    <div id="header" className="block fixed top-0 lg:left-[var(--sidebar-width)] left-0 lg:w-[calc(100%-var(--sidebar-width))] w-full transition-all !z-[800]">
      <Header></Header>
    </div>
    <div className="w-full min-h-full flex-1  overflow-x-hidden">
      {props.children}
    </div>
  </main>
}