import { Dispatch, ReactNode, SetStateAction } from "react";
export interface User {
    name: string;
    avatar: string;
}
export interface SidebarProps {
    navigation: ReactNode;
    user: User;
    logo: string;
    sidebarWidth: number;
    setSidebarWidth: Dispatch<SetStateAction<number>>;
}
declare const Sidebar: ({ navigation, user, logo, sidebarWidth, setSidebarWidth, }: SidebarProps) => import("react/jsx-runtime").JSX.Element;
export default Sidebar;
