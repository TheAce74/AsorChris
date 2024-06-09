import styled from "styled-components";
import Section from "../../../components/ui/Section";
import { Project } from "../../../utils/types";

type IntroProps = {
  project: Project;
  projectType: string;
};

export default function Intro({ project, projectType }: IntroProps) {
  return (
    <Section id="project" heading={projectType + " Project"}>
      <StyledIntro>
        <h3 aria-label="project title">{project.name}</h3>
        <p aria-label="project description">{project.description}</p>
        <ol aria-label="project details" role="list">
          <li className="flex">
            <strong>Project Name: </strong>
            <p>{project.name}</p>
          </li>
          <li className="flex">
            <strong>Client: </strong>
            <p>{project.client}</p>
          </li>
          <li className="flex">
            <strong>Duration: </strong>
            <p>{project.duration}</p>
          </li>
          <li className="flex">
            <strong>Website or App link: </strong>
            <a href={project.link} target="_blank">
              {project.link}
            </a>
          </li>
        </ol>
      </StyledIntro>
    </Section>
  );
}

const StyledIntro = styled.div`
  h3 {
    font-size: 1.6rem;
    margin-bottom: 0.7em;
  }

  > p {
    margin-bottom: 2em;
    line-height: 1.8;
  }

  .flex {
    justify-content: start;
    gap: 0.5em;
    margin-bottom: 0.5em;
  }

  a {
    transition: color 0.3s;

    &:is(:hover, :focus-visible) {
      color: var(--clr-primary-400);
    }
  }
`;
