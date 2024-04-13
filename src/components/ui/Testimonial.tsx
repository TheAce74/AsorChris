import styled from "styled-components";
import { initials } from "../../utils/initials";
import { Testimony } from "../../utils/types";

type TestimonialProps = Testimony;

export default function Testimonial({ name, text }: TestimonialProps) {
  return (
    <StyledTestimonial className="grab">
      <div className="flex">
        <span aria-hidden="true" className="flex">
          <span>{initials(name)}</span>
        </span>
        <h3>{name}</h3>
      </div>
      <p>{text}</p>
    </StyledTestimonial>
  );
}

const StyledTestimonial = styled.div`
  border-radius: 0.7em;
  background-color: var(--clr-accent-200);
  padding: 2em 3em;

  div.flex {
    justify-content: start;
    margin-bottom: 1em;
  }

  [aria-hidden="true"] {
    background-color: var(--clr-accent-400);
    color: var(--clr-neutral-100);
    width: 3em;
    aspect-ratio: 1;
    border-radius: 50%;
    font-weight: 900;
    justify-content: center;
    text-transform: uppercase;
  }

  h3 {
    text-transform: capitalize;
  }
`;
