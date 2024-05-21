import { Request, Response } from "express";
import { ProductSevice } from "./product.service";
import { productSchemaJoi } from "./product.joi";

const Create_new_products = async (req: Request, res: Response) => {
    try {
        const { error, value } = productSchemaJoi.validate(req.body);
        if (error) {
            res.status(500).json({
                "success": false,
                "message": "something went wrong!",
                "error": error
            })
        } else {
            const Result = await ProductSevice.Create_Product_Service(value);

            res.status(200).json({
                "success": true,
                "message": "Product created successfully!",
                "data": Result
            })
        }
    } catch (error) {
        res.status(500).json({
            "success": false,
            "message": "something went wrong!",
            "error": error
        })
    }
}

const Get_Product_list = async (req: Request, res: Response) => {
    try {

        if (req.query.searchTerm) {
            const result = await ProductSevice.GetSearchedProductList(req.query.searchTerm as string);
            res.status(200).json({
                "success": true,
                "message": "Product fetched successfully!",
                "data": result
            })
        } else {
            const result = await ProductSevice.GetProductList();

            res.status(200).json({
                "success": true,
                "message": "Product fetched successfully!",
                "data": result
            })
        }
    } catch (error) {
        res.status(500).json({
            "success": false,
            "message": "something went wrong!",
            "error": error
        })
    }

}

const Get_Single_Product = async (req: Request, res: Response) => {
    try {
        const result = await ProductSevice.GetSingleProduct(req.params.productId);
        res.status(200).json({
            "success": true,
            "message": "Product fetched successfully!",
            "data": result
        })
    } catch (error) {
        res.status(500).json({
            "success": false,
            "message": "something went wrong!",
            "error": error
        })
    }

}

const UpdateSingleData = async (req: Request, res: Response) => {
    try {
        await ProductSevice.UpdateSingleData(req.params.productId, req.body);
        res.status(200).json({
            "success": true,
            "message": "Product updated successfully!",
            "data": req.body
        })

    } catch (error) {
        res.status(500).json({
            "success": false,
            "message": "something went wrong!",
            "error": error
        })
    }
};


const DeleteSingleData = async (req: Request, res: Response) => {
    try {

       await ProductSevice.DeleteSingleData(req.params.productId);
        res.status(200).json({
            "success": true,
            "message": "Product deleted successfully!",
            "data": null
        })

    } catch (error) {
        res.status(500).json({
            "success": false,
            "message": "something went wrong!",
            "error": error
        })
    }
};

export const Product_Crontroller = {
    Create_new_products,
    Get_Product_list,
    Get_Single_Product,
    UpdateSingleData,
    DeleteSingleData
}