import { useLayoutEffect } from "react";
import { useHeading } from "../components/layout/DashboardWrapper";
import styled from "styled-components";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

export default function DashboardViewMessages() {
  const { setHeading } = useHeading();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    setHeading("Messages");
  }, [setHeading]);

  return (
    <section>
      <StyledDashboardViewMessages>
        <button className="back" onClick={() => navigate(-1)}>
          <LiaAngleLeftSolid />
        </button>
        <div className="flex message-flex">
          <h3>Udonsi Chisom</h3>
          <p>11:01am</p>
        </div>
        <div className="flex message-flex">
          <p>19 minutes ago</p>
          <span></span>
          <b>udonsichisom@gmail.com</b>
        </div>
        <p className="message">
          Hello Christopher, I went through your portfolio and I so much loved
          your works. I am looking to launch a new brand and would want you to
          handle the branding as well as the UI/UX design for the website and
          the mobile app. Please reach out to me via email or WhatsApp with this
          number so we can continue the conversation +2347063736223
        </p>
      </StyledDashboardViewMessages>
    </section>
  );
}

const StyledDashboardViewMessages = styled.div`
  .back {
    background: none;
    border: none;
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 0.4s;
    margin-bottom: 0.5em;

    &:is(:hover, :focus-visible) {
      color: var(--clr-primary-400);
    }
  }

  .message-flex {
    justify-content: flex-start;
    margin-bottom: 0.5em;

    span {
      width: 0.5em;
      aspect-ratio: 1;
      background-color: var(--clr-primary-400);
      border-radius: 50%;
    }
  }

  .message {
    margin-top: 1.5em;
    line-height: 1.8;
  }
`;
