import { ButtonProps, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";
export interface NavButtonProps {
    buttonProps?: ButtonProps;
    textProps?: TextProps;
    tag?: ReactNode;
    icon?: ReactNode;
    label?: string;
}
export declare const NavButton: ({ buttonProps, tag, icon, label, textProps, }: NavButtonProps) => import("react/jsx-runtime").JSX.Element;
