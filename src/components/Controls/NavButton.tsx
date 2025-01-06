import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface NavButtonProps {
  href: string;
  buttonProps?: React.RefAttributes<HTMLButtonElement>;
  tag?: ReactNode;
  icon?: ReactNode;
  label?: string;
}

const NavButton = ({
  buttonProps = {},
  tag = <></>,
  icon = <></>,
  label = "",
}: NavButtonProps) => {
  return (
    <Button
      variant="ghost"
      justifyContent="start"
      overflowX={"hidden"}
      {...buttonProps}
    >
      <Grid
        gap="0.75rem"
        alignItems={"center"}
        gridTemplateColumns={"auto 1fr"}
      >
        {icon}
        {label !== "" && (
          <Flex alignItems={"center"} gap={"0.5rem"}>
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
      </Grid>
    </Button>
  );
};

export default NavButton;
