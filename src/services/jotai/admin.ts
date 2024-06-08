import { atom } from "jotai";
import { Admin } from "../../utils/types";

export const adminState = atom<Admin>({
  name: "",
  email: "",
  id: "",
});
