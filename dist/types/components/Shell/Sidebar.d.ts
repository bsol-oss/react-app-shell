import { FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";
export interface WidthsConfig {
    start: number;
    min: number;
    max: number;
}
export interface SidebarProps {
    navigation: ReactNode;
    flexProps?: FlexProps;
}
declare const Sidebar: ({ navigation, flexProps }: SidebarProps) => import("react/jsx-runtime").JSX.Element;
export default Sidebar;
