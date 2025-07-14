"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ITransaction } from "@/types/transaction";
import { formatIDR } from "@/lib/format";
import { Badge } from "@/components/ui/badge";

export const ColumnsTransaction: ColumnDef<ITransaction>[] = [
  {
    accessorKey: "products.name",
    header: "Product",
    cell: ({ row }) => <p>{row.original.products?.name ?? "-"}</p>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");

      return (
        <Badge
          variant={
            status === "PAID"
              ? "PAID"
              : status === "PENDING"
              ? "PENDING"
              : "FAILED"
          }
        >
          {row.getValue("status")}
        </Badge>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      return <p>{formatIDR(row.getValue("price"))}</p>;
    },
  },
];
