import { useSetAtom } from "jotai";
import { databases } from "../services/appwrite/appwrite";
import { projectsState } from "../services/jotai/projects";
import { Project } from "../utils/types";
import { useToast } from "./useToast";
import { useCallback } from "react";

function useGetProjects() {
  const { customToast } = useToast();
  const setProjects = useSetAtom(projectsState);

  const getProjects = useCallback(
    async (id: string) => {
      try {
        const response = await databases.getDocument(
          import.meta.env.VITE_APP_WRITE_DATABASE_ID,
          import.meta.env.VITE_APP_WRITE_COLLECTION_ID,
          id
        );
        const projects = JSON.parse(response.projects) as Project[];
        setProjects(projects);
      } catch (error) {
        console.error(error);
        customToast("Failed to fetch projects", { type: "error" });
      }
    },
    [customToast, setProjects]
  );

  return { getProjects };
}

export { useGetProjects };
