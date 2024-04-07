import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Button from "../ui/Button";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import styled from "styled-components";
import { maxMedia, motionMedia } from "../../utils/mediaQueries";
import { useEffect, useRef, useState } from "react";
import { useClickAway } from "../../hooks/useClickAway";
import { Squash as Hamburger } from "hamburger-react";

export default function Header() {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const clickAwayRef = useRef(null);

  const handleOpenDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  useClickAway(clickAwayRef, () => setOpenDropDown(false), ["services"]);

  useEffect(() => {
    const menu = document.querySelector(".hamburger-react");
    menu?.setAttribute("aria-controls", "primary-navigation");
  }, []);

  return (
    <StyledHeader className="flex">
      <h2>AsorChris</h2>
      <Hamburger
        toggled={openMenu}
        toggle={setOpenMenu}
        label={openMenu ? "Hide menu" : "Show menu"}
        hideOutline={false}
        size={28}
      />
      <nav className={openMenu ? "menu-open" : ""}>
        <ul
          role="list"
          aria-label="primary navigation"
          id="primary-navigation"
          className="flex"
        >
          <li>
            <NavLink className="link" to="/" onClick={handleCloseMenu}>
              Home
            </NavLink>
          </li>
          <li className="flex services" onClick={handleOpenDropDown}>
            <p>Services</p>
            <FaAngleDown className={openDropDown ? "rotate" : ""} />
            <ul
              role="list"
              className={openDropDown ? "" : "hidden"}
              ref={clickAwayRef}
            >
              <li>
                <HashLink
                  className="link"
                  to="/#services-flier"
                  onClick={handleCloseMenu}
                >
                  Flyer Design
                </HashLink>
              </li>
              <li>
                <HashLink
                  className="link"
                  to="/#services-logo"
                  onClick={handleCloseMenu}
                >
                  Logo Design
                </HashLink>
              </li>
              <li>
                <HashLink
                  className="link"
                  to="/#services-ui"
                  onClick={handleCloseMenu}
                >
                  UI/UX Design
                </HashLink>
              </li>
              <li>
                <HashLink
                  className="link"
                  to="/#services-brand"
                  onClick={handleCloseMenu}
                >
                  Brand Identity Design
                </HashLink>
              </li>
              <li>
                <HashLink
                  className="link"
                  to="/#services-content"
                  onClick={handleCloseMenu}
                >
                  Content Writing
                </HashLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink className="link" to="/projects" onClick={handleCloseMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <HashLink className="link" to="/#contact" onClick={handleCloseMenu}>
              Contact me
            </HashLink>
          </li>
        </ul>
      </nav>
      <Button>
        <span>Work with me</span>
        <FaAngleRight />
      </Button>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  justify-content: space-evenly;
  padding-inline: 4em;
  background-color: var(--clr-neutral-100);
  box-shadow: 0px 0px 2px var(--clr-neutral-400);
  position: sticky;
  z-index: 1;
  top: 0;

  .hamburger-react {
    display: none;
  }

  nav {
    flex: 1;
  }

  [aria-label="primary navigation"] {
    justify-content: space-evenly;

    > li {
      &:has(p) {
        gap: 1em;
        cursor: pointer;
        font-weight: 600;

        svg {
          margin-top: 7px;
        }
      }

      > a {
        display: block;
      }

      &.services,
      > a {
        padding: 1.8em;
        font-weight: 600;
        position: relative;

        &.active {
          color: var(--clr-primary-400);
        }

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 0.15em;
          border-radius: 100vmax;
          width: 0;
          margin-inline: auto;
          background-color: var(--clr-primary-400);
          transition: width 0.3s;
        }

        &:is(:hover, :focus-visible)::after {
          width: 100%;
        }
      }
    }

    ul {
      position: absolute;
      top: 102%;
      left: 50%;
      translate: -50% 0;
      width: max-content;
      background-color: var(--clr-neutral-100);
      box-shadow: 0px 0px 2px var(--clr-neutral-400);
      border-radius: 0 0 0.3em 0.3em;

      li:last-child a {
        border-radius: 0 0 0.3em 0.3em;
      }

      a {
        display: block;
        padding: 0.7em 1.5em;
        padding-right: 7em;
        transition: all 0.3s;

        &:is(:hover, :focus-visible) {
          background-color: var(--clr-primary-400);
          color: var(--clr-neutral-100);
        }
      }
    }
  }

  ${maxMedia(
    1030,
    `
    padding-inline-end: 0;
       
    button {
      display: none;
    }
  `
  )}

  ${maxMedia(
    773,
    `
    padding-inline-start: 1em;
  `
  )}

  ${maxMedia(
    725,
    `
    justify-content: space-between;
    padding: .5em 1em;

    &:has( .menu-open) {
      .hamburger-react {
        color: var(--clr-neutral-100);
      }
    }

    .hamburger-react {
      display: block;
      z-index: 3;
      transition: all 0.4s cubic-bezier(0, 0, 0, 1) 0s, color 0s !important;
    }

   nav {
      flex: 0;
      position: absolute;
      
      [aria-label="primary navigation"] {
        position: fixed;
        inset: 0;
        z-index: 2;
        background-color: var(--clr-primary-400);
        color: var(--clr-neutral-100);
        flex-direction: column;
        justify-content: center;
        font-size: 1.3rem;
        translate: 100% 0;
        
        a, .services {
          transition: color .3s;
        }
        
        a.active,
        a:is(:hover, :focus-visible),
        .services:is(:hover, :focus-visible) {
          color: var(--clr-accent-400);
        }
        
        a::after, 
        .services::after,
        .services svg {
          display: none
        }
      }

      &.menu-open [aria-label="primary navigation"] {
          translate: 0;
      }

      .services {
        z-index: 3;

        ul {
            border-radius: 0.3em;

          li:first-child a {
            border-radius: 0.3em 0.3em 0 0;
          }

          a {
              color: var(--clr-primary-400);

            &:is(:hover, :focus-visible) {
              color: var(--clr-accent-400);
              background-color: var(--clr-neutral-100);
            }
          }
        }
      }
    }
    `
  )}

    ${motionMedia(
    `
      [aria-label="primary navigation"] {
         transition: translate 0.4s ease;
      }
    `
  )}
`;
