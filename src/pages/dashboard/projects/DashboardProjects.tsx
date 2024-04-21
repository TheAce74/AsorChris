import { useLayoutEffect } from "react";
import { useHeading } from "../components/layout/DashboardWrapper";

export default function DashboardProjects() {
  const { setHeading } = useHeading();

  useLayoutEffect(() => {
    setHeading("Projects");
  }, [setHeading]);

  return (
    <section>
      <div>
        <h1>Projects</h1>
      </div>
    </section>
  );
}
