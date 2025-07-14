type Status = "PAID" | "PENDING" | "FAILED";

export interface ITransaction {
  id: string;
  order_id: string;
  product_id: string;
  status: Status;
  paid_at: Date;
  price: number;
  created_at: Date;
  products: {
    name: string;
  };
}
