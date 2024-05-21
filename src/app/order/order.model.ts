import { Schema, model } from "mongoose";
import { Order_Interface } from "./order.interface";

const OrderSchema = new Schema<Order_Interface>({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
})

export const OrderModel = model("Order", OrderSchema);