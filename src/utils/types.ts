import { InferType } from "yup";
import { addProjectSchema, contactSchema } from "./schema";

export type ServiceType = {
  id: string;
  image: string;
  title: string;
  text: string;
  linkText: string;
  linkPath: string;
};

export type ProjectWithContentType = {
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
