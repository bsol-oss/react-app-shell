import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonProps } from '@chakra-ui/react';
import { ReactNode, Dispatch, SetStateAction } from 'react';

interface NavButtonProps {
    buttonProps?: ButtonProps;
    tag?: ReactNode;
    icon?: ReactNode;
    label?: string;
}
declare const NavButton: ({ buttonProps, tag, icon, label, }: NavButtonProps) => react_jsx_runtime.JSX.Element;

interface User {
    name: string;
    avatar: string;
}
interface UserButtonProps {
    user: User;
}
declare const UserButton: ({ user }: UserButtonProps) => react_jsx_runtime.JSX.Element;

interface ResizeButtonProps {
    buttonProps?: React.RefAttributes<HTMLButtonElement>;
    icon?: ReactNode;
}
declare const ResizeButton: ({ buttonProps, icon, }: ResizeButtonProps) => react_jsx_runtime.JSX.Element;

interface SidebarProps {
    navigation: ReactNode;
    sidebarWidth: number;
    setSidebarWidth: Dispatch<SetStateAction<number>>;
}

interface ShellProps extends Omit<SidebarProps, "sidebarWidth" | "setSidebarWidth"> {
    children: ReactNode;
}
declare const Shell: ({ children, navigation }: ShellProps) => react_jsx_runtime.JSX.Element;

export { NavButton, type NavButtonProps, ResizeButton, type ResizeButtonProps, Shell, type ShellProps, type User, UserButton, type UserButtonProps };
