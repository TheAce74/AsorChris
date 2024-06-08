import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("Ensure you provide a name"),
  email: yup
    .string()
    .email("Ensure you provide a valid email")
    .required("Ensure you provide an email"),
  message: yup.string().required("Ensure you provide a message"),
});

export const addProjectSchema = yup.object({
  category: yup
    .string()
    .test(
      "category",
      "Select a category",
      (value) => value !== "Project category"
    ),
  name: yup.string().required("Enter the name of the project"),
  client: yup.string().required("Enter client's name"),
  duration: yup.string().required("Enter project duration"),
  link: yup.string().required("Enter link to live project"),
  images: yup
    .array()
    .of(
      yup
        .mixed<File>()
        .required("Image is required")
        .test("fileSize", "File size is too large", (value) => {
          if (!value) return false;
          return value.size <= 5 * 1024 * 1024;
        })
        .test("fileType", "Unsupported File Format", (value) => {
          if (!value) return false;
          return ["image/jpeg", "image/png", "image/gif"].includes(value.type);
        })
    )
    .required("At least one image is required")
    .min(1, "At least one image is required"),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Enter your email address"),
  password: yup.string().required("Enter your password"),
});
