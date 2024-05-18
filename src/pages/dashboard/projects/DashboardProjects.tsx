import { useLayoutEffect } from "react";
import { useHeading } from "../components/layout/DashboardWrapper";
import styled from "styled-components";
import { PiPackageFill } from "react-icons/pi";
import { allProjects } from "../../../data/allProjects";
import ProjectWithContent from "../../../components/ui/ProjectWithContent";
import { v4 as uuidv4 } from "uuid";
import Button from "../../../components/ui/Button";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function DashboardProjects() {
  const { setHeading } = useHeading();

  useLayoutEffect(() => {
    setHeading("Projects");
  }, [setHeading]);

  return (
    <section>
      <StyledDashboardProjects>
        <div className="grid-flexible">
          <div className="flex">
            <span>
              <PiPackageFill />
            </span>
            <div>
              <h4>34</h4>
              <p>Projects published</p>
            </div>
          </div>
          <div className="flex">
            <span>
              <PiPackageFill />
            </span>
            <div>
              <h4>06</h4>
              <p>UI/UX projects</p>
            </div>
          </div>
          <div className="flex">
            <span>
              <PiPackageFill />
            </span>
            <div>
              <h4>19</h4>
              <p>Flyer designs</p>
            </div>
          </div>
          <div className="flex">
            <span>
              <PiPackageFill />
            </span>
            <div>
              <h4>06</h4>
              <p>Logo designs</p>
            </div>
          </div>
          <div className="flex">
            <span>
              <PiPackageFill />
            </span>
            <div>
              <h4>03</h4>
              <p>BID designs</p>
            </div>
          </div>
        </div>
        <div className="flex top">
          <h2>Recent uploaded projects</h2>
          <Link to="/admin/projects/add" className="link">
            <Button>
              <FaPlus />
              <span>Add new project</span>
            </Button>
          </Link>
        </div>
        {allProjects.map((project, idx) => (
          <ul
            role="list"
            aria-label={`${project.type} projects`}
            className={`${
              typeof project.data[0] !== "string" && "grid-flexible-content"
            } grid-flexible`}
          >
            {project.data.map((datum) =>
              typeof datum === "string" ? (
                <li key={uuidv4()}>
                  <img
                    src={datum}
                    alt={`${project.type} project ${idx + 1}`}
                    className="stand-alone"
                  />
                </li>
              ) : (
                <li key={uuidv4()}>
                  <ProjectWithContent
                    label={`${project.type} project ${idx + 1}`}
                    {...datum}
                  />
                </li>
              )
            )}
          </ul>
        ))}
      </StyledDashboardProjects>
    </section>
  );
}

const StyledDashboardProjects = styled.div`
  .grid-flexible {
    --min-col-width: 220px;
    --gap: 1em;

    margin-bottom: 2em;
  }

  .grid-flexible-content {
    --min-col-width: 350px;
    --gap: 2em;

    margin-bottom: 2em;
  }

  .grid-flexible > .flex {
    justify-content: start;
    gap: 2em;
    color: var(--clr-neutral-100);
    border-radius: 1em;
    padding: 1.5em 2em;

    &:nth-child(odd) {
      background-color: var(--clr-primary-400);
    }

    &:nth-child(even) {
      background-color: var(--clr-accent-400);
    }

    p {
      font-size: 0.85rem;
    }

    svg {
      font-size: 1.5rem;
      min-width: max-content;
    }

    h4 {
      font-size: 1.8rem;
    }

    span {
      /* From https://css.glass */
      background: rgba(255, 255, 255, 0.45);
      border-radius: 0.2em;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(7.3px);
      -webkit-backdrop-filter: blur(7.3px);
      padding: 0.5em;
    }
  }

  .top {
    margin-bottom: 2.5em;
  }
`;
