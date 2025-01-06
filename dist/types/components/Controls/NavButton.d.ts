import { ReactNode } from "react";
export interface NavButtonProps {
    href: string;
    buttonProps?: React.RefAttributes<HTMLButtonElement>;
    tag?: ReactNode;
    icon?: ReactNode;
    label?: string;
}
declare const NavButton: ({ buttonProps, tag, icon, label, }: NavButtonProps) => import("react/jsx-runtime").JSX.Element;
export default NavButton;
