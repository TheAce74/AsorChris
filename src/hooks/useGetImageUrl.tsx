import { storage } from "../services/appwrite/appwrite";

function useGetImageUrl() {
  const getImgUrl = async (id: string): Promise<string> => {
    try {
      const response = await storage.getFileView(
        import.meta.env.VITE_APP_WRITE_STORAGE_BUCKET_ID,
        id
      );
      return response.href;
    } catch (error) {
      console.error(error);
      return "";
    }
  };

  return { getImgUrl };
}

export { useGetImageUrl };
