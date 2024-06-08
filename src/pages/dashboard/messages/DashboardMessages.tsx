import { useLayoutEffect } from "react";
import { useHeading } from "../components/layout/DashboardWrapper";
import styled from "styled-components";
import MessageBox from "../components/ui/MessageBox";

export default function DashboardMessages() {
  const { setHeading } = useHeading();

  useLayoutEffect(() => {
    setHeading("Messages");
  }, [setHeading]);

  return (
    <section>
      <StyledDashboardMessages>
        <h3 className="info-heading">New</h3>
        <MessageBox />
        <MessageBox />
        <h3 className="info-heading">Last 7 days</h3>
        <MessageBox />
        <MessageBox />
        <h3 className="info-heading">Earlier</h3>
        <MessageBox />
        <MessageBox />
      </StyledDashboardMessages>
    </section>
  );
}

const StyledDashboardMessages = styled.div`
  .info-heading {
    margin-block: 1.5em 1em;
  }
`;
