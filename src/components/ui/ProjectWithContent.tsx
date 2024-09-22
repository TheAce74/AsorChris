import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaAngleRight } from "react-icons/fa6";
import { Project } from "../../utils/types";
import { useGetImageUrl } from "../../hooks/useGetImageUrl";
import { useCallback, useEffect, useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { useDeleteProject } from "../../hooks/useDeleteProject";
import { useDeleteProjectModal } from "../../hooks/useDeleteProjectModal";

type ProjectWithContentProps = {
  label: string;
  project: Project;
  idx: number;
  className?: string;
  inDashboard?: boolean;
};

export default function ProjectWithContent({
  label,
  className,
  project,
  idx,
  inDashboard,
}: ProjectWithContentProps) {
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

  return (
    <StyledProjectWithContent aria-label={label} className={className}>
      <span>
        <img src={url} alt="" />
        {inDashboard && (
          <BsTrash3 title="Delete project" onClick={openDeleteModal} />
        )}
      </span>
      <div>
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        <Link
          to={`/projects/${project.name}?type=${project.category}`}
          className="link"
        >
          <Button>
            <span>View project</span>
            <FaAngleRight />
          </Button>
        </Link>
      </div>
      {deleteModal}
    </StyledProjectWithContent>
  );
}

const StyledProjectWithContent = styled.div`
  background-color: var(--clr-primary-200);
  border-radius: 0.7em;
  height: 23rem;

  span {
    display: block;
    position: relative;

    svg {
      cursor: pointer;
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      font-size: 1.3rem;
      color: #d33232c1;
    }
  }

  img {
    width: 100%;
    height: 9em;
    object-fit: cover;
    object-position: center;
    border-radius: 0.7em 0.7em 0 0;
  }

  div {
    padding: 2em 3em;

    h4 {
      font-size: 1.3rem;
      margin-bottom: 0.5em;
    }

    p {
      margin-bottom: 1em;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    a {
      display: block;
      width: max-content;
    }
  }
`;
