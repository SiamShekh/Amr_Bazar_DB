"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_routes_1 = require("./app/products/product.routes");
const cors_1 = __importDefault(require("cors"));
const order_route_1 = require("./app/order/order.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", product_routes_1.Routes);
app.use("/api", order_route_1.OrderRouter);
app.use((req, res) => {
    res.send({
        "success": false,
        "message": "Route not found"
    });
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
