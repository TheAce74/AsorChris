import { useLayoutEffect } from "react";
import { useHeading } from "../components/layout/DashboardWrapper";
import { PiPackageFill } from "react-icons/pi";
import styled from "styled-components";
import MessageBox from "../components/ui/MessageBox";
import { v4 as uuidv4 } from "uuid";
import project from "../../../assets/featuredProjectsImage2.png";
import { useAtomValue } from "jotai";
import { projectsAtom } from "../../../services/jotai/projects";
import { getCount } from "../../../utils/functions";

export default function DashboardHome() {
  const { setHeading } = useHeading();
  const projects = useAtomValue(projectsAtom);

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
        {[1].length === 0 ? (
          <p className="no-info">No activity to display</p>
        ) : (
          <div>
            <h3 className="info-heading">New message</h3>
            <MessageBox />
            <h3 className="info-heading">Uploaded new projects</h3>
            <ul role="list" className="grid-flexible">
              {[1, 2, 3, 4].map(() => (
                <li key={uuidv4()}>
                  <img src={project} className="stand-alone" alt="" />
                </li>
              ))}
            </ul>
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
`;
