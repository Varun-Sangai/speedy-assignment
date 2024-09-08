import SideComponentHeader from "./components/HeaderRight";
import { Typography } from "@mui/material";
export default function Header() {
  return (
    <div className="flex lg:h-[var(--header-height-lg)] h-[var(--header-height)] border-b-[0.1250rem] border-solid transition-all bg-white border-grey-200 px-5 items-center w-full justify-between">
      <Typography variant="h3" className="flex">
          Dashboard
      </Typography>
      <SideComponentHeader></SideComponentHeader>
    </div>
  );
}
