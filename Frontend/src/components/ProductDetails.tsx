import { Product } from "../types";
import { formatCurrency } from "../utils";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const isAvailable = product.availability;

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg text-gray-800">
        {isAvailable ? "Available" : "Not Available"}
      </td>
      <td className="p-3 text-lg text-gray-800 "></td>
    </tr>
  );
};

export default ProductDetails;
