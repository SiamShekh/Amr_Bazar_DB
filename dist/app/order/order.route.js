"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = void 0;
const express_1 = __importDefault(require("express"));
const order_crontroller_1 = require("./order.crontroller");
exports.OrderRouter = express_1.default.Router();
exports.OrderRouter.post("/order", order_crontroller_1.NewOrderByUser);
exports.OrderRouter.get("/order", order_crontroller_1.GetOrderByUser);
