import styled from "styled-components";
import { maxMedia } from "../../../utils/mediaQueries";
import { v4 as uuidv4 } from "uuid";
import ProjectWithoutContent from "../../../components/ui/ProjectWithoutContent";
import { Project } from "../../../utils/types";

type InterfaceProps = {
  project: Project;
};

export default function Interface({ project }: InterfaceProps) {
  return (
    <StyledInterface>
      <h2>Interface design</h2>
      <div>
        {project.imageIds.map((_, idx) => (
          <ProjectWithoutContent
            idx={idx}
            project={project}
            key={uuidv4()}
            imageOnly
          />
        ))}
      </div>
    </StyledInterface>
  );
}

const StyledInterface = styled.section`
  padding: 0em 4em 4em 4em;
  min-height: 50dvh;

  h2 {
    margin-bottom: 2em;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;

    img {
      width: 100%;
      aspect-ratio: 6 / 5;
      border-radius: 1em;
      object-fit: cover;
      object-position: center;
    }

    *:nth-child(3n) {
      grid-column: 1 / -1;
    }
  }

  ${maxMedia(
    "sm",
    `
    padding-inline: 1em;

    h2 {
      margin-bottom: 1em;
    }
  `
  )}
`;
