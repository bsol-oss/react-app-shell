import { useContext } from "react";
import { ShellContext } from "./ShellContext";

export const useShellContext = () => {
  const { sidebarWidth, setSidebarWidth, widths } = useContext(ShellContext);
  return {
    sidebarWidth,
    setSidebarWidth,
    widths,
  };
};
