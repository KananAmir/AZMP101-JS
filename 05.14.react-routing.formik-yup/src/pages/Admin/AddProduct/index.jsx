import { useFormik } from "formik";
import { addNewData } from "../../../api";
import { endpoints } from "../../../api/constant";
import { ProductSchema } from "../../../validations/product.validation";

const AddProduct = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      price: 0,
      image: "",
    },
    onSubmit: (values) => {
      console.log(values);
      addNewData(endpoints.products, values).then((res) => {});
      formik.resetForm();
    },
    validationSchema: ProductSchema,
  });
  return (
    <div>
      <h1>Add Product Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">TITLE</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title && formik.touched.title && (
          <div style={{ color: "red" }}>{formik.errors.title}</div>
        )}
        <br />
        <label htmlFor="lastName">PRICE</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.errors.price && formik.touched.price && (
          <div style={{ color: "red" }}>{formik.errors.price}</div>
        )}
        <br />

        <label htmlFor="email">UMAGE</label>
        <input
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        {formik.errors.image && formik.touched.image && (
          <div style={{ color: "red" }}>{formik.errors.image}</div>
        )}
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
