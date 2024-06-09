import { InferType } from "yup";
import { addProjectSchema, contactSchema, loginSchema } from "./schema";

export type ServiceType = {
  id: string;
  image: string;
  title: string;
  text: string;
  linkText: string;
  linkPath: string;
};

export type Testimony = {
  name: string;
  text: string;
};

export type KeysOfType<T extends Record<string, unknown>> = keyof T;

export type ContactInputs = InferType<typeof contactSchema>;

export type DashboardHeaderText =
  | "Dashboard"
  | "Projects"
  | "Messages"
  | "Add new project";

export type AddProjectInputs = InferType<typeof addProjectSchema>;

export type Admin = {
  name: string;
  email: string;
  id: string;
};

export type LoginInputs = InferType<typeof loginSchema>;

export type ProjectCategory =
  | "UI/UX"
  | "Brand Identity Design"
  | "Logo Design"
  | "Flyer Designs";

export type Project = {
  category: ProjectCategory;
  name: string;
  description: string;
  client: string;
  duration: string;
  link: string;
  imageIds: string[];
};

export type Message = {
  id: string;
  senderName: string;
  senderEmail: string;
  message: string;
  createdAt: string;
};
