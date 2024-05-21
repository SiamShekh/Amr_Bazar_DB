import { query } from "express";
import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const Create_Product_Service = async (product: Product) => {
    const Result = await ProductModel.create(product);
    return Result;
}

const GetProductList = async () => {
    const result = await ProductModel.find();
    return result;
}
const GetSearchedProductList = async (search: string) => {
    const result = await ProductModel.aggregate([
        {
            $search: {
                index: "default",
                text: {
                    query: search,
                    path: 'name'
                }
            }
        }
    ])
    return result;
}

const GetSingleProduct = async (id: string) => {
    const result = await ProductModel.findOne({ _id: id });
    return result;
}

const UpdateSingleData = async (id: string, product: Product) => {
    const result = await ProductModel.updateOne({ _id: id }, { $set: { ...product } });
    return result;
}

const DeleteSingleData = async (id: string) => {
    const result = await ProductModel.deleteOne({ _id: id });
    return result;
}

export const ProductSevice = {
    Create_Product_Service,
    GetProductList,
    GetSingleProduct,
    UpdateSingleData,
    DeleteSingleData,
    GetSearchedProductList
}