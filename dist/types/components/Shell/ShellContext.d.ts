import { Dispatch, SetStateAction } from "react";
export interface DataTableContext {
    sidebarWidth: number;
    setSidebarWidth: Dispatch<SetStateAction<number>>;
}
export declare const ShellContext: import("react").Context<DataTableContext>;
