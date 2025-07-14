"use client";

import React from "react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { IProdcut, ProductSchema } from "@/lib/schema/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabase/init";

const CreateProduct = () => {
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IProdcut>({
    resolver: zodResolver(ProductSchema),
  });

  const onSubmit = async (data: IProdcut) => {
    const { error } = await supabase.from("products").insert([data]);

    if (error) {
      alert("Gagal menambahkan produk");
    } else {
      alert("Berhasil menambahkan produk");
      reset();
      setOpen(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className="text-white">Tambah Produk</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Membuat Produk</AlertDialogTitle>
          <AlertDialogDescription asChild className="mt-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label>Nama Produk</Label>
                <Input
                  type="text"
                  placeholder="masukan nama product"
                  required
                  {...register("name")}
                />
              </div>
              <div className="space-y-2">
                <Label>Link Gambar Produk</Label>
                <Input
                  type="text"
                  placeholder="masukan link gambar product"
                  required
                  {...register("image")}
                />
              </div>
              <div className="space-y-2">
                <Label>Harga Produk</Label>
                <Input
                  type="number"
                  placeholder="masukan harga product"
                  required
                  {...register("price")}
                />
              </div>
              <div className="space-y-2">
                <Label>Deskripsi Produk</Label>
                <Textarea
                  placeholder="tulis deskripsi product"
                  required
                  {...register("description")}
                />
              </div>
              <AlertDialogFooter className="mt-5">
                <AlertDialogCancel onClick={() => reset()}>
                  Cancel
                </AlertDialogCancel>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Loading..." : "Submit"}
                </Button>
              </AlertDialogFooter>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateProduct;
