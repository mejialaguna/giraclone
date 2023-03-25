import { createContext } from "react";

interface ContextProps {
  //  this name need to reflect the name on uiReducer inside the case
  sidemenuOpen: boolean;
  isAddingEntry: boolean;

  isDragging: boolean;

  // Methods from provider
  openSideMenu: () => void;
  closeSideMenu: () => void;

  setIsAddingEntry: (isAdding: boolean) => void;

  startDragging: () => void;
  endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
