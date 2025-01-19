import express from "express";
const router = express.Router();
import {
  showProduct,
  updateProduct,
  deleteProduct,
  insertProduct,
} from "../controller/product.controller.js";
router.get("/", showProduct);
router.post("/", insertProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;
