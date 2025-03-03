import { Dispatch, SetStateAction } from "react";
import { WidthsConfig } from "./Sidebar";
export interface DataTableContext {
    sidebarWidth: number;
    setSidebarWidth: Dispatch<SetStateAction<number>>;
    widths: WidthsConfig;
}
export declare const ShellContext: import("react").Context<DataTableContext>;
