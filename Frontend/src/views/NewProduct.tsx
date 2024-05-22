import {
  Link,
  Form,
  useActionData,
  ActionFunctionArgs,
  redirect,
} from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { addProduct } from "../services/ProductService";

export const action = async ({ request }: ActionFunctionArgs) => {
  // Get Data from form
  const data = Object.fromEntries(await request.formData());

  let error = "";

  // Validate errors
  if (Object.values(data).includes("")) {
    error = "All fields are required";
  }

  if (error.length) {
    return error;
  }

  // Add product
  await addProduct(data);

  return redirect("/");
};

const NewProduct = () => {
  const error = useActionData() as string;

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">New Product</h2>
        <Link
          to="/"
          className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-700"
        >
          Back
        </Link>
      </div>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Form className="mt-10" method="POST">
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
          />
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Add Product"
        />
      </Form>
    </>
  );
};

export default NewProduct;
