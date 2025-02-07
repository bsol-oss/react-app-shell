import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RxWidth } from "react-icons/rx";
import { widths } from "../Shell/Sidebar";
import { useShellContext } from "../Shell/useShellContext";

export interface ResizeButtonProps {
  buttonProps?: React.RefAttributes<HTMLButtonElement>;
  icon?: ReactNode;
}

export const ResizeButton = ({
  buttonProps = {},
  icon = (
    <>
      <RxWidth />
    </>
  ),
}: ResizeButtonProps) => {
  const { sidebarWidth, setSidebarWidth } = useShellContext();
  return (
    <Button
      variant="ghost"
      justifyContent="center"
      overflowX={"hidden"}
      onClick={() => {
        if (sidebarWidth > widths.min) {
          setSidebarWidth(widths.min);
          return;
        }
        if (sidebarWidth == widths.min) {
          setSidebarWidth(widths.max);
          return;
        }
        if (sidebarWidth == widths.max) {
          setSidebarWidth(widths.min);
          return;
        }
      }}
      {...buttonProps}
    >
      {icon}
    </Button>
  );
};
