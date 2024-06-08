import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../../hooks/useToast";
import { account } from "../../../../services/appwrite/appwrite";
import { useAtom } from "jotai";
import { adminState } from "../../../../services/jotai/admin";
import { LoadingOverlay } from "@mantine/core";
import { useGetProjects } from "../../../../hooks/useGetProjects";

type GuardProps = {
  children: ReactNode;
};

export default function Guard({ children }: GuardProps) {
  const navigate = useNavigate();
  const { customToast } = useToast();
  const [admin, setAdmin] = useAtom(adminState);
  const { getProjects } = useGetProjects();

  useEffect(() => {
    const getAdmin = async () => {
      try {
        const res = await account.get();
        setAdmin({
          name: res.name,
          email: res.email,
          id: res.$id,
        });
        await getProjects(res.$id);
      } catch (error) {
        customToast(error as string, { type: "error" });
        navigate("/login", { replace: true });
      }
    };
    getAdmin();
  }, [navigate, customToast, setAdmin, getProjects]);

  if (admin.name) {
    return <>{children}</>;
  } else {
    return (
      <LoadingOverlay
        visible
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
    );
  }
}
