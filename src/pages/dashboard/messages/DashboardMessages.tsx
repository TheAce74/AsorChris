import { useLayoutEffect } from "react";
import { useHeading } from "../components/layout/DashboardWrapper";
import styled from "styled-components";
import MessageBox from "../components/ui/MessageBox";
import { messagesAtom } from "../../../services/jotai/messages";
import { useAtomValue } from "jotai";

export default function DashboardMessages() {
  const { setHeading } = useHeading();
  const messages = useAtomValue(messagesAtom);

  useLayoutEffect(() => {
    setHeading("Messages");
  }, [setHeading]);

  return (
    <section>
      <StyledDashboardMessages>
        <h2 className="info-heading">All messages</h2>
        {messages.map((message) => (
          <MessageBox key={message.id} message={message} />
        ))}
        {messages.length === 0 && (
          <p className="no-info">No messages received yet</p>
        )}
      </StyledDashboardMessages>
    </section>
  );
}

const StyledDashboardMessages = styled.div`
  .info-heading {
    margin-bottom: 1em;
  }

  .no-info {
    padding-block: 6em;
    text-align: center;
  }
`;
