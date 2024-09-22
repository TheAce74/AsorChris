import { databases, storage } from "../services/appwrite/appwrite";
import { useToast } from "./useToast";
import { adminAtom } from "../services/jotai/admin";
import { useAtom, useAtomValue } from "jotai";
import { projectsAtom } from "../services/jotai/projects";

function useDeleteProject() {
  const admin = useAtomValue(adminAtom);
  const [projects, setProjects] = useAtom(projectsAtom);

  const { customToast } = useToast();

  const deleteProject = async (name: string): Promise<void> => {
    customToast("Deleting...", { type: "info" });
    try {
      projects
        .filter((project) => project.name === name)[0]
        .imageIds.forEach(async (image) => {
          await storage.deleteFile(
            import.meta.env.VITE_APP_WRITE_STORAGE_BUCKET_ID,
            image
          );
        });
      await databases.updateDocument(
        import.meta.env.VITE_APP_WRITE_DATABASE_ID,
        import.meta.env.VITE_APP_WRITE_COLLECTION_ID,
        admin.id,
        {
          projects: JSON.stringify(
            projects.filter((project) => project.name !== name)
          ),
        }
      );
      setProjects(projects.filter((project) => project.name !== name));
      customToast("Deleted successfully");
    } catch (error) {
      console.error(error);
      customToast("Failed to delete project", { type: "error" });
    }
  };

  return { deleteProject };
}

export { useDeleteProject };
