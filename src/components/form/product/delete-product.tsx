"use client";

import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { supabase } from "@/lib/supabase/init";

const DeleteProduct = ({ id }: { id: string }) => {
  const onDelete = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      alert("gagal menghapus data produk");
    } else {
      alert("Berhasil menghapus data produk");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex flex-row items-center justify-start gap-2"
        >
          <Trash className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form onSubmit={onDelete}>
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah anda yakin?</AlertDialogTitle>
            <AlertDialogDescription className="mb-1">
              Tindakan ini tidak dapat dibatalkan. Ini akan menghapus data
              produk secara permanen.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-2">
            <AlertDialogCancel
              type="button"
              className="bg-slate-100 text-black hover:bg-slate-200"
            >
              Batal
            </AlertDialogCancel>
            <AlertDialogAction
              type="submit"
              className="bg-red-500 text-white hover:bg-red-600"
            >
              Lanjutkan
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteProduct;
