"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbList } from "../../ui/breadcrumb";
import ItemBreadcrumb from "./ItemBreadcrumb";

const BreadcrumbCustom = () => {
  const pathname = usePathname();
  const listBreadcrumb = pathname.split("/");
  listBreadcrumb.shift();

  return (
    <div className="w-full h-min pb-2">
      <Breadcrumb>
        <BreadcrumbList>
          {listBreadcrumb.map((item, index) => (
            <ItemBreadcrumb
              key={item + index}
              index={index}
              item={item}
              listBreadcrumb={listBreadcrumb}
            />
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbCustom;
