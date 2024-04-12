import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { HomeService } from "../../utils/types";
import { maxMedia } from "../../utils/mediaQueries";

type ServiceProps = HomeService;

export default function Service({
  id,
  image,
  title,
  text,
  linkText,
  linkPath,
}: ServiceProps) {
  return (
    <StyledService id={id} className="flex">
      <div>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <Link to={linkPath} className="link">
        <Button>{linkText}</Button>
      </Link>
    </StyledService>
  );
}

const StyledService = styled.div`
  box-shadow: 0px 0px 2px var(--clr-neutral-400);
  padding: 2em;
  border-radius: 1em;
  flex-direction: column;
  align-items: start;
  gap: 0;

  &:target {
    outline: 2px solid var(--clr-primary-400);
  }

  h3 {
    margin-block: 0.8em;
  }

  p {
    margin-bottom: 1.3em;
  }

  a {
    display: block;
    max-width: max-content;
  }

  ${maxMedia(
    "sm",
    `
    img {
        width: 6em;
    }
  `
  )}
`;
