import { NavLink } from "react-router-dom";
import { SideBarItemProps } from "../../../../types/common";


export default function SideBarItem(props: SideBarItemProps) {
  const item = props;
  return (
      <NavLink
        to={item.link}
        className={({isActive})=>{
          return `flex cursor-pointer py-2 px-4 items-center rounded-xl ${isActive?`bg-white/5 hover:bg-white/5 !text-white`:`hover:!bg-white/5 hover:!text-white  !text-text-secondary`}`}
        }
      >
        <div className="flex p-2 z-10 gap-4 items-center">
          <item.icon className={`!w-6 !h-6 !text-text-secondary`}></item.icon>
          <p
            className={`!text-sm tracking-wide`}
          >
            {item?.text}
          </p>
        </div>
      </NavLink>
  );
}
