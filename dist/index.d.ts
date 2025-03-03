import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonProps, TextProps, GridProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { AvatarProps } from '@/components/ui/avatar';

interface NavButtonProps {
    buttonProps?: ButtonProps;
    textProps?: TextProps;
    tag?: ReactNode;
    icon?: ReactNode;
    label?: string;
}
declare const NavButton: ({ buttonProps, tag, icon, label, textProps, }: NavButtonProps) => react_jsx_runtime.JSX.Element;

interface UserButtonProps {
    buttonProps?: ButtonProps;
    avatarProps?: AvatarProps;
}
declare const UserButton: ({ buttonProps, avatarProps }: UserButtonProps) => react_jsx_runtime.JSX.Element;

interface ResizeButtonProps {
    buttonProps?: ButtonProps;
    children?: ReactNode;
}
declare const ResizeButton: ({ buttonProps, children, }: ResizeButtonProps) => react_jsx_runtime.JSX.Element;

interface WidthsConfig {
    start: number;
    min: number;
    max: number;
}
interface SidebarProps {
    navigation: ReactNode;
}

interface ShellProps extends Omit<SidebarProps, "sidebarWidth" | "setSidebarWidth"> {
    children: ReactNode;
    initialWidth?: number;
    widths?: WidthsConfig;
    gridProps?: GridProps;
}
declare const Shell: ({ children, navigation, initialWidth, gridProps, widths, }: ShellProps) => react_jsx_runtime.JSX.Element;

export { NavButton, type NavButtonProps, ResizeButton, type ResizeButtonProps, Shell, type ShellProps, UserButton, type UserButtonProps };
