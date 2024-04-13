import styled from "styled-components";
import { ProjectWithContentType } from "../../utils/types";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaAngleRight } from "react-icons/fa6";

type ProjectWithContentProps = ProjectWithContentType & {
  label: string;
  className?: string;
};

export default function ProjectWithContent({
  image,
  title,
  text,
  linkText,
  linkPath,
  label,
  className,
}: ProjectWithContentProps) {
  return (
    <StyledProjectWithContent aria-label={label} className={className}>
      <img src={image} alt="" />
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
        <Link to={linkPath} className="link">
          <Button>
            <span>{linkText}</span>
            <FaAngleRight />
          </Button>
        </Link>
      </div>
    </StyledProjectWithContent>
  );
}

const StyledProjectWithContent = styled.div`
  background-color: var(--clr-primary-200);
  border-radius: 0.7em;

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
    }

    a {
      display: block;
      width: max-content;
    }
  }
`;
