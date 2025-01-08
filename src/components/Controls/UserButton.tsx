import { Button, Flex, Box } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { useShellContext } from "../Shell/useShellContext";

export interface User {
  name: string;
  avatar: string;
}

export interface UserButtonProps {
  user: User;
}

const UserButton = ({ user }: UserButtonProps) => {
  const { avatar, name } = user;
  const { sidebarWidth } = useShellContext();
  if (sidebarWidth < 200) {
    return (
      <Button
        as={Flex}
        justifyContent={"center"}
        alignItems={"center"}
        variant={"ghost"}
        height={"min-content"}
      >
        <Avatar src={avatar} />
      </Button>
    );
  }
  return (
    <Button
      as={Flex}
      justifyContent={"start"}
      alignItems={"center"}
      padding={"2"}
      variant={"ghost"}
      gap={"4"}
      height={"min-content"}
    >
      <Avatar src={avatar} />

      <Box>{name}</Box>
    </Button>
  );
};

export default UserButton;
