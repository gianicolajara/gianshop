import {
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Props = {
  item: string;
  index: number;
  listBreadcrumb: string[];
};

const ItemBreadcrumb = ({ index, item, listBreadcrumb }: Props) => {
  return (
    <>
      <BreadcrumbItem>{item}</BreadcrumbItem>
      {index < listBreadcrumb.length - 1 && <BreadcrumbSeparator />}
    </>
  );
};

export default ItemBreadcrumb;
