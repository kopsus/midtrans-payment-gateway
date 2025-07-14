import ProductCard from "@/components/card/product";
import { supabase } from "@/lib/supabase/init";
import React from "react";

const page = async () => {
  const { data } = await supabase.from("products").select("*");

  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="grid grid-cols-4 gap-4">
        {data?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
