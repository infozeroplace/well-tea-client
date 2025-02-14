import { useEffect } from "react";
import { Spinner } from "@heroui/react";

const LoadingOverlay = ({ isLoading }) => {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when loading
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[99999999]">
      <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-2xl gap-2">
        <Spinner size="large" />
        <span className="text-brandheadingtext">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingOverlay;
