import styled from "styled-components";
import Section from "../../../components/ui/Section";
import aboutImage from "../../../assets/aboutImage.png";
import { maxMedia } from "../../../utils/mediaQueries";

export default function About() {
  return (
    <Section id="about" heading="About me">
      <StyledAbout>
        <p>
          Welcome to the intersection of aesthetics and functionality. I'm Asor
          Christopher a UI/UX designer dedicated to transforming user needs into
          intuitive, impactful digital experiences. Explore my journey through
          design, where every pixel tells a story.
        </p>
        <img
          src={aboutImage}
          alt="Asor Christopher"
          width="450px"
          height="350px"
        />
      </StyledAbout>
    </Section>
  );
}

const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5em;

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
