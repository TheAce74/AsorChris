import { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { ContactInputs, KeysOfType } from "../../utils/types";
import { UseFormRegister } from "react-hook-form";

type RHF<T extends Record<string, unknown>> = {
  label: KeysOfType<T>;
  register: UseFormRegister<T>;
};

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  RHF<ContactInputs> & {
    icon?: ReactNode;
  };

export default function Input({
  icon,
  label,
  register,
  ...otherProps
}: InputProps) {
  return (
    <StyledInput>
      <input {...register(label)} {...otherProps} />
      {icon}
    </StyledInput>
  );
}

const StyledInput = styled.div`
  position: relative;

  input {
    width: 100%;
    border: 2px solid var(--clr-primary-300);
    border-radius: 0.5em;
    padding: 1rem 1.5rem;

    &[aria-invalid="true"] {
      border-color: var(--clr-accent-400);
    }
  }

  svg {
    position: absolute;
    right: 1.5rem;
    color: var(--clr-neutral-400);
    top: 50%;
    translate: 0 -50%;
    font-size: 1.3rem;
  }
`;
