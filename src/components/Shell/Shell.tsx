import { Grid } from "@chakra-ui/react";
import Sidebar, { SidebarProps } from "./Sidebar";
import { ReactNode, useState } from "react";
import { ShellContext } from "./ShellContext";

export interface ShellProps
  extends Omit<SidebarProps, "sidebarWidth" | "setSidebarWidth"> {
  children: ReactNode;
}

const Shell = ({ children, navigation }: ShellProps) => {
  const [sidebarWidth, setSidebarWidth] = useState<number>(200);

  const shared = {
    sidebarWidth: sidebarWidth,
    setSidebarWidth: setSidebarWidth,
  };
  return (
    <ShellContext.Provider value={shared}>
      <Grid
        as="section"
        gridTemplateColumns={"auto 1fr"}
        width={"100dvw"}
        height={"100dvh"}
        overflow={'auto'}
      >
        <Sidebar navigation={navigation} {...shared} />
        {children}
      </Grid>
    </ShellContext.Provider>
  );
};

export default Shell;
