import styled from "styled-components";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Menu } from "@mantine/core";
import { Message } from "../../../../utils/types";
import { format, formatDistance } from "date-fns";
import { useDeleteMessage } from "../../../../hooks/useDeleteMessage";

type MessageBoxProps = {
  message: Message;
};

export default function MessageBox({ message }: MessageBoxProps) {
  const { deleteMessage } = useDeleteMessage();

  return (
    <StyledMessageBox className="flex">
      <div>
        <p className="flex">
          <div>
            <h4>{message.senderName}</h4>
            <span>{message.message.slice(0, 60)}...</span>
          </div>
          <span>{format(new Date(message.createdAt), "p")}</span>
        </p>
        <p>
          {formatDistance(new Date(message.createdAt), new Date(), {
            addSuffix: true,
          })}
        </p>
      </div>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <button>
            <IoEllipsisHorizontalOutline />
          </button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Actions</Menu.Label>
          <Link to={`/admin/messages/${message.id}`} className="link">
            <Menu.Item>View</Menu.Item>
          </Link>
          <Menu.Item onClick={() => deleteMessage(message.id)}>
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </StyledMessageBox>
  );
}

const StyledMessageBox = styled.div`
  max-width: 60rem;
  background-color: var(--clr-neutral-200);
  padding: 1.5em;
  border: 1px solid var(--clr-neutral-400);
  border-radius: 0.5em;
  align-items: start;
  margin-bottom: 1.5em;

  .flex {
    align-items: start;
  }

  .flex div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8em;
    margin-bottom: 0.5em;
  }

  button {
    font-size: 1.6rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
