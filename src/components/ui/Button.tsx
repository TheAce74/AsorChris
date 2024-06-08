import styled, { css } from "styled-components";

const Button = styled.button<{
  variant?: "primary" | "accent" | "inverted";
}>`
  --bg: transparent;
  --text: var(--clr-primary-400);
  --border: var(--clr-primary-400);

  display: flex;
  gap: 0.6em;
  align-items: center;
  justify-content: center;
  background-color: var(--bg);
  color: var(--text);
  border: 2px solid var(--border);
  padding: 0.7em 1.3em;
  cursor: pointer;
  border-radius: 0.5em;
  font-weight: 600;
  transition: all 0.3s;

  svg {
    margin-top: 3px;
  }

  &:is(:hover, :focus-visible) {
    --bg: var(--clr-primary-400);
    --text: var(--clr-neutral-100);
  }

  &:active {
    scale: 0.95;
  }

  ${({ variant }) =>
    variant === "accent"
      ? css`
          --bg: var(--clr-accent-400);
          --text: var(--clr-neutral-100);
          --border: var(--clr-accent-400);

          &:is(:hover, :focus-visible) {
            --bg: var(--clr-accent-400);
            filter: brightness(0.95);
          }
        `
      : variant === "inverted"
      ? css`
          --bg: var(--clr-primary-400);
          --text: var(--clr-neutral-100);
          --border: var(--clr-primary-400);

          &:is(:hover, :focus-visible) {
            --bg: var(--clr-primary-400);
            filter: brightness(0.95);
          }
        `
      : ""}
`;

export default Button;
