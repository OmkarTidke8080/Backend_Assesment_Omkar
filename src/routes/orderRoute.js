import express from "express";
import { order } from "../controllers/order.js";
import { getAllOrders, totalRevenue } from "../controllers/order.js";

const router = express.Router();

// Define the POST route
router.post("/", order);
router.get("/getAllOrders", getAllOrders);
router.get("/getRevenue", totalRevenue);

export default router;
