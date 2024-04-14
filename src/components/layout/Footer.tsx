import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import {
  BsTwitterX,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { maxMedia } from "../../utils/mediaQueries";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="flex">
        <nav>
          <h2>Quick links</h2>
          <ul
            role="list"
            aria-label="secondary navigation"
            id="secondary-navigation"
          >
            <li>
              <HashLink className="link" to="/#services">
                Services
              </HashLink>
            </li>
            <li>
              <Link className="link" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <HashLink className="link" to="/#services-ui">
                UI/UX Design
              </HashLink>
            </li>
            <li>
              <HashLink className="link" to="/#services-flyer">
                Flyer Design
              </HashLink>
            </li>
            <li>
              <HashLink className="link" to="/#services-logo">
                Logo Design
              </HashLink>
            </li>
            <li>
              <HashLink className="link" to="/#services-brand">
                Brand Identity Design
              </HashLink>
            </li>
          </ul>
        </nav>
        <div className="info">
          <div>
            <h2>Email Address</h2>
            <p>asorchris2019@gmail.com</p>
          </div>
          <div>
            <h2>Phone number</h2>
            <p>+2347085936545</p>
          </div>
          <div>
            <h2>Helpful links</h2>
            <ul role="list" className="flex">
              <li>
                <Link className="link" to="/terms">
                  Terms of service
                </Link>
              </li>
              <span></span>
              <li>
                <Link className="link" to="/privacy">
                  Privacy policy
                </Link>
              </li>
              <span></span>
              <li>
                <Link className="link" to="/refund">
                  Refund policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2>Social media</h2>
          <ul role="list" aria-label="social links" className="flex">
            <li>
              <a
                href="https://twitter.com/asor_chris"
                className="link"
                target="_blank"
                aria-label="twitter"
              >
                <BsTwitterX />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/2347085936545"
                className="link"
                target="_blank"
                aria-label="whatsapp"
              >
                <SiWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/asor-christopher-2a8b81226"
                className="link"
                target="_blank"
                aria-label="linkedin"
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/christopher.asor.90?mibextid=ZbWKwL"
                className="link"
                target="_blank"
                aria-label="facebook"
              >
                <BsFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/asor_chris"
                className="link"
                target="_blank"
                aria-label="instagram"
              >
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p>Copyright &copy; Asor Christopher 2024</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: var(--clr-primary-500);
  color: var(--clr-primary-300);
  padding: 3em 4em;

  > .flex {
    align-items: stretch;
    gap: 5em;
    flex-wrap: wrap;

    > * {
      min-width: max-content;
    }
  }

  h2 {
    margin-bottom: 0.8em;
    font-size: 1.25rem;
  }

  a {
    transition: color 0.3s;

    &:is(:hover, :focus-visible) {
      color: var(--clr-accent-400);
    }
  }

  [aria-label="secondary navigation"] li {
    margin-bottom: 1em;
  }

  .info > div {
    margin-bottom: 2em;

    span {
      width: 0.4em;
      aspect-ratio: 1;
      background-color: var(--clr-primary-300);
      border-radius: 50%;
    }
  }

  [aria-label="social links"] {
    font-size: 1.2rem;
  }

  > p {
    margin-top: 3em;
    text-align: center;
  }

  ${maxMedia(
    1038,
    `
     > .flex {
      row-gap: 2em;
    }
  `
  )}

  ${maxMedia(
    "sm",
    `
    padding: 2em 1em;
  `
  )}

  ${maxMedia(
    500,
    `
    > .flex {
      flex-direction: column;
      text-align: center;
      align-items: center;
      gap: 3em;
    }
  `
  )}
`;
