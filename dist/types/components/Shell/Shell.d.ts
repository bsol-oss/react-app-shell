import { GridProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { SidebarProps, WidthsConfig } from "./Sidebar";
export interface ShellProps extends Omit<SidebarProps, "sidebarWidth" | "setSidebarWidth"> {
    children: ReactNode;
    initialWidth?: number;
    widths?: WidthsConfig;
    gridProps?: GridProps;
}
export declare const Shell: ({ children, navigation, initialWidth, gridProps, widths, }: ShellProps) => import("react/jsx-runtime").JSX.Element;
