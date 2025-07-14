"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, MoreHorizontal } from "lucide-react";
import { products } from "@/types/product";
import { Button } from "@/components/ui/button";
import { formatIDR } from "@/lib/format";
import DeleteProduct from "@/components/form/product/delete-product";
import UpdateProduct from "@/components/form/product/update-product";

export const ColumnsProduct: ColumnDef<products>[] = [
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const image = `${row.getValue("image")}`;

      return (
        <div className="w-20 h-20 rounded overflow-hidden bg-white">
          <Image
            src={image}
            alt="image"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      return <p>{formatIDR(row.getValue("price"))}</p>;
    },
  },
  {
    accessorKey: "description",
    header: "Deskripsi",
    cell: ({ row }) => {
      return (
        <p className="text-wrap line-clamp-3">{row.getValue("description")}</p>
      );
    },
  },
  {
    enablePinning: true,
    accessorKey: "Aksi",
    header: "Aksi",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full flex justify-end outline-none">
          <MoreHorizontal className="h-4 w-4 cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32 bg-white">
          <DropdownMenuLabel>Aksi</DropdownMenuLabel>
          <UpdateProduct data={row.original} />
          <DeleteProduct id={row.original.id} />
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
