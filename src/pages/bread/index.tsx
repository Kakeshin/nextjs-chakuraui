import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

interface BreadcrumbInterface {
  title: string;
}

const Page = ({ title }: BreadcrumbInterface) => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink isCurrentPage>{title}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Page;
