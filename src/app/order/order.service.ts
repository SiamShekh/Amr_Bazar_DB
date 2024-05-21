import { Order_Interface } from "./order.interface";
import { OrderModel } from "./order.model";

const NewOrderService = async (order: Order_Interface) => {
    const result = await OrderModel.create(order);
    return result;
}

const GetOrderByUser = async () => {
    const result = await OrderModel.find();
    return result;
}

const GetOrderByUserEmail = async (email: string) => {
    const result = await OrderModel.find({ email: email });
    return result;
}


export const OrderService = {
    NewOrderService,
    GetOrderByUserEmail,
    GetOrderByUser
}