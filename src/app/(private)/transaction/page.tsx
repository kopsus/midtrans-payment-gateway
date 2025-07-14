import NavHeader from "@/components/nav-header";
import { ColumnsTransaction } from "@/components/table/transaction/columns";
import { supabase } from "@/lib/supabase/init";
import React from "react";
import { DataTableTransaction } from "@/components/table/transaction/data-table";

const page = async () => {
  const { data } = await supabase
    .from("transactions")
    .select(`*, products(name)`) // join dengan nama produk
    .order("created_at", { ascending: false });

  return (
    <>
      <NavHeader title="Transactions" />
      <DataTableTransaction
        title="Transactions"
        data={data ?? []}
        columns={ColumnsTransaction}
      />
    </>
  );
};

export default page;
