import { useCallback, useEffect, useState } from "react";
import { useGetImageUrl } from "../../hooks/useGetImageUrl";
import { Project } from "../../utils/types";
import { BsTrash3 } from "react-icons/bs";
import { useDeleteProject } from "../../hooks/useDeleteProject";
import { useDeleteProjectModal } from "../../hooks/useDeleteProjectModal";

type ProjectWithoutContentProps = {
  project: Project;
  idx: number;
  className?: string;
  imageOnly?: boolean;
  inDashboard?: boolean;
};

export default function ProjectWithoutContent({
  project,
  idx,
  className,
  imageOnly,
  inDashboard,
}: ProjectWithoutContentProps) {
  const { getImgUrl } = useGetImageUrl();
  const [url, setUrl] = useState("");

  const { deleteProject } = useDeleteProject();
  const { deleteModal, openDeleteModal } = useDeleteProjectModal(() =>
    deleteProject(project.name)
  );

  const getUrl = useCallback(async () => {
    const response = await getImgUrl(project.imageIds[idx]);
    setUrl(response);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUrl();
  }, [getUrl]);

  return !imageOnly ? (
    <li
      style={{
        position: "relative",
      }}
    >
      <img
        src={url}
        alt={`${project.category} project ${idx + 1}`}
        className={`stand-alone ${className}`}
      />
      {inDashboard && (
        <BsTrash3
          title="Delete project"
          onClick={openDeleteModal}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            fontSize: "1.3rem",
            color: "#d33232c1",
          }}
        />
      )}
      {deleteModal}
    </li>
  ) : (
    <img
      src={url}
      alt={`${project.category} project ${idx + 1}`}
      className={`stand-alone ${className}`}
    />
  );
}
