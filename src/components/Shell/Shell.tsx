import { Grid } from "@chakra-ui/react";
import Sidebar, { SidebarProps } from "./Sidebar";
import { ReactNode } from "react";

export interface ShellProps extends SidebarProps {
  children: ReactNode;
}

const Shell = ({ children, navigation, user, logo }: ShellProps) => {
  return (
    <Grid as="section" gridTemplateColumns={"18rem 1fr"}>
      <Sidebar navigation={navigation} user={user} logo={logo} />
      {children}
    </Grid>
  );
};

export default Shell;
