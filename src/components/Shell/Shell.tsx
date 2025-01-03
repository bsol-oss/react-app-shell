import { Grid } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

const Shell = ({ children }) => {
  return (
    <Grid as="section" gridTemplateColumns={"18rem 1fr"}>
      <Sidebar />
      {children}
    </Grid>
  );
};

export default Shell;
