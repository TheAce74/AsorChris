import { Outlet, useOutletContext } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { useState } from "react";
import { DashboardHeaderText } from "../../../../utils/types";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { maxMedia } from "../../../../utils/mediaQueries";

export default function DashboardWrapper() {
  const [openMenu, setOpenMenu] = useState(false);
  const [heading, setHeading] = useState<DashboardHeaderText>("Dashboard");

  return (
    <StyledDashboardWrapper>
      <DashboardSidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div>
        <DashboardHeader
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          heading={heading}
        />
        <Outlet context={{ setHeading }} />
      </div>
    </StyledDashboardWrapper>
  );
}

const StyledDashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  min-height: 100dvh;

  section {
    padding: 2em;
    background-color: var(--clr-accent-100);

    > div {
      background-color: var(--clr-neutral-100);
      min-height: 80dvh;
      padding: 1em;
      border-radius: 0.6em;
    }
  }

  ${maxMedia(
    900,
    `
    grid-template-columns: 1fr;

    section {
      padding: 0em;
      background-color: var(--clr-neutral-100);

      > div {
        border-radius: 0em;
      }
    }
    `
  )}
`;

// eslint-disable-next-line react-refresh/only-export-components
export function useHeading() {
  return useOutletContext<{
    setHeading: Dispatch<SetStateAction<DashboardHeaderText>>;
  }>();
}
