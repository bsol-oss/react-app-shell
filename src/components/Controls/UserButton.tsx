import { Button, ButtonProps, Flex, Text } from "@chakra-ui/react";
import { Avatar, AvatarProps } from "@/components/ui/avatar";
import { useShellContext } from "../Shell/useShellContext";

export interface UserButtonProps {
  buttonProps?: ButtonProps;
  avatarProps?: AvatarProps;
}

export const UserButton = ({ buttonProps, avatarProps }: UserButtonProps) => {
  const { sidebarWidth } = useShellContext();
  if (sidebarWidth < 200) {
    return (
      <Button
        as={Flex}
        justifyContent={"center"}
        alignItems={"center"}
        variant={"ghost"}
        height={"min-content"}
        {...buttonProps}
      >
        <Avatar {...avatarProps} />
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
      {...buttonProps}
    >
      <Avatar {...avatarProps} />

      <Text textOverflow={"ellipsis"} overflow={"hidden"}>
        {avatarProps?.name}
      </Text>
    </Button>
  );
};
