import { Grid } from "@chakra-ui/react";
import Sidebar, { SidebarProps } from "./Sidebar";
import { ReactNode, useState } from "react";
import { ShellContext } from "./ShellContext";

export interface ShellProps
  extends Omit<SidebarProps, "sidebarWidth" | "setSidebarWidth"> {
  children: ReactNode;
  initialWidth?: number;
}

export const Shell = ({
  children,
  navigation,
  initialWidth = 200,
}: ShellProps) => {
  const [sidebarWidth, setSidebarWidth] = useState<number>(initialWidth);

  const shared = {
    sidebarWidth: sidebarWidth,
    setSidebarWidth: setSidebarWidth,
    widths: {
      start: 200,
      max: 400,
      min: 80,
    },
  };
  return (
    <ShellContext.Provider value={shared}>
      <Grid
        as="section"
        gridTemplateColumns={"auto 1fr"}
        width={"100dvw"}
        height={"100dvh"}
        overflow={"auto"}
      >
        <Sidebar navigation={navigation} {...shared} />
        {children}
      </Grid>
    </ShellContext.Provider>
  );
};
