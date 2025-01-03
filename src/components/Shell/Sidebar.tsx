import { Box, Grid } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Grid
      position={"sticky"}
      overscroll={"contain"}
      top={"0rem"}
      left={"0rem"}
      gridTemplateRows={"auto auto 1fr auto auto"}
      gridTemplateColumns={"auto"}
      borderRight={"0.5px solid"}
      borderRightColor={"gray.600"}
      backgroundColor="gray.400"
      as="section"
      height={"100dvh"}
    >
      <Box>Image</Box>
      <Box>Title</Box>
      <Box>Navigation</Box>
      <Box>User</Box>
    </Grid>
  );
};

export default Sidebar;
