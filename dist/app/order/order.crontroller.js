"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrderByUser = exports.NewOrderByUser = void 0;
const order_service_1 = require("./order.service");
const joi_1 = __importDefault(require("joi"));
const NewOrderByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const OrderSchema = joi_1.default.object({
            email: joi_1.default.string().email().required(),
            productId: joi_1.default.string().required(),
            price: joi_1.default.number().required(),
            quantity: joi_1.default.number().required()
        });
        const { error, value } = OrderSchema.validate(req.body);
        if (error) {
            res.status(400).json({
                "success": false,
                "message": "something went wrong",
                "data": error
            });
        }
        else {
            const result = yield order_service_1.OrderService.NewOrderService(value);
            res.status(200).json({
                "success": true,
                "message": "Order created successfully!",
                "data": result
            });
        }
    }
    catch (error) {
        res.status(400).json({
            "success": false,
            "message": "something went wrong",
            "data": error
        });
    }
});
exports.NewOrderByUser = NewOrderByUser;
const GetOrderByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.query.email) {
            const result = yield order_service_1.OrderService.GetOrderByUserEmail(req.query.email);
            if (result.length) {
                return res.send({
                    "success": true,
                    "message": "Orders fetched successfully!",
                    "data": result
                });
            }
            else {
                return res.send({
                    "success": false,
                    "message": "Order not found"
                });
            }
        }
        const result = yield order_service_1.OrderService.GetOrderByUser();
        return res.send({
            "success": true,
            "message": "Orders fetched successfully!",
            "data": result
        });
    }
    catch (error) {
        return res.status(400).json({
            "success": false,
            "message": "something went wrong",
            "data": error
        });
    }
});
exports.GetOrderByUser = GetOrderByUser;
