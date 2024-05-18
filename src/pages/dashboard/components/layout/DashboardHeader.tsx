import styled from "styled-components";
import admin from "../../../../assets/admin.png";
import { Pivot as Hamburger } from "hamburger-react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { maxMedia } from "../../../../utils/mediaQueries";
import { DashboardHeaderText } from "../../../../utils/types";

type DashboardHeaderProps = {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  heading: DashboardHeaderText;
};

export default function DashboardHeader({
  openMenu,
  setOpenMenu,
  heading,
}: DashboardHeaderProps) {
  useEffect(() => {
    const menu = document.querySelector(".hamburger-react");
    menu?.setAttribute("aria-controls", "sidebar");
  }, []);

  return (
    <StyledDashboardHeader className="flex">
      <h1>{heading}</h1>
      <div className="flex">
        <div>
          <h3>Asor Christopher</h3>
          <p>Administrator</p>
        </div>
        <img src={admin} alt="" />
      </div>
      <Hamburger
        toggled={openMenu}
        toggle={setOpenMenu}
        label={openMenu ? "Hide menu" : "Show menu"}
        hideOutline={false}
        size={28}
      />
    </StyledDashboardHeader>
  );
}

const StyledDashboardHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 0.7em 4em;
  box-shadow: 2px 0px 2px var(--clr-neutral-400);
  gap: 6em;
  background-color: var(--clr-neutral-100);
  z-index: 3;

  h1 {
    font-size: 1.4rem;
  }

  .flex {
    gap: 2em;
  }

  h3 {
    font-size: 1.1rem;
  }

  img {
    width: 3.5em;
  }

  .hamburger-react {
    display: none;
  }

  ${maxMedia(
    900,
    `
    padding-inline: 1em;

    .flex {
      display: none;
    }

    .hamburger-react {
      display: block;
    }
    `
  )}
`;
