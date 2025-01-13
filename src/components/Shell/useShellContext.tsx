import { useContext } from "react";
import { ShellContext } from "./ShellContext";

export const useShellContext = () => {
  const { sidebarWidth, setSidebarWidth } = useContext(ShellContext);
  return {
    sidebarWidth,
    setSidebarWidth,
  };
};
