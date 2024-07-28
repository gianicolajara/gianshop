import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type Icon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

export interface INavDashboard {
  id: number;
  title: string;
  items: {
    id: number;
    label: string;
    icon: Icon;
    url?: string;
  }[];
}
