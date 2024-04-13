import styled from "styled-components";
import { ProjectWithContentType } from "../../utils/types";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ProjectWithContent from "./ProjectWithContent";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { maxMedia } from "../../utils/mediaQueries";

type SubSectionProps = {
  headingText1: string;
  headingText2: string;
  viewMore?: string;
  data: string[] | ProjectWithContentType[];
};

export default function SubSection({
  headingText1,
  headingText2,
  viewMore,
  data,
}: SubSectionProps) {
  const perPage = typeof data[0] === "string" ? [6, 5, 3, 1] : [4, 3, 2, 1];

  return (
    <StyledSubSection>
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
          {data.map((datum, idx) =>
            typeof datum === "string" ? (
              <SplideSlide key={uuidv4()}>
                <img
                  src={datum}
                  alt={`${headingText2} project ${idx + 1}`}
                  className="stand-alone grab"
                />
              </SplideSlide>
            ) : (
              <SplideSlide key={uuidv4()}>
                <ProjectWithContent
                  label={`${headingText2} project ${idx + 1}`}
                  className="grab"
                  {...datum}
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
            typeof data[0] === "string" && "grid-flexible-images"
          } grid-flexible`}
        >
          {data.map((datum, idx) =>
            typeof datum === "string" ? (
              <li key={uuidv4()}>
                <img
                  src={datum}
                  alt={`${headingText2} project ${idx + 1}`}
                  className="stand-alone"
                />
              </li>
            ) : (
              <li key={uuidv4()}>
                <ProjectWithContent
                  label={`${headingText2} project ${idx + 1}`}
                  {...datum}
                />
              </li>
            )
          )}
        </ul>
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

  .stand-alone {
    width: min(300px, 100%);
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    margin-inline: auto;
    display: block;
    border-radius: 0.7em;
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
`;
