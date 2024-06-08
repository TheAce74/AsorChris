import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../services/appwrite/appwrite";
import { useToast } from "./useToast";

function useLogin() {
  const { customToast } = useToast();
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const login = async (password: string, email: string) => {
    setIsLoggingIn(true);
    try {
      await account.createEmailPasswordSession(email, password);
      customToast("Logged in successfully");
      navigate("/admin");
    } catch (error) {
      customToast(error as string, { type: "error" });
    } finally {
      setIsLoggingIn(false);
    }
  };

  return { login, isLoggingIn };
}

export { useLogin };
