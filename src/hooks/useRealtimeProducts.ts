import { useEffect } from "react";
import { supabase } from "@/lib/supabase/init";
import { products } from "@/types/product";

export function useRealtimeProducts(
  setData: React.Dispatch<React.SetStateAction<products[]>>
) {
  useEffect(() => {
    const channel = supabase
      .channel("products-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "products",
        },
        (payload) => {
          setData((prev) => {
            const newRow = payload.new as products;
            const oldRow = payload.old as products;

            switch (payload.eventType) {
              case "INSERT":
                return [...prev, newRow];
              case "UPDATE":
                return prev.map((item) =>
                  item.id === newRow.id ? newRow : item
                );
              case "DELETE":
                return prev.filter((item) => item.id !== oldRow.id);
              default:
                return prev;
            }
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [setData]);
}
