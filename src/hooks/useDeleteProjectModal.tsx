import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Button from "../components/ui/Button";

function useDeleteProjectModal(callback: () => void) {
  const [opened, { open, close }] = useDisclosure(false);

  return {
    openDeleteModal: open,
    deleteModal: (
      <Modal opened={opened} onClose={close} withCloseButton={false} centered>
        <div
          style={{
            display: "grid",
            placeContent: "center",
            gap: "1.5em",
            padding: "2em",
            textAlign: "center",
          }}
        >
          <h3>Are you sure you want to delete this project?</h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4rem",
            }}
          >
            <Button
              onClick={() => {
                callback();
                close();
              }}
            >
              Delete
            </Button>
            <Button onClick={close} variant="inverted">
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    ),
  };
}

export { useDeleteProjectModal };
