import styled from "styled-components";
import { useHeading } from "../components/layout/DashboardWrapper";
import { useLayoutEffect } from "react";

export default function DashboardAddProjects() {
  const { setHeading } = useHeading();

  useLayoutEffect(() => {
    setHeading("Add new project");
  }, [setHeading]);

  return (
    <section>
      <StyledDashboardAddProjects></StyledDashboardAddProjects>
    </section>
  );
}

const StyledDashboardAddProjects = styled.div``;
