"use client";

import { INavDashboard } from "@/types/dashboard";
import ItemNav from "./ItemNav";

type Props = {
  list: INavDashboard[];
  isOpen: boolean;
};

const ListItemsNav = ({ list, isOpen }: Props) => {
  return (
    <div className="w-full flex-1">
      {list.map((item) => (
        <ItemNav key={item.id} item={item} isOpen={isOpen} />
      ))}
    </div>
  );
};

export default ListItemsNav;
