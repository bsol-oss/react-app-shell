import { SidebarProps } from "./Sidebar";
import { ReactNode } from "react";
export interface ShellProps extends Omit<SidebarProps, "sidebarWidth" | "setSidebarWidth"> {
    children: ReactNode;
}
declare const Shell: ({ children, navigation }: ShellProps) => import("react/jsx-runtime").JSX.Element;
export default Shell;
