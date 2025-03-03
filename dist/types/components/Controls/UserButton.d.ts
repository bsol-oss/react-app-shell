import { ButtonProps } from "@chakra-ui/react";
import { AvatarProps } from "@/components/ui/avatar";
export interface UserButtonProps {
    buttonProps?: ButtonProps;
    avatarProps?: AvatarProps;
}
export declare const UserButton: ({ buttonProps, avatarProps }: UserButtonProps) => import("react/jsx-runtime").JSX.Element;
