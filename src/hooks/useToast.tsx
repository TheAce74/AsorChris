import { useCallback } from "react";
import { ToastOptions, toast } from "react-toastify";

type CustomToast = (message: string, options?: ToastOptions) => void;

function useToast() {
  const customToast: CustomToast = useCallback((message, options) => {
    toast(message, {
      type: "success",
      ...options,
    });
  }, []);

  return {
    customToast,
  };
}

export { useToast };
