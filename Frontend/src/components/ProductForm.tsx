import { Product } from "../types";

type ProductFormProps = {
  product?: Product;
};

const ProductForm = ({ product }: ProductFormProps) => {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="name">
          Name: <span className="text-red-700 font-bold">*</span>
        </label>
        <input
          id="name"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Name of the Product"
          name="name"
          defaultValue={product?.name}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="price">
          Price: <span className="text-red-700 font-bold">*</span>
        </label>
        <input
          id="price"
          type="number"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Price of the Product"
          name="price"
          defaultValue={product?.price}
        />
      </div>
    </>
  );
};

export default ProductForm;
