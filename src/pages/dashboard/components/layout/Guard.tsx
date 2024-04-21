import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const user = {
  role: "admin",
};

type GuardProps = {
  children: ReactNode;
};

export default function Guard({ children }: GuardProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.role) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  if (user.role) {
    return <>{children}</>;
  }
}
