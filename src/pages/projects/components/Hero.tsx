import styled from "styled-components";
import Section from "../../../components/ui/Section";
import image from "../../../assets/aboutImage.png";
import { maxMedia } from "../../../utils/mediaQueries";

export default function Hero() {
  return (
    <Section heading="My projects" id="projects-hero">
      <StyledHero>
        <p>
          Welcome to the intersection of aesthetics and functionality. I&apos;m
          Asor Christopher a UI/UX designer dedicated to transforming user needs
          into intuitive, impactful digital experiences. Explore my journey
          through design, where every pixel tells a story. Welcome to the
          intersection of aesthetics and functionality. I&apos;m Asor
          Christopher a UI/UX designer dedicated to transforming user needs into
          intuitive, impactful digital experiences. Explore my journey through
          design, where every pixel tells a story. Welcome to the intersection
          of aesthetics and functionality. I&apos;m Asor Christopher a UI/UX
          designer dedicated to transforming user needs into intuitive,
          impactful digital experiences. Explore my journey through design,
          where every pixel tells a story.
        </p>
        <img src={image} alt="" width="450px" height="350px" />
      </StyledHero>
    </Section>
  );
}

const StyledHero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5em;
  align-items: center;

  p {
    line-height: 2;
  }

  img {
    margin-inline: auto;
    border-radius: 1em;
  }

  ${maxMedia(
    1000,
    `
    grid-template-columns: 1fr;
    gap: 2em;
    `
  )}
`;
