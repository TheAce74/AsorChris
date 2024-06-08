import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
} from "@mantine/core";
import classes from "./Login.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginInputs } from "../../utils/types";
import { loginSchema } from "../../utils/schema";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { login, isLoggingIn } = useLogin();

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    await login(data.password, data.email);
  };

  return (
    <Container
      size={420}
      style={{
        display: "grid",
        height: "100dvh",
        placeContent: "center",
        placeItems: "center",
      }}
    >
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>

      <Paper
        withBorder
        component="form"
        shadow="md"
        p={30}
        mt={30}
        radius="md"
        style={{
          width: "min(90dvw, 25rem)",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          {...register("email")}
          error={errors.email?.message}
          label="Email"
          placeholder="you@gmail.com"
          withAsterisk
        />
        <PasswordInput
          {...register("password")}
          error={errors.password?.message}
          label="Password"
          placeholder="Your password"
          withAsterisk
          mt="md"
        />
        <Button fullWidth mt="xl" type="submit" disabled={isLoggingIn}>
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
