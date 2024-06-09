import { useCallback } from "react";
import { databases } from "../services/appwrite/appwrite";
import { useToast } from "./useToast";
import { messagesAtom } from "../services/jotai/messages";
import { useSetAtom } from "jotai";

function useGetMessages() {
  const { customToast } = useToast();
  const setMessages = useSetAtom(messagesAtom);

  const getMessages = useCallback(async () => {
    try {
      const response = await databases.listDocuments(
        import.meta.env.VITE_APP_WRITE_DATABASE_ID,
        import.meta.env.VITE_APP_WRITE_MESSAGING_ID
      );
      setMessages(
        response.documents.reverse().map((document) => ({
          id: document.$id,
          senderName: document.senderName,
          senderEmail: document.senderEmail,
          message: document.message,
          createdAt: document.$createdAt,
        }))
      );
    } catch (error) {
      console.error(error);
      customToast("Failed to get messages", { type: "error" });
    }
  }, [customToast, setMessages]);

  return { getMessages };
}

export { useGetMessages };
