import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { PiPackageFill } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { maxMedia, motionMedia } from "../../../../utils/mediaQueries";
import { Dispatch, SetStateAction, useRef } from "react";
import { useClickAway } from "../../../../hooks/useClickAway";

type DashboardSidebarProps = {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

export default function DashboardSidebar({
  openMenu,
  setOpenMenu,
}: DashboardSidebarProps) {
  const clickAwayRef = useRef(null);

  const handleCloseMenu = () => setOpenMenu(false);

  useClickAway(clickAwayRef, handleCloseMenu, ["hamburger-react"]);

  return (
    <StyledDashboardSidebar
      id="sidebar"
      ref={clickAwayRef}
      className={openMenu ? "open" : ""}
    >
      <nav>
        <ul role="list">
          <li>
            <NavLink
              to="/admin"
              className="link flex"
              end
              onClick={handleCloseMenu}
            >
              <MdDashboard />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/projects"
              className="link flex"
              onClick={handleCloseMenu}
            >
              <PiPackageFill />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/messages"
              className="link flex"
              onClick={handleCloseMenu}
            >
              <GoMail />
              <span>Messages</span>
            </NavLink>
          </li>
        </ul>
        <button className="flex">
          <RiLogoutCircleRLine />
          <span>Logout</span>
        </button>
      </nav>
    </StyledDashboardSidebar>
  );
}

const StyledDashboardSidebar = styled.aside`
  box-shadow: 0px 0px 2px var(--clr-neutral-400);
  padding-top: 6em;
  background-color: var(--clr-neutral-100);
  z-index: 4;

  nav {
    position: sticky;
    top: 6em;
  }

  .flex {
    font-weight: 700;
    padding: 1em 2em;
    justify-content: flex-start;
    margin-bottom: 1.5em;

    &:is(:hover, :focus-visible) {
      background-color: var(--clr-accent-200);
    }

    svg {
      font-size: 1.5rem;
    }
  }

  a.active {
    border-left: 5px solid var(--clr-primary-400);
    background-color: var(--clr-primary-200);

    &:is(:hover, :focus-visible) {
      background-color: var(--clr-primary-200);
    }
  }

  button {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border: none;
  }

  button:active {
    scale: 0.95;
  }

  ${motionMedia(
    `
      .flex {
         transition: all 0.4s ease;
      }
    `
  )}

  ${maxMedia(
    900,
    `
    position: fixed;
    width: 300px;
    height: 100dvh;
    translate: -100% 0;
    transition: translate 0.4s ease;

    &.open {
      translate: 0 0;
    }
    `
  )}
`;
