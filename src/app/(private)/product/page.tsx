"use client";

import NavHeader from "@/components/nav-header";
import { ColumnsProduct } from "@/components/table/product/columns";
import { DataTableProduct } from "@/components/table/product/data-table";
import { useRealtimeProducts } from "@/hooks/useRealtimeProducts";
import { supabase } from "@/lib/supabase/init";
import { products } from "@/types/product";
import React from "react";

const ProductPage = () => {
  const [data, setData] = React.useState<products[]>([]);

  React.useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from("products").select("*");
      setData(data ?? []);
    };
    fetch();
  }, []);

  useRealtimeProducts(setData);

  return (
    <>
      <NavHeader title="Products" />
      <DataTableProduct
        title="Product"
        data={data ?? []}
        columns={ColumnsProduct}
      />
    </>
  );
};

export default ProductPage;
