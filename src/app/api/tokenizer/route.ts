import { snap } from "@/lib/midtrans/init";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const parameter = {
    transaction_details: {
      order_id: body.order_id,
      gross_amount: body.price,
    },
    credit_card: {
      secure: true,
    },
  };

  const transaction = await snap.createTransaction(parameter);

  return NextResponse.json({ token: transaction.token });
}
