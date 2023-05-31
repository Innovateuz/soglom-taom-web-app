import { Outlet } from "react-router-dom";
import { Topbar } from "./components/Topbar";
import { BottomNavigation } from "./components/BottomNavigation";
import { useViewModel } from "./ViewModel";
import { DropDownMenu } from "./components/DropDownMenu";
import { useEffect } from "react";

export const Layout = () => {
  const { toggleDropDown, isOpen } = useViewModel();

  return (
    <>
      <div className="max-w-[580px] mx-auto h-screen flex flex-col">
        <Topbar toggleDropDown={toggleDropDown} isOpen={isOpen} />
        <div
          className={`body relative flex-1 ${isOpen ? "" : "overflow-auto"}`}
        >
          <Outlet />
          <DropDownMenu isOpen={isOpen} />
        </div>
        <BottomNavigation />
      </div>
    </>
  );
};
