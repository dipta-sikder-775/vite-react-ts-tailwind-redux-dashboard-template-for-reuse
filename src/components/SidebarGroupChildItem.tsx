import { NavLink } from "react-router-dom";

export interface ISidebarGroupChildItemProps {
  path?: string;
  title?: string;
}

const SidebarGroupChildItem = (props: ISidebarGroupChildItemProps) => {
  const { path = "", title = "Sub-Title" } = props;

  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `text-bodydark2 + group relative flex items-center gap-2.5 rounded-md px-4 font-medium duration-300 ease-in-out hover:text-white
          ${isActive && "!text-white"}`
        }
      >
        {title}
      </NavLink>
    </li>
  );
};

export default SidebarGroupChildItem;
