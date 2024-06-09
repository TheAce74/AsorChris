import { atom } from "jotai";
import { Admin } from "../../utils/types";

export const adminAtom = atom<Admin>({
  name: "",
  email: "",
  id: "",
});
