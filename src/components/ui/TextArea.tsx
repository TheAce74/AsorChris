import { TextareaHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { ContactInputs, KeysOfType } from "../../utils/types";

type RHF<T extends Record<string, unknown>> = {
  label: KeysOfType<T>;
  register: UseFormRegister<T>;
};

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  RHF<ContactInputs>;

export default function TextArea({
  label,
  register,
  cols,
  rows,
  ...otherProps
}: TextAreaProps) {
  return (
    <StyledTextArea
      cols={Number(cols) | 30}
      rows={Number(rows) | 10}
      {...register(label)}
      {...otherProps}
    ></StyledTextArea>
  );
}

const StyledTextArea = styled.textarea`
  width: 100%;
  border: 2px solid var(--clr-primary-300);
  border-radius: 0.5em;
  padding: 1rem 1.5rem;
  resize: none;

  &[aria-invalid="true"] {
    border-color: var(--clr-accent-400);
  }
`;
