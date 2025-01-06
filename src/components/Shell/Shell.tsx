import { Grid } from "@chakra-ui/react";
import Sidebar, { SidebarProps } from "./Sidebar";
import { ReactNode, useState } from "react";
import { ShellContext } from "./ShellContext";

export interface ShellProps
  extends Omit<SidebarProps, "sidebarWidth" | "setSidebarWidth"> {
  children: ReactNode;
}

const Shell = ({ children, navigation, user, logo }: ShellProps) => {
  const [sidebarWidth, setSidebarWidth] = useState<number>(200);

  const shared = {
    sidebarWidth: sidebarWidth,
    setSidebarWidth: setSidebarWidth,
  };
  return (
    <ShellContext.Provider value={shared}>
      <Grid as="section" gridTemplateColumns={"auto 1fr"} padding={'1rem'}>
        <Sidebar navigation={navigation} user={user} logo={logo} {...shared} />
        {children}
      </Grid>
    </ShellContext.Provider>
  );
};

export default Shell;
