import { databases } from "../services/appwrite/appwrite";
import { useToast } from "./useToast";
import { messagesAtom } from "../services/jotai/messages";
import { useAtom } from "jotai";

function useDeleteMessage() {
  const { customToast } = useToast();
  const [messages, setMessages] = useAtom(messagesAtom);

  const deleteMessage = async (id: string) => {
    customToast("Deleting...", { type: "info" });
    try {
      await databases.deleteDocument(
        import.meta.env.VITE_APP_WRITE_DATABASE_ID,
        import.meta.env.VITE_APP_WRITE_MESSAGING_ID,
        id
      );
      setMessages(messages.filter((message) => message.id !== id));
      customToast("Deleted successfully");
    } catch (error) {
      console.error(error);
      customToast("Failed to get messages", { type: "error" });
    }
  };

  return { deleteMessage };
}

export { useDeleteMessage };
