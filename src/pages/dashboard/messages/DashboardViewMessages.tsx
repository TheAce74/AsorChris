import { useLayoutEffect } from "react";
import { useHeading } from "../components/layout/DashboardWrapper";
import styled from "styled-components";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { useNavigate, useParams } from "react-router-dom";
import { useAtomValue } from "jotai";
import { messagesAtom } from "../../../services/jotai/messages";
import { format, formatDistance } from "date-fns";

export default function DashboardViewMessages() {
  const { setHeading } = useHeading();
  const navigate = useNavigate();

  const { id } = useParams();
  const messages = useAtomValue(messagesAtom);
  const message = messages.filter((message) => message.id === id)[0];

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
          <h3>{message.senderName}</h3>
          <p>{format(new Date(message.createdAt), "p")}</p>
        </div>
        <div className="flex message-flex">
          <p>
            {formatDistance(new Date(message.createdAt), new Date(), {
              addSuffix: true,
            })}
          </p>
          <span></span>
          <b>{message.senderEmail}</b>
        </div>
        <p className="message">{message.message}</p>
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
