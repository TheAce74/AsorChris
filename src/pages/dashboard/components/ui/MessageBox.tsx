import styled from "styled-components";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Menu } from "@mantine/core";

export default function MessageBox() {
  return (
    <StyledMessageBox className="flex">
      <div>
        <p className="flex">
          <div>
            <h4>Udonsi Chisom</h4>
            <span>
              Hello Christopher, I went through your portfolio and loved...
            </span>
          </div>
          <span>11:01am</span>
        </p>
        <p>19 minutes ago</p>
      </div>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <button>
            <IoEllipsisHorizontalOutline />
          </button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Actions</Menu.Label>
          <Link to="/admin/messages/view" className="link">
            <Menu.Item>View</Menu.Item>
          </Link>
          <Menu.Item>Delete</Menu.Item>
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
