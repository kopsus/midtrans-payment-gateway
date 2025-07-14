"use client";

import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";
import { DataTableFacetedFilter } from "./faceted-filter";
import { CheckCircle, CircleOff, Timer } from "lucide-react";
import { Input } from "@/components/ui/input";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

const statuses = [
  {
    value: "PAID",
    label: "paid",
    icon: CheckCircle,
  },
  {
    value: "PENDING",
    label: "pending",
    icon: Timer,
  },
  {
    value: "FAILED",
    label: "Failed",
    icon: CircleOff,
  },
];

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-end space-x-2">
      <Input
        placeholder="Filter nama produk..."
        value={
          (table.getColumn("products_name")?.getFilterValue() as string) ?? ""
        }
        onChange={(event) =>
          table.getColumn("products_name")?.setFilterValue(event.target.value)
        }
        className="h-8 w-[150px] lg:w-[250px]"
      />
      {table.getColumn("status") && (
        <DataTableFacetedFilter
          column={table.getColumn("status")}
          title="Status"
          options={statuses}
        />
      )}
      {isFiltered && (
        <Button
          variant="ghost"
          onClick={() => table.resetColumnFilters()}
          className="h-8 px-2 lg:px-3"
        >
          Reset
          <X />
        </Button>
      )}
    </div>
  );
}
