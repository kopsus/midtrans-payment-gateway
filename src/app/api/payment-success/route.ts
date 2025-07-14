import { SupabaseServerClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { orderId, transactionStatus } = await req.json();

  const supabase = SupabaseServerClient();

  const { error } = await supabase
    .from("transactions")
    .update({
      status: transactionStatus,
      paid_at:
        transactionStatus === "PAID" || transactionStatus === "settlement"
          ? new Date()
          : null,
    })
    .eq("order_id", orderId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
