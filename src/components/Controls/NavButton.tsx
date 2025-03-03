import { Button, ButtonProps, Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useShellContext } from "../Shell/useShellContext";

export interface NavButtonProps {
  buttonProps?: ButtonProps;
  textProps?: TextProps;
  tag?: ReactNode;
  icon?: ReactNode;
  label?: string;
}

export const NavButton = ({
  buttonProps = {},
  tag = <></>,
  icon = <></>,
  label = "",
  textProps = {},
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
      justifyContent="center"
      overflowX={"hidden"}
      display={"grid"}
      gap="3"
      alignContent={"center"}
      gridTemplateColumns={"auto 1fr auto"}
      {...buttonProps}
    >
      {icon}
      {label !== "" && (
        <Text
          fontSize={"md"}
          fontWeight={"lighter"}
          textOverflow={"ellipsis"}
          textAlign={"start"}
          {...textProps}
        >
          {label}
        </Text>
      )}
      {tag}
    </Button>
  );
};
