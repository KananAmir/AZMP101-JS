import * as Yup from "yup";

export const ProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(10, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number()
    .min(10, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),
  image: Yup.string().url("it is not the correct url").required("Required"),
});
