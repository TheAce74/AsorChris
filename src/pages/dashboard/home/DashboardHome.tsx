import { useLayoutEffect } from "react";
import { useHeading } from "../components/layout/DashboardWrapper";
import { PiPackageFill } from "react-icons/pi";
import styled from "styled-components";
import MessageBox from "../components/ui/MessageBox";
import { v4 as uuidv4 } from "uuid";
import { useAtomValue } from "jotai";
import { projectsAtom } from "../../../services/jotai/projects";
import { getCount, getKeys, groupProjects } from "../../../utils/functions";
import { messagesAtom } from "../../../services/jotai/messages";
import ProjectWithoutContent from "../../../components/ui/ProjectWithoutContent";
import ProjectWithContent from "../../../components/ui/ProjectWithContent";
import { minMedia } from "../../../utils/mediaQueries";

export default function DashboardHome() {
  const { setHeading } = useHeading();
  const projects = useAtomValue(projectsAtom);
  const messages = useAtomValue(messagesAtom);

  const grouped = groupProjects(projects);
  const projectsKeys = getKeys(grouped);

  useLayoutEffect(() => {
    setHeading("Dashboard");
  }, [setHeading]);

  return (
    <section>
      <StyledDashboardHome>
        <div className="grid-flexible">
          <div className="flex">
            <span>
              <PiPackageFill />
            </span>
            <div>
              <h4>{projects.length.toString().padStart(2, "0")}</h4>
              <p>Projects published</p>
            </div>
          </div>
          <div className="flex">
            <span>
              <PiPackageFill />
            </span>
            <div>
              <h4>{getCount(projects, "UI/UX").padStart(2, "0")}</h4>
              <p>UI/UX projects</p>
            </div>
          </div>
          <div className="flex">
            <span>
              <PiPackageFill />
            </span>
            <div>
              <h4>{getCount(projects, "Flyer Designs").padStart(2, "0")}</h4>
              <p>Flyer designs</p>
            </div>
          </div>
          <div className="flex">
            <span>
              <PiPackageFill />
            </span>
            <div>
              <h4>{getCount(projects, "Logo Design").padStart(2, "0")}</h4>
              <p>Logo designs</p>
            </div>
          </div>
          <div className="flex">
            <span>
              <PiPackageFill />
            </span>
            <div>
              <h4>
                {getCount(projects, "Brand Identity Design").padStart(2, "0")}
              </h4>
              <p>BID designs</p>
            </div>
          </div>
        </div>
        <h2>Recent Activities</h2>
        {messages.length === 0 && projects.length === 0 ? (
          <p className="no-info">No activity to display</p>
        ) : (
          <div>
            {messages.slice(0, 6).map((message) => (
              <>
                <h3 className="info-heading">New messages</h3>
                <MessageBox key={message.id} message={message} />
              </>
            ))}
            {projects.length !== 0 && (
              <>
                <h3 className="info-heading">Uploaded new projects</h3>
                {projectsKeys.map((key) => (
                  <>
                    {grouped[key].length > 0 && <h3 className="mb-2">{key}</h3>}
                    <ul
                      role="list"
                      aria-label={`${key} projects`}
                      className={`${
                        key !== "Brand Identity Design" && key !== "UI/UX"
                          ? "grid-flexible-content"
                          : "three-cols"
                      } grid-flexible`}
                    >
                      {grouped[key]
                        .reverse()
                        .slice(0, 6)
                        .map((project, idx) =>
                          key !== "Brand Identity Design" && key !== "UI/UX" ? (
                            <ProjectWithoutContent
                              key={uuidv4()}
                              idx={idx}
                              project={project}
                            />
                          ) : (
                            <li key={uuidv4()}>
                              <ProjectWithContent
                                label={`${project.category} project ${idx + 1}`}
                                idx={idx}
                                project={project}
                              />
                            </li>
                          )
                        )}
                    </ul>
                  </>
                ))}
              </>
            )}
          </div>
        )}
      </StyledDashboardHome>
    </section>
  );
}

const StyledDashboardHome = styled.div`
  .grid-flexible {
    --min-col-width: 220px;
    --gap: 1em;

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

  .no-info {
    padding-block: 6em;
    text-align: center;
  }

  .info-heading {
    margin-block: 1.5em 1em;
  }

  .mb-2 {
    margin-bottom: 0.5em;
  }

  ${minMedia(
    "lg",
    `
     .three-cols {
      grid-template-columns: repeat(3, 1fr)
     }

     .grid-flexible-content {
      grid-template-columns: repeat(4, 1fr)
     }
    `
  )}
`;
