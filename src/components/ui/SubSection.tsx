import styled from "styled-components";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ProjectWithContent from "./ProjectWithContent";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { maxMedia, minMedia } from "../../utils/mediaQueries";
import { Project } from "../../utils/types";
import ProjectWithoutContent from "./ProjectWithoutContent";

type SubSectionProps = {
  headingText1: string;
  headingText2: string;
  viewMore?: string;
  projects: Project[];
};

export default function SubSection({
  headingText1,
  headingText2,
  viewMore,
  projects,
}: SubSectionProps) {
  const perPage =
    projects[0]?.category !== "Brand Identity Design" &&
    projects[0]?.category !== "UI/UX"
      ? [6, 5, 3, 1]
      : [4, 3, 2, 1];

  return (
    <StyledSubSection>
      {projects.length > 0 && (
        <>
          <div className="flex top">
            <h3>
              <span>{headingText1} </span>
              <span>- {headingText2}</span>
            </h3>
            {viewMore && (
              <Link to={viewMore} className="link">
                See all
              </Link>
            )}
          </div>
          {viewMore ? (
            <Splide
              aria-label={`${headingText2} projects`}
              options={{
                rewind: true,
                rewindByDrag: true,
                gap: "3rem",
                autoplay: true,
                perPage: perPage[0],
                pauseOnHover: true,
                pauseOnFocus: true,
                reducedMotion: {
                  autoplay: false,
                },
                breakpoints: {
                  1670: {
                    perPage: perPage[1],
                  },
                  1270: {
                    perPage: perPage[2],
                  },
                  860: {
                    perPage: perPage[3],
                  },
                },
                classes: {
                  arrow: "splide__arrow arrows",
                  pagination: "splide__pagination pagination",
                  page: "splide__pagination__page page",
                },
              }}
            >
              {projects.map((project, idx) =>
                project?.category !== "Brand Identity Design" &&
                project?.category !== "UI/UX" ? (
                  <SplideSlide key={uuidv4()}>
                    <ProjectWithoutContent
                      idx={idx}
                      project={project}
                      className="grab"
                    />
                  </SplideSlide>
                ) : (
                  <SplideSlide key={uuidv4()}>
                    <ProjectWithContent
                      label={`${headingText2} project ${idx + 1}`}
                      className="grab"
                      project={project}
                      idx={idx}
                    />
                  </SplideSlide>
                )
              )}
            </Splide>
          ) : (
            <ul
              role="list"
              aria-label={`${headingText2} projects`}
              className={`${
                projects[0]?.category !== "Brand Identity Design" &&
                projects[0]?.category !== "UI/UX"
                  ? "grid-flexible-images"
                  : "three-cols"
              } grid-flexible`}
            >
              {projects.map((project, idx) =>
                project.category !== "Brand Identity Design" &&
                project.category !== "UI/UX" ? (
                  <li key={uuidv4()}>
                    <ProjectWithoutContent idx={idx} project={project} />
                  </li>
                ) : (
                  <li key={uuidv4()}>
                    <ProjectWithContent
                      label={`${headingText2} project ${idx + 1}`}
                      project={project}
                      idx={idx}
                    />
                  </li>
                )
              )}
            </ul>
          )}
        </>
      )}
    </StyledSubSection>
  );
}

const StyledSubSection = styled.div`
  &:not(:last-child) {
    margin-bottom: 6em;
  }

  .top {
    margin-bottom: 1.5em;
  }

  h3 span:last-child {
    color: var(--clr-primary-400);
  }

  .top a {
    font-weight: 600;
    color: var(--clr-primary-400);
    transition: color 0.3s;
    font-size: 1.2rem;

    &:is(:hover, :focus-visible) {
      color: var(--clr-accent-400);
    }
  }

  .arrows {
    background-color: var(--clr-primary-400);
  }

  .pagination {
    bottom: -3em;
  }

  .page {
    background-color: var(--clr-primary-300);

    &.is-active {
      background-color: var(--clr-primary-400);
    }
  }

  .grid-flexible-images {
    --min-col-width: 300px;
  }

  ${maxMedia(
    "sm",
    `
      &:not(:last-child) {
        margin-bottom: 5em;
      }
    `
  )}

  ${minMedia(
    "lg",
    `
     .three-cols {
      grid-template-columns: repeat(3, 1fr)
     }

     .grid-flexible-images {
      grid-template-columns: repeat(5, 1fr)
     }
    `
  )}
`;
