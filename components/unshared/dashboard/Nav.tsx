"use client";

import { listNavDashboard } from "@/config/dashboard";
import ListItemsNav from "./ListItemsNav";

type Props = {
  isOpen: boolean;
};

const Nav = ({ isOpen }: Props) => {
  return (
    <div className="w-full flex-1 px-2 py-5">
      <ListItemsNav list={listNavDashboard} isOpen={isOpen} />
    </div>
  );
};

export default Nav;
