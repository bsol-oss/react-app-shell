import { createContext, Dispatch, SetStateAction } from "react";
import { WidthsConfig } from "./Sidebar";

export interface DataTableContext {
  sidebarWidth: number;
  setSidebarWidth: Dispatch<SetStateAction<number>>;
  widths: WidthsConfig;
}

export const ShellContext = createContext<DataTableContext>({
  sidebarWidth: 100,
  setSidebarWidth: ((prevState: number) => {
    return prevState;
  }) as Dispatch<SetStateAction<number>>,
  widths: {
    start: 200,
    max: 400,
    min: 80,
  },
});
