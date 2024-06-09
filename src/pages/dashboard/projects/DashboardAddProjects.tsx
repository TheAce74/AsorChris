import styled from "styled-components";
import { useHeading } from "../components/layout/DashboardWrapper";
import { useLayoutEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FileInput, NativeSelect, TextInput, Textarea } from "@mantine/core";
import { AddProjectInputs } from "../../../utils/types";
import { addProjectSchema } from "../../../utils/schema";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { LuUploadCloud } from "react-icons/lu";
import { useAddProject } from "../../../hooks/useAddProject";

const projectOptions = [
  "Project category",
  "UI/UX",
  "Brand Identity Design",
  "Logo Design",
  "Flyer Designs",
];

export default function DashboardAddProjects() {
  const { setHeading } = useHeading();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    setHeading("Add new project");
  }, [setHeading]);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddProjectInputs>({
    resolver: yupResolver(addProjectSchema),
    defaultValues: {
      category: "Project category",
      name: "",
      description: "",
      client: "",
      duration: "",
      link: "",
      images: [],
    },
  });

  const { addProject, uploading } = useAddProject();

  const onSubmit = async (data: AddProjectInputs) => {
    const success = await addProject(data);
    if (success) {
      reset();
    }
  };

  return (
    <section>
      <StyledDashboardAddProjects>
        <button className="back" onClick={() => navigate(-1)}>
          <LiaAngleLeftSolid />
        </button>
        <h2>Add new projects</h2>
        <p>Upload new projects</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <NativeSelect
            {...register("category")}
            data={projectOptions}
            error={errors.category?.message}
            size="md"
          />
          <TextInput
            {...register("name")}
            placeholder="Project name"
            error={errors.name?.message}
            size="md"
          />
          <Textarea
            {...register("description")}
            placeholder="Project description"
            error={errors.description?.message}
            size="md"
          />
          <TextInput
            {...register("client")}
            placeholder="Client"
            error={errors.client?.message}
            size="md"
          />
          <TextInput
            {...register("duration")}
            placeholder="Project duration"
            error={errors.duration?.message}
            size="md"
          />
          <TextInput
            {...register("link")}
            placeholder="Website or mobile app link"
            error={errors.link?.message}
            size="md"
          />
          <Controller
            name="images"
            control={control}
            render={({ field }) => (
              <FileInput
                {...field}
                placeholder="Drag documents here or choose files to upload"
                multiple
                accept="image/jpeg, image/png, image/gif"
                error={errors.images?.message}
                variant="filled"
                size="md"
                leftSection={<LuUploadCloud />}
              />
            )}
          />
          <Button variant="inverted" disabled={uploading}>
            Upload project
          </Button>
        </form>
      </StyledDashboardAddProjects>
    </section>
  );
}

const StyledDashboardAddProjects = styled.div`
  .back {
    background: none;
    border: none;
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 0.4s;
    margin-bottom: 0.5em;

    &:is(:hover, :focus-visible) {
      color: var(--clr-primary-400);
    }
  }

  form {
    max-width: 35rem;
  }

  input,
  select,
  textarea {
    margin-top: 1.5em;
  }

  form button {
    margin-top: 1.5em;
    width: 100%;
  }
`;
