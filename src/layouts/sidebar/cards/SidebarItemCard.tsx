import { NavLink } from "react-router-dom";
import { SideBarItemProps } from "../../../types/common";


export default function SideBarItem(props: SideBarItemProps) {
  const item = props;
  return (
      <NavLink
        to={item.link}
        className={({isActive})=>{
          return `flex cursor-pointer py-2 px-4 items-center rounded-xl ${isActive?`bg-primary-main hover:bg-primary-main !text-white`:`hover:!bg-primary-light hover:!text-primary-main bg-white !text-text-secondary`}`}
        }
      >
        <div className="flex p-2 z-10 gap-4 items-center">
          <item.icon className={`!w-6 !h-6`}></item.icon>
          <p
            className={`!text-sm tracking-wide`}
          >
            {item?.text}
          </p>
        </div>
      </NavLink>
  );
}
