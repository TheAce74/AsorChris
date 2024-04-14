import styled from "styled-components";
import Section from "./Section";
import Input from "./Input";
import { HiOutlineUser } from "react-icons/hi2";
import { GoMail } from "react-icons/go";
import TextArea from "./TextArea";
import Button from "./Button";
import { FaAngleRight } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../utils/schema";
import { ContactInputs } from "../../utils/types";
import { maxMedia } from "../../utils/mediaQueries";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactInputs>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <StyledContactSection>
      <Section id="contact" heading="Get in touch with me">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>
            Ready to talk about your next project? Fill out the form below and
            let&apos;s get into it!
          </p>
          <div className="flex">
            <div>
              <Input
                placeholder="Enter your name"
                icon={<HiOutlineUser />}
                label="name"
                register={register}
                aria-invalid={errors.name ? true : false}
              />
              {errors.name && <p role="alert">{errors.name.message}</p>}
            </div>
            <div>
              <Input
                placeholder="Enter your email"
                icon={<GoMail />}
                label="email"
                register={register}
                aria-invalid={errors.email ? true : false}
              />
              {errors.email && <p role="alert">{errors.email.message}</p>}
            </div>
          </div>
          <div className="txt">
            <TextArea
              placeholder="Type your message"
              label="message"
              register={register}
              aria-invalid={errors.message ? true : false}
            />
            {errors.message && <p role="alert">{errors.message.message}</p>}
          </div>
          <Button variant="inverted">
            <span>Send message</span>
            <FaAngleRight />
          </Button>
        </form>
      </Section>
    </StyledContactSection>
  );
}

const StyledContactSection = styled.div`
  form {
    width: min(100%, 65em);
    margin-top: -1em;

    > p {
      margin-bottom: 1.5em;
    }

    > .flex {
      justify-content: start;
      flex-wrap: wrap;
      gap: 2.5em;
      margin-bottom: 2.5em;

      > * {
        flex: 1;
        min-width: 28ch;
      }
    }

    .txt {
      margin-bottom: 2.5em;
    }

    > .flex p,
    .txt p {
      color: var(--clr-accent-400);
      margin-left: 0.5em;
      margin-top: 0.5em;
      font-size: 0.9rem;
    }
  }

  ${maxMedia(
    "sm",
    `
    form {
      margin-top: -0.5em;

      > .flex {
        margin-bottom: 1.5em;
        gap: 1.5em;
      }

      .txt {
        margin-bottom: 1.5em;
      }
    }
  `
  )}
`;
