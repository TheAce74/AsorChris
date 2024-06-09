import { Outlet } from "react-router-dom";
import { useGetProjects } from "../../hooks/useGetProjects";
import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { projectsAtom } from "../../services/jotai/projects";
import { LoadingOverlay } from "@mantine/core";

export default function GetProjects() {
  const projects = useAtomValue(projectsAtom);
  const { getProjects } = useGetProjects();

  useEffect(() => {
    const get = async () => {
      await getProjects(import.meta.env.VITE_APP_WRITE_USER_ID);
    };
    get();
  }, [getProjects]);

  if (projects.length > 0) {
    return <Outlet />;
  } else {
    return (
      <LoadingOverlay
        visible
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
    );
  }
}
