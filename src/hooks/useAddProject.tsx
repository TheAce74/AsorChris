import { ID } from "appwrite";
import { databases, storage } from "../services/appwrite/appwrite";
import { AddProjectInputs, ProjectCategory } from "../utils/types";
import { useToast } from "./useToast";
import { adminAtom } from "../services/jotai/admin";
import { useAtom, useAtomValue } from "jotai";
import { projectsAtom } from "../services/jotai/projects";
import { useState } from "react";

function useAddProject() {
  const admin = useAtomValue(adminAtom);
  const [projects, setProjects] = useAtom(projectsAtom);
  const [uploading, setUploading] = useState(false);

  const { customToast } = useToast();

  const addProject = async (data: AddProjectInputs): Promise<boolean> => {
    customToast("Uploading...", { type: "info" });
    setUploading(true);
    const imageArr = [];
    for (let i = 0; i < data.images.length; i++) {
      try {
        const id = ID.unique();
        await storage.createFile(
          import.meta.env.VITE_APP_WRITE_STORAGE_BUCKET_ID,
          id,
          data.images[i]
        );
        imageArr[i] = id;
      } catch (error) {
        console.error(error);
        customToast("Failed to upload project", { type: "error" });
        setUploading(false);
        return false;
      }
    }

    try {
      if (projects.length === 0) {
        await databases.createDocument(
          import.meta.env.VITE_APP_WRITE_DATABASE_ID,
          import.meta.env.VITE_APP_WRITE_COLLECTION_ID,
          admin.id,
          {
            projects: JSON.stringify([
              ...projects,
              {
                name: data.name,
                category: data.category as ProjectCategory,
                description: data.description,
                client: data.client,
                duration: data.duration,
                link: data.link,
                imageIds: imageArr,
              },
            ]),
          }
        );
      } else {
        await databases.updateDocument(
          import.meta.env.VITE_APP_WRITE_DATABASE_ID,
          import.meta.env.VITE_APP_WRITE_COLLECTION_ID,
          admin.id,
          {
            projects: JSON.stringify([
              ...projects,
              {
                name: data.name,
                category: data.category as ProjectCategory,
                description: data.description,
                client: data.client,
                duration: data.duration,
                link: data.link,
                imageIds: imageArr,
              },
            ]),
          }
        );
      }
      setProjects([
        ...projects,
        {
          name: data.name,
          category: data.category as ProjectCategory,
          description: data.description,
          client: data.client,
          duration: data.duration,
          link: data.link,
          imageIds: imageArr,
        },
      ]);
      customToast("Upload successful");
      setUploading(false);
      return true;
    } catch (error) {
      console.error(error);
      customToast("Failed to upload project", { type: "error" });
      setUploading(false);
      return false;
    }
  };

  return { addProject, uploading };
}

export { useAddProject };
