import { useCallback, useEffect, useState } from "react";
import { useGetImageUrl } from "../../hooks/useGetImageUrl";
import { Project } from "../../utils/types";

type ProjectWithoutContentProps = {
  project: Project;
  idx: number;
  className?: string;
  imageOnly?: boolean;
};

export default function ProjectWithoutContent({
  project,
  idx,
  className,
  imageOnly,
}: ProjectWithoutContentProps) {
  const { getImgUrl } = useGetImageUrl();
  const [url, setUrl] = useState("");

  const getUrl = useCallback(async () => {
    const response = await getImgUrl(project.imageIds[idx]);
    setUrl(response);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUrl();
  }, [getUrl]);

  return !imageOnly ? (
    <li>
      <img
        src={url}
        alt={`${project.category} project ${idx + 1}`}
        className={`stand-alone ${className}`}
      />
    </li>
  ) : (
    <img
      src={url}
      alt={`${project.category} project ${idx + 1}`}
      className={`stand-alone ${className}`}
    />
  );
}
