import { atom } from "jotai";
import { Project } from "../../utils/types";

export const projectsAtom = atom<Project[]>([]);
