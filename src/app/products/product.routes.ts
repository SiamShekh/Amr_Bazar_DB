import express from "express";
import { Product_Crontroller } from "./product.crontroller";

export const Routes = express.Router();

Routes.post("/products", Product_Crontroller.Create_new_products )
Routes.get("/products", Product_Crontroller.Get_Product_list )
Routes.get("/products/:productId", Product_Crontroller.Get_Single_Product )
Routes.put("/products/:productId", Product_Crontroller.UpdateSingleData )
Routes.delete("/products/:productId", Product_Crontroller.DeleteSingleData )






