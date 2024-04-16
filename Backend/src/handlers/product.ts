import { Request, Response } from "express";
import Product from "../models/Product.model";

export const getProducts = async (req: Request, res: Response) => {
  try {
    // Get products
    const products = await Product.findAll({
      order: [["price", "DESC"]],
    });
    res.json({ data: products });
  } catch (error) {
    console.log(error);
  }
};

export const getOneProduct = async (req: Request, res: Response) => {
  try {
    // Get product by id
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({
        error: "Product not found",
      });
    }

    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    // Create product
    const product = await Product.create(req.body);
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    // Get product by id
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({
        error: "Product not found",
      });
    }

    // Update product
    await product.update(req.body);
    await product.save();

    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

export const updateAvailability = async (req: Request, res: Response) => {
  try {
    // Get product by id
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({
        error: "Product not found",
      });
    }

    // Update product
    product.availability = !product.dataValues.availability;
    await product.save();

    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    // Get product by id
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({
        error: "Product not found",
      });
    }

    // Delete product
    await product.destroy();

    res.json({ data: "Product Deleted" });
  } catch (error) {
    console.log(error);
  }
};
