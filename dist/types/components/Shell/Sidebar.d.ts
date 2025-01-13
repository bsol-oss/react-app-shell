import { Dispatch, ReactNode, SetStateAction } from "react";
export interface SidebarProps {
    navigation: ReactNode;
    sidebarWidth: number;
    setSidebarWidth: Dispatch<SetStateAction<number>>;
}
export declare const widths: {
    start: number;
    min: number;
    max: number;
};
declare const Sidebar: ({ navigation, sidebarWidth, setSidebarWidth, }: SidebarProps) => import("react/jsx-runtime").JSX.Element;
export default Sidebar;
