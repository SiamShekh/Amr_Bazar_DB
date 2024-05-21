import { Request, Response } from "express";
import { OrderService } from "./order.service";
import Joi from 'joi';

export const NewOrderByUser = async (req: Request, res: Response) => {
    try {

        const OrderSchema = Joi.object({
            email: Joi.string().email().required(),
            productId: Joi.string().required(),
            price: Joi.number().required(),
            quantity: Joi.number().required()
        });

        const { error, value } = OrderSchema.validate(req.body);

        if (error) {
            res.status(400).json({
                "success": false,
                "message": "something went wrong",
                "data": error
            })
        } else {

            const result = await OrderService.NewOrderService(value);
            res.status(200).json({
                "success": true,
                "message": "Order created successfully!",
                "data": result
            })
        }

    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "something went wrong",
            "data": error
        })
    }
}

export const GetOrderByUser = async (req: Request, res: Response) => {
    try {
        if (req.query.email) {
            const result = await OrderService.GetOrderByUserEmail(req.query.email as string);
            if (result.length) {
                return res.send({
                    "success": true,
                    "message": "Orders fetched successfully!",
                    "data": result
                })
            } else {
                return res.send({
                    "success": false,
                    "message": "Order not found"
                })
            }

        }
        const result = await OrderService.GetOrderByUser()
        return res.send({
            "success": true,
            "message": "Orders fetched successfully!",
            "data": result
        })
    } catch (error) {
        return res.status(400).json({
            "success": false,
            "message": "something went wrong",
            "data": error
        })
    }
}