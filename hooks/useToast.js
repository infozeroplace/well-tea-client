import toast from "react-hot-toast";

const useToast = () => {
  const styles = {
    style: {
      background: "#333",
      color: "#fff",
    },
  };

  const handleSuccess = (msg) => toast.success(msg, styles);
  const handleError = (msg) => toast.error(msg, styles);

  return { handleSuccess, handleError };
};

export default useToast;
