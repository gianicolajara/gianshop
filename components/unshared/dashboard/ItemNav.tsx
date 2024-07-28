"use client";

import { TypographyH5 } from "@/components/shared/TypographyH5";
import TypographyP from "@/components/shared/TypographyP";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { INavDashboard } from "@/types/dashboard";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Props = {
  item: INavDashboard;
  isOpen: boolean;
};

const ItemNav = ({ item, isOpen }: Props) => {
  const [open, setOpen] = useState(true);

  const classnamesIcon = cn(
    {
      "rotate-0": !open,
      "rotate-180": open,
    },
    "transition-all"
  );

  return (
    <div key={item.id} className="mb-2">
      {isOpen ? (
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger asChild className="w-full text-left">
            <Button
              variant="ghost"
              className="flex flex-row justify-between items-center w-full !m-0 !px-4"
            >
              <TypographyH5 className="">{item.title}</TypographyH5>
              <ChevronDown size={15} className={classnamesIcon} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            {item.items.map((subItems) => (
              <Link
                key={subItems.id}
                href={subItems.url || "#"}
                className={buttonVariants({
                  variant: "ghost",
                  className: "w-full !justify-start flex gap-x-2 group pl-6",
                })}
              >
                <subItems.icon className="w-4 h-4 group-hover:text-black dark:group-hover:text-white text-muted-foreground" />
                <TypographyP className="text-muted-foreground group-hover:text-black dark:group-hover:text-white">
                  {subItems.label}
                </TypographyP>
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ) : (
        <>
          {item.items.map((subItems) => (
            <TooltipProvider key={subItems.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    key={subItems.id}
                    href={subItems.url || "#"}
                    className={buttonVariants({
                      variant: "ghost",
                      className:
                        "w-full ! flex gap-x-2 group items-center justify-center",
                    })}
                  >
                    <subItems.icon className="w-4 h-4 group-hover:text-black dark:group-hover:text-white text-muted-foreground" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <TypographyP>{subItems.label}</TypographyP>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </>
      )}
    </div>
  );
};

export default ItemNav;
