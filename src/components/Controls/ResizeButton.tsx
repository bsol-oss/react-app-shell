import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RxWidth } from "react-icons/rx";
import { widths } from "../Shell/Sidebar";
import { useShellContext } from "../Shell/useShellContext";

export interface ResizeButtonProps {
  buttonProps?: ButtonProps;
  children?: ReactNode;
}

export const ResizeButton = ({
  buttonProps = {},
  children = (
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
      {children}
    </Button>
  );
};
