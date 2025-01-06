import { useContext } from "react";
import { ShellContext } from "./ShellContext";

export const useShellContext = () => {
  const { sidebarWidth } = useContext(ShellContext);
  return {
    sidebarWidth,
  };
};
