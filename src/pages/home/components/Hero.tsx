import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { FaAngleRight } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import styled from "styled-components";
import { maxMedia } from "../../../utils/mediaQueries";
import resume from "../../../assets/resume.pdf";

export default function Hero() {
  return (
    <StyledHero id="hero">
      <h1>Creating sleek interfaces one pixel at a time</h1>
      <p>
        Welcome to the intersection of aesthetics and functionality. I'm Asor
        Christopher a UI/UX designer dedicated to transforming user needs into
        intuitive, impactful digital experiences. Explore my journey through
        design, where every pixel tells a story.
      </p>
      <div className="flex">
        <Link to="/projects" className="link">
          <Button variant="accent">
            <span>See my work</span>
            <FaAngleRight />
          </Button>
        </Link>
        <a
          href={resume}
          className="link"
          download="Asor Christopher's Resume"
        >
          <Button variant="accent">
            <span>Download Resume</span>
            <HiOutlineDownload />
          </Button>
        </a>
      </div>
      <p className="last">Over 10 projects worked on!</p>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  min-height: calc(100dvh - (80 / 16) * 1em);
  background-color: var(--clr-primary-400);
  color: var(--clr-neutral-100);
  display: grid;
  place-items: center;
  place-content: center;
  text-align: center;
  gap: 1.5em;
  padding: 2em 4em;

  h1 {
    font-size: 2.5rem;
  }

  p {
    line-height: 2;
  }

  div {
    gap: 2em;
  }

  .last {
    font-weight: 600;
    font-size: 1.4rem;
  }

  ${maxMedia(
    "sm",
    `
    padding-inline: 1em;
    min-height: 70dvh;

    h1 {
        font-size: 2rem;
    }

    div {
        flex-direction: column-reverse;
        gap: 1.5em;
    }
  `
  )}
`;
