import { INavDashboard } from "@/types/dashboard";
import {
  Cpu,
  Images,
  LayoutDashboard,
  ShoppingBasket,
  Users,
} from "lucide-react";

export const listNavDashboard: INavDashboard[] = [
  {
    id: 1,
    title: "Home",
    items: [
      {
        id: 1,
        label: "Dashboard",
        icon: LayoutDashboard,
        url: "/dashboard",
      },
    ],
  },
  {
    id: 2,
    title: "Admin",
    items: [
      {
        id: 1,
        label: "Users",
        icon: Users,
        url: "/dashboard/admin/users",
      },
      {
        id: 2,
        label: "permission",
        icon: Cpu,
        url: "/dashboard/admin/permission",
      },
    ],
  },
  {
    id: 3,
    title: "Products",
    items: [
      {
        id: 1,
        label: "Products",
        icon: ShoppingBasket,
        url: "/dashboard/products/products",
      },
    ],
  },
  {
    id: 4,
    title: "Config",
    items: [
      {
        id: 1,
        label: "Images",
        icon: Images,
        url: "/dashboard/config/images",
      },
    ],
  },
];
