import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useToast } from "./useToast";
import styled from "styled-components";
import { minMedia } from "../utils/mediaQueries";
import { useState } from "react";
import { account } from "../services/appwrite/appwrite";

function useLogout() {
  const [opened, { open, close }] = useDisclosure(false);
  const { customToast } = useToast();
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const logout = async () => {
    setIsLoggingOut(true);
    try {
      await account.deleteSession("current");
      customToast("Logged out successfully");
      navigate("/login", { replace: true });
    } catch (error) {
      customToast(error as string, { type: "error" });
    } finally {
      setIsLoggingOut(false);
    }
  };

  return {
    openLogoutModal: open,
    logoutModal: (
      <Modal opened={opened} onClose={close} withCloseButton={false} centered>
        <StyledLogout>
          <h3>Are you sure you want to logout?</h3>
          <div>
            <Button onClick={logout} disabled={isLoggingOut}>
              Logout
            </Button>
            <Button onClick={close} variant="inverted">
              Cancel
            </Button>
          </div>
        </StyledLogout>
      </Modal>
    ),
  };
}

export { useLogout };

const StyledLogout = styled.div`
  display: grid;
  place-content: center;
  gap: 1rem;
  text-align: center;
  padding: 2rem;

  h3 {
    margin-bottom: 1.5em;
    font-weight: 600;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }

  ${minMedia(
    "sm",
    `
    div {
        gap: 5em;
    }
  `
  )}
`;
