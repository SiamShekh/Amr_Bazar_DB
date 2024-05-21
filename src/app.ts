import express, { Application, Request, Response } from 'express'
import { Routes } from './app/products/product.routes';
import cors from "cors";
import { OrderRouter } from './app/order/order.route';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/api", Routes);
app.use("/api", OrderRouter);

app.use((req: Request, res: Response) => {
  res.send({
    "success": false,
    "message": "Route not found"
  })
})
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
