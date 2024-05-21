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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_Crontroller = void 0;
const product_service_1 = require("./product.service");
const product_joi_1 = require("./product.joi");
const Create_new_products = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value } = product_joi_1.productSchemaJoi.validate(req.body);
        if (error) {
            res.status(500).json({
                "success": false,
                "message": "something went wrong!",
                "error": error
            });
        }
        else {
            const Result = yield product_service_1.ProductSevice.Create_Product_Service(value);
            res.status(200).json({
                "success": true,
                "message": "Product created successfully!",
                "data": Result
            });
        }
    }
    catch (error) {
        res.status(500).json({
            "success": false,
            "message": "something went wrong!",
            "error": error
        });
    }
});
const Get_Product_list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.query.searchTerm) {
            const result = yield product_service_1.ProductSevice.GetSearchedProductList(req.query.searchTerm);
            res.status(200).json({
                "success": true,
                "message": "Product fetched successfully!",
                "data": result
            });
        }
        else {
            const result = yield product_service_1.ProductSevice.GetProductList();
            res.status(200).json({
                "success": true,
                "message": "Product fetched successfully!",
                "data": result
            });
        }
    }
    catch (error) {
        res.status(500).json({
            "success": false,
            "message": "something went wrong!",
            "error": error
        });
    }
});
const Get_Single_Product = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductSevice.GetSingleProduct(req.params.productId);
        res.status(200).json({
            "success": true,
            "message": "Product fetched successfully!",
            "data": result
        });
    }
    catch (error) {
        res.status(500).json({
            "success": false,
            "message": "something went wrong!",
            "error": error
        });
    }
});
const UpdateSingleData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield product_service_1.ProductSevice.UpdateSingleData(req.params.productId, req.body);
        res.status(200).json({
            "success": true,
            "message": "Product updated successfully!",
            "data": req.body
        });
    }
    catch (error) {
        res.status(500).json({
            "success": false,
            "message": "something went wrong!",
            "error": error
        });
    }
});
const DeleteSingleData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield product_service_1.ProductSevice.DeleteSingleData(req.params.productId);
        res.status(200).json({
            "success": true,
            "message": "Product deleted successfully!",
            "data": null
        });
    }
    catch (error) {
        res.status(500).json({
            "success": false,
            "message": "something went wrong!",
            "error": error
        });
    }
});
exports.Product_Crontroller = {
    Create_new_products,
    Get_Product_list,
    Get_Single_Product,
    UpdateSingleData,
    DeleteSingleData
};
