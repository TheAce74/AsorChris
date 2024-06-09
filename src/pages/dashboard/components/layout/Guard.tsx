import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../../hooks/useToast";
import { account } from "../../../../services/appwrite/appwrite";
import { useAtom } from "jotai";
import { adminAtom } from "../../../../services/jotai/admin";
import { useGetProjects } from "../../../../hooks/useGetProjects";
import { useGetMessages } from "../../../../hooks/useGetMessages";
import Loader from "../../../../components/layout/Loader";

type GuardProps = {
  children: ReactNode;
};

export default function Guard({ children }: GuardProps) {
  const navigate = useNavigate();
  const { customToast } = useToast();
  const [admin, setAdmin] = useAtom(adminAtom);
  const { getProjects } = useGetProjects();
  const { getMessages } = useGetMessages();

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
        await getMessages();
      } catch (error) {
        customToast(error as string, { type: "error" });
        navigate("/login", { replace: true });
      }
    };
    getAdmin();
  }, [navigate, customToast, setAdmin, getProjects, getMessages]);

  if (admin.name) {
    return <>{children}</>;
  } else {
    return <Loader />;
  }
}
