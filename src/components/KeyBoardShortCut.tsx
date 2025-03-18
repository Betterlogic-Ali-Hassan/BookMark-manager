import { usePageContext } from "@/context/PageContext";
import { useEffect } from "react";

const KeyboardShortcut = () => {
  const { setPage } = usePageContext();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        setPage("search");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setPage]);

  return null;
};

export default KeyboardShortcut;
