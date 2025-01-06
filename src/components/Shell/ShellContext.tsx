import { createContext, Dispatch, SetStateAction } from "react";

export interface DataTableContext {
  sidebarWidth: number;
  setSidebarWidth: Dispatch<SetStateAction<number>>;
}

export const ShellContext = createContext<DataTableContext>({
  sidebarWidth: 100,
  setSidebarWidth: ((prevState: number) => {
    return prevState;
  }) as Dispatch<SetStateAction<number>>,
});
