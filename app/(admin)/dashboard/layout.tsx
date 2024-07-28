"use client";

import BreadcrumbCustom from "@/components/shared/Breadcrumb/BreadcrumbCustom";
import { Button } from "@/components/ui/button";
import DarkMode from "@/components/unshared/dashboard/DarkMode";
import Nav from "@/components/unshared/dashboard/Nav";
import { cn } from "@/lib/utils";
import { ArrowLeftFromLine } from "lucide-react";
import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const classnames = cn(
    {
      "grid-cols-[250px,_1fr] grid-rows-1": isOpen,
      "grid-cols-[75px,_1fr] grid-rows-1": !isOpen,
    },
    "grid w-full h-screen"
  );

  const classnameIcon = cn(
    {
      "rotate-0": isOpen,
      "rotate-180": !isOpen,
    },
    "transition-all duration-500 w-4 h-4"
  );

  return (
    <div className={classnames}>
      <div className="border-r border-gray-300 dark:border-muted w-full h-full flex flex-col">
        <Nav isOpen={isOpen} />
      </div>
      <div className="grid grid-cols-1 grid-rows-[50px,_1fr]">
        <nav className="w-full h-full border-b border-gray-300 dark:border-muted flex items-center px-4 justify-between">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ArrowLeftFromLine className={classnameIcon} />
          </Button>
          <DarkMode />
        </nav>
        <main className="w-full h-full p-5">
          <BreadcrumbCustom />
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
