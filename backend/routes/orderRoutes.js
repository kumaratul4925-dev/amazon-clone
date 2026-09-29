import { Router } from "express";
import { createOrder, getUserOrders, getOrder } from "../controllers/orderController.js";
const router = Router();
router.post("/", createOrder);
router.get("/user/:userId", getUserOrders);
router.get("/:id", getOrder);
export default router;