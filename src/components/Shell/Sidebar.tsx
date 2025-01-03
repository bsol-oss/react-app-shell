import { Avatar } from "@/components/ui/avatar";
import { Box, Button, Flex, Grid, Image } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface User {
  name: string;
  avatar: string;
}

export interface SidebarProps {
  navigation: ReactNode;
  user: User;
  logo: string;
}

const Sidebar = ({ navigation, user, logo }: SidebarProps) => {
  return (
    <Grid
      position={"sticky"}
      overscroll={"contain"}
      top={"0rem"}
      left={"0rem"}
      gridTemplateRows={"auto 1fr auto"}
      gridTemplateColumns={"auto"}
      overflow={"auto"}
      as="section"
      height={"100dvh"}
    >
      <Box>
        <Image src={logo}></Image>
      </Box>
      <Box>{navigation}</Box>
      <Button
        as={Flex}
        justifyContent={'start'}
        alignItems={"center"}
        margin={"0.5rem"}
        variant={"ghost"}
        gap={"1rem"}
        height={"min-content"}
      >
        <Avatar src={user.avatar} />

        <Box padding={"1rem"}>{user.name}</Box>
      </Button>
    </Grid>
  );
};

export default Sidebar;
