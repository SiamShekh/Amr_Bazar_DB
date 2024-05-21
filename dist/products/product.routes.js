"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = __importDefault(require("express"));
const product_crontroller_1 = require("./product.crontroller");
exports.Routes = express_1.default.Router();
exports.Routes.post("/products", product_crontroller_1.Product_Crontroller.Create_new_products);
exports.Routes.get("/products", product_crontroller_1.Product_Crontroller.Get_Product_list);
exports.Routes.get("/products/:productId", product_crontroller_1.Product_Crontroller.Get_Single_Product);
exports.Routes.put("/products/:productId", product_crontroller_1.Product_Crontroller.UpdateSingleData);
exports.Routes.delete("/products/:productId", product_crontroller_1.Product_Crontroller.DeleteSingleData);
