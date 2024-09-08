import SideComponentHeader from "./components/HeaderRight";
// import { IconBellRinging} from '@tabler/icons-react';
import streamifylogo from "../../assets/streamify_logo-removebg.png";
import { Typography } from "@mui/material";
export default function Header() {
  return (
    <div className="flex lg:h-[var(--header-height-lg)] h-[var(--header-height)] border-b-[0.1250rem] border-solid transition-all bg-white border-grey-200 px-5 items-center w-full justify-between">
      <div className="flex lg:hidden h-full gap-2 items-center">
        <img src={streamifylogo} className="h-full w-auto" alt="" />
      </div>
      <Typography variant="h3" className="lg:flex hidden">
          Dashboard
      </Typography>
      <SideComponentHeader></SideComponentHeader>
    </div>
  );
}
