import { Button, Flex, Box } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { useShellContext } from "../Shell/useShellContext";

export interface UserButtonProps {
  user: {
    avatar: string;
    name: string;
  };
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
        padding={"0.5rem"}
        variant={"ghost"}
        gap={"1rem"}
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
      padding={"0.5rem"}
      variant={"ghost"}
      gap={"1rem"}
      height={"min-content"}
    >
      <Avatar src={avatar} />

      <Box>{name}</Box>
    </Button>
  );
};

export default UserButton;
