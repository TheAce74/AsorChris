import { ID } from "appwrite";
import { databases } from "../services/appwrite/appwrite";
import { ContactInputs } from "../utils/types";
import { useToast } from "./useToast";
import { useState } from "react";

function useSendMessage() {
  const [sending, setSending] = useState(false);
  const { customToast } = useToast();

  const sendMessage = async (data: ContactInputs): Promise<boolean> => {
    setSending(true);
    try {
      await databases.createDocument(
        import.meta.env.VITE_APP_WRITE_DATABASE_ID,
        import.meta.env.VITE_APP_WRITE_MESSAGING_ID,
        ID.unique(),
        {
          senderName: data.name,
          senderEmail: data.email,
          message: data.message,
        }
      );
      customToast("Message sent");
      return true;
    } catch (error) {
      console.error(error);
      customToast("Failed to send message", { type: "error" });
      return false;
    } finally {
      setSending(false);
    }
  };

  return { sendMessage, sending };
}

export { useSendMessage };
