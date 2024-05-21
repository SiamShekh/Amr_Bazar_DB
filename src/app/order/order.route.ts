import express from "express";
import { GetOrderByUser, NewOrderByUser } from "./order.crontroller";

export const OrderRouter = express.Router();

OrderRouter.post("/order", NewOrderByUser);
OrderRouter.get("/order", GetOrderByUser);


