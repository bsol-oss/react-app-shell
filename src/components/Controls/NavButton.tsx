import { Button, ButtonProps, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useShellContext } from "../Shell/useShellContext";

export interface NavButtonProps {
  href: string;
  buttonProps?: ButtonProps;
  tag?: ReactNode;
  icon?: ReactNode;
  label?: string;
}

export const NavButton = ({
  buttonProps = {},
  tag = <></>,
  icon = <></>,
  label = "",
}: NavButtonProps) => {
  const { sidebarWidth } = useShellContext();
  if (sidebarWidth < 200) {
    return (
      <Button
        variant="ghost"
        justifyContent="center"
        overflowX={"hidden"}
        {...buttonProps}
      >
        {icon}
      </Button>
    );
  }
  return (
    <Button
      variant="ghost"
      justifyContent="start"
      overflowX={"hidden"}
      display={"grid"}
      gap="3"
      alignItems={"center"}
      gridTemplateColumns={"auto 1fr"}
      {...buttonProps}
    >
      {icon}
      {label !== "" && (
        <Flex alignItems={"center"} gap={"2"}>
          <Text
            fontSize={"md"}
            fontWeight={"lighter"}
            textOverflow={"ellipsis"}
          >
            {label}
          </Text>
          {tag}
        </Flex>
      )}
    </Button>
  );
};
