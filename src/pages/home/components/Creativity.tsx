import styled from "styled-components";
import { maxMedia } from "../../../utils/mediaQueries";

export default function Creativity() {
  return (
    <StyledCreativity>
      <p>Creativity that goes beyond functionalities</p>
    </StyledCreativity>
  );
}

const StyledCreativity = styled.div`
  background-color: var(--clr-primary-200);
  color: var(--clr-primary-400);
  padding: 2em 4em;
  text-align: center;

  p {
    font-weight: 900;
    font-size: 1.6rem;
  }

  ${maxMedia(
    "sm",
    `
        padding-inline: 1em;

        p {
            font-size: 1.4rem;
        }
    `
  )}
`;
