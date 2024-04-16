import { Router } from "express";
import { body, param } from "express-validator";
import {
  createProduct,
  getProducts,
  getOneProduct,
  updateProduct,
  updateAvailability,
  deleteProduct,
} from "./handlers/product";
import { handleInputErrors } from "./middleware";

const router = Router();

// Routing
router.get("/", getProducts);

router.get(
  "/:id",
  param("id").isInt().withMessage("Invalid Id"),
  // Middleware validator
  handleInputErrors,
  getOneProduct
);

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

router.put(
  "/:id",
  param("id").isInt().withMessage("Invalid Id"),
  body("name").notEmpty().withMessage("The product name cannot be empty"),
  body("price")
    .isNumeric()
    .withMessage("Invalid value")
    .notEmpty()
    .withMessage("The product price cannot be empty")
    .custom((value) => value > 0)
    .withMessage("Invalid value"),
  body("availability").isBoolean().withMessage("Product not avilable"),

  // Middleware validator
  handleInputErrors,

  updateProduct
);

router.patch(
  "/:id",
  param("id").isInt().withMessage("Invalid Id"),
  // Middleware validator
  handleInputErrors,
  updateAvailability
);

router.delete(
  "/:id",
  param("id").isInt().withMessage("Invalid Id"),
  // Middleware validator
  handleInputErrors,
  deleteProduct
);

export default router;
