import styled from "styled-components";
import { maxMedia } from "../../utils/mediaQueries";
import { ReactNode } from "react";

type SectionProps = {
  id: string;
  heading: string;
  children: ReactNode;
};

export default function Section({ id, heading, children }: SectionProps) {
  return (
    <StyledSection id={id}>
      <h2>{heading}</h2>
      {children}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  padding: 4em;
  min-height: 50dvh;

  h2 {
    font-weight: 900;
    border-bottom: 5px solid var(--clr-accent-400);
    width: max-content;
    line-height: 0.8;
    margin-bottom: 2em;
  }

  ${maxMedia(
    "sm",
    `
    padding: 2em 1em;

    h2 {
      margin-bottom: 1em;
    }
  `
  )}
`;
