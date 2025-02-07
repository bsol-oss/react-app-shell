/// <reference types="react" />
import { ButtonProps } from '@chakra-ui/react';
import * as react from 'react';
import { ReactNode, Dispatch, SetStateAction } from 'react';

interface NavButtonProps {
    href: string;
    buttonProps?: ButtonProps;
    tag?: ReactNode;
    icon?: ReactNode;
    label?: string;
}

interface User {
    name: string;
    avatar: string;
}
interface UserButtonProps {
    user: User;
}

interface ResizeButtonProps {
    buttonProps?: React.RefAttributes<HTMLButtonElement>;
    icon?: ReactNode;
}

interface SidebarProps {
    navigation: ReactNode;
    sidebarWidth: number;
    setSidebarWidth: Dispatch<SetStateAction<number>>;
}
declare const widths: {
    start: number;
    min: number;
    max: number;
};

interface ShellProps extends Omit<SidebarProps, "sidebarWidth" | "setSidebarWidth"> {
    children: ReactNode;
}

declare const useShellContext: () => {
    sidebarWidth: number;
    setSidebarWidth: react.Dispatch<react.SetStateAction<number>>;
};

export { type NavButtonProps, type ResizeButtonProps, type ShellProps, type SidebarProps, type User, type UserButtonProps, useShellContext, widths };
