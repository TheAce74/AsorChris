import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("Ensure you provide a name"),
  email: yup.string().email("Ensure you provide a valid email").required("Ensure you provide an email"),
  message: yup.string().required("Ensure you provide a message"),
});
