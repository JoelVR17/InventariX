import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Products, { loader as productsLoader } from "./views/Products";
import NewProduct, { action as newProductAction } from "./views/NewProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "new/product",
        element: <NewProduct />,
        action: newProductAction,
      },
    ],
  },
]);
