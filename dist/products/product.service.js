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
exports.ProductSevice = void 0;
const product_model_1 = require("./product.model");
const Create_Product_Service = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield product_model_1.ProductModel.create(product);
    return Result;
});
const GetProductList = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.find();
    return result;
});
const GetSearchedProductList = (search) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.aggregate([
        {
            $search: {
                index: "default",
                text: {
                    query: search,
                    path: 'name'
                }
            }
        }
    ]);
    return result;
});
const GetSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findOne({ _id: id });
    return result;
});
const UpdateSingleData = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.updateOne({ _id: id }, { $set: Object.assign({}, product) });
    return result;
});
const DeleteSingleData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.deleteOne({ _id: id });
    return result;
});
exports.ProductSevice = {
    Create_Product_Service,
    GetProductList,
    GetSingleProduct,
    UpdateSingleData,
    DeleteSingleData,
    GetSearchedProductList
};
