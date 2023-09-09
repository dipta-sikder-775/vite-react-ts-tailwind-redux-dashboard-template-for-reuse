import React, { useState } from "react";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { NavLink, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import SidebarGroupChildItem, {
  ISidebarGroupChildItemProps,
} from "./SidebarGroupChildItem";

export interface ISidebarGroupParentProps {
  sidebarExpanded?: boolean;
  setSidebarExpanded?: (value: React.SetStateAction<boolean>) => void;
  groupTitle?: string;
  groupPath?: string;
  groupMatchPath?: string;
  groupIcon?: JSX.Element;
  groupItems?: ISidebarGroupChildItemProps[];
}

const SidebarGroupParent = (props: ISidebarGroupParentProps) => {
  const [subSidebarOpen, setSubSidebarOpen] = useState(false)
  const {
    groupTitle = "Title",
    groupIcon = null,
    groupMatchPath = "",
    groupPath = "",
    setSidebarExpanded,
    sidebarExpanded,
    groupItems,
  } = props;
  const { pathname } = useLocation();
  const matchPathFromPath = groupPath?.trim().split("/")?.[1];
  const isActive =
    pathname === groupPath ||
    pathname.includes(groupMatchPath ? groupMatchPath : matchPathFromPath);

  return (
    <SidebarLinkGroup activeCondition={isActive}>
      {(handleClick, open) => {
        return (
          <React.Fragment>
            <NavLink
              to="#"
              className={`text-bodydark1 hover:bg-graydark dark:hover:bg-meta-4 group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out ${
                isActive && "bg-graydark dark:bg-meta-4"
              }`}
              onClick={(e) => {
                e.preventDefault();
                sidebarExpanded ? handleClick?.() : setSidebarExpanded?.(true);
              }}
            >
              {/* <svg
                className="fill-current"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.43425 7.5093H2.278C2.44675 7.5093 2.55925 7.3968 2.58737 7.31243L2.98112 6.32805H5.90612L6.27175 7.31243C6.328 7.48118 6.46862 7.5093 6.58112 7.5093H7.453C7.76237 7.48118 7.87487 7.25618 7.76237 7.03118L5.428 1.4343C5.37175 1.26555 5.3155 1.23743 5.14675 1.23743H3.88112C3.76862 1.23743 3.59987 1.29368 3.57175 1.4343L1.153 7.08743C1.0405 7.2843 1.20925 7.5093 1.43425 7.5093ZM4.47175 2.98118L5.3155 5.17493H3.59987L4.47175 2.98118Z"
                  fill=""
                />
                <path
                  d="M10.1249 2.5031H16.8749C17.2124 2.5031 17.5218 2.22185 17.5218 1.85623C17.5218 1.4906 17.2405 1.20935 16.8749 1.20935H10.1249C9.7874 1.20935 9.47803 1.4906 9.47803 1.85623C9.47803 2.22185 9.75928 2.5031 10.1249 2.5031Z"
                  fill=""
                />
                <path
                  d="M16.8749 6.21558H10.1249C9.7874 6.21558 9.47803 6.49683 9.47803 6.86245C9.47803 7.22808 9.75928 7.50933 10.1249 7.50933H16.8749C17.2124 7.50933 17.5218 7.22808 17.5218 6.86245C17.5218 6.49683 17.2124 6.21558 16.8749 6.21558Z"
                  fill=""
                />
                <path
                  d="M16.875 11.1656H1.77187C1.43438 11.1656 1.125 11.4469 1.125 11.8125C1.125 12.1781 1.40625 12.4594 1.77187 12.4594H16.875C17.2125 12.4594 17.5219 12.1781 17.5219 11.8125C17.5219 11.4469 17.2125 11.1656 16.875 11.1656Z"
                  fill=""
                />
                <path
                  d="M16.875 16.1156H1.77187C1.43438 16.1156 1.125 16.3969 1.125 16.7625C1.125 17.1281 1.40625 17.4094 1.77187 17.4094H16.875C17.2125 17.4094 17.5219 17.1281 17.5219 16.7625C17.5219 16.3969 17.2125 16.1156 16.875 16.1156Z"
                  fill="white"
                />
              </svg> */}
              {groupIcon}
              {groupTitle}
              {/* <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg> */}
              <MdKeyboardArrowDown
                className={`w-5.5 h-5.5 absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                  open && "rotate-180"
                }`}
              />
            </NavLink>
            {/* <!-- Dropdown Menu Start --> */}
            <div
              className={`translate transform overflow-hidden ${
                !open && "hidden"
              }`}
            >
              <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                {/* <li>
                            <NavLink
                              to="/forms/form-elements"
                              className={({ isActive }) =>
                                "text-bodydark2 group relative flex items-center gap-2.5 rounded-md px-4 font-medium duration-300 ease-in-out hover:text-white " +
                                (isActive && "!text-white")
                              }
                            >
                              Form Elements
                            </NavLink>
                          </li> */}
                {/* <SidebarGroupChildItem title="Form Elements" path="" />
                <SidebarGroupChildItem title="Form Layout" /> */}
                {groupItems?.map(({ path, title }, idx) => (
                  <SidebarGroupChildItem
                    key={`${groupTitle?.trim().split(" ").join("_")}-${idx}`}
                    title={title}
                    path={path}
                  />
                ))}
              </ul>
            </div>
            {/* <!-- Dropdown Menu End --> */}
          </React.Fragment>
        );
      }}
    </SidebarLinkGroup>
  );
};

export default SidebarGroupParent;
