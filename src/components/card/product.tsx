"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { products } from "@/types/product";
import Script from "next/script";
import { supabase } from "@/lib/supabase/init";

declare global {
  interface Window {
    snap: any;
  }
}

const ProductCard = ({ item }: { item: products }) => {
  const checkOut = async () => {
    const { data: trx, error } = await supabase
      .from("transactions")
      .insert([
        {
          product_id: item.id,
          order_id: `ORDER-${Date.now()}`, // atau pakai UUID
          status: "PENDING",
          price: item.price,
        },
      ])
      .select()
      .single();

    // Dapatkan token dari backend
    const res = await fetch("/api/tokenizer", {
      method: "POST",
      body: JSON.stringify({
        id: item.id,
        name: item.name,
        price: item.price,
        order_id: trx.order_id, // penting!
      }),
    });

    const req = await res.json();

    // Jalankan Snap dengan token + callback
    window.snap.pay(req.token, {
      onSuccess: async () => {
        await updateTransactionStatus(trx.order_id, "PAID");
      },
      onPending: async () => {
        await updateTransactionStatus(trx.order_id, "PENDING");
      },
      onError: async () => {
        await updateTransactionStatus(trx.order_id, "FAILED");
      },
      onClose: () => {
        console.log("User menutup modal");
      },
    });
  };

  const updateTransactionStatus = async (orderId: string, status: string) => {
    await fetch("/api/payment-success", {
      method: "POST",
      body: JSON.stringify({
        orderId,
        transactionStatus: status,
      }),
    });
  };

  return (
    <>
      <Script
        src={process.env.NEXT_PUBLIC_MIDTRANS_SNAP_URL}
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
        strategy="lazyOnload"
      />
      <Card className="flex flex-col gap-2 p-0 overflow-hidden">
        <div className="w-full h-44 border overflow-hidden">
          <Image
            src={item.image}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="hover:scale-105 transition-all"
          />
        </div>
        <div className="flex flex-col m-3 gap-2">
          <p className="font-bold text-xl">{item.name}</p>
          <p className="">
            {item.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
          <p className="line-clamp-3">{item.description}</p>
          <Button onClick={() => checkOut()}>Check out</Button>
        </div>
      </Card>
    </>
  );
};

export default ProductCard;
