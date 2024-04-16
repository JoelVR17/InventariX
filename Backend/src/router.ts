import { Router } from "express";
import { body } from "express-validator";
import { createProduct } from "./handlers/product";
import { handleInputErrors } from "./middleware";

const router = Router();

// Routing
router.get("/", (req, res) => {
  res.json("get");
});

router.post(
  "/",

  // Validation
  body("name").notEmpty().withMessage("The product name cannot be empty"),
  body("price")
    .isNumeric()
    .withMessage("Invalid value")
    .notEmpty()
    .withMessage("The product price cannot be empty")
    .custom((value) => value > 0)
    .withMessage("Invalid value"),

  // Middleware validator
  handleInputErrors,

  createProduct
);

router.put("/", (req, res) => {
  res.json("put");
});

router.patch("/", (req, res) => {
  res.json("patch");
});

router.delete("/", (req, res) => {
  res.json("delete");
});

export default router;
