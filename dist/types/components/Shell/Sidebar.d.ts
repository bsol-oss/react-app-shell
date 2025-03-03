import { ReactNode } from "react";
export interface WidthsConfig {
    start: number;
    min: number;
    max: number;
}
export interface SidebarProps {
    navigation: ReactNode;
}
declare const Sidebar: ({ navigation }: SidebarProps) => import("react/jsx-runtime").JSX.Element;
export default Sidebar;
