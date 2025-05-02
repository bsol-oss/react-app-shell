import { FlexProps, Grid, GridProps } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { ShellContext } from "./ShellContext";
import Sidebar, { SidebarProps, WidthsConfig } from "./Sidebar";

export interface ShellProps
  extends Omit<SidebarProps, "sidebarWidth" | "setSidebarWidth"> {
  children: ReactNode;
  initialWidth?: number;
  widths?: WidthsConfig;
  gridProps?: GridProps;
  sidebarFlexProps?: FlexProps;
}

export const Shell = ({
  children,
  navigation,
  initialWidth = 200,
  gridProps = {},
  widths = {
    start: 200,
    max: 400,
    min: 80,
  },
  sidebarFlexProps = {},
}: ShellProps) => {
  const [sidebarWidth, setSidebarWidth] = useState<number>(initialWidth);

  const shared = {
    sidebarWidth: sidebarWidth,
    setSidebarWidth: setSidebarWidth,
    widths,
  };
  return (
    <ShellContext.Provider value={shared}>
      <Grid
        as="section"
        gridTemplateColumns={"auto 1fr"}
        width={"100dvw"}
        height={"100dvh"}
        overflow={"auto"}
        {...gridProps}
      >
        <Sidebar navigation={navigation} {...sidebarFlexProps} />
        {children}
      </Grid>
    </ShellContext.Provider>
  );
};
