import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UIProvider: FC<Props> = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI - Open sidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "UI - Close sidebar" });
  };

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: "UI - isAddingEntry", payload: isAdding });
  };

  const startDragging = () => {
    dispatch({ type: "UI - start Dragging" });
  };

  const endDragging = () => {
    dispatch({ type: "UI - end Dragging" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,

        //methods
        openSideMenu,
        closeSideMenu,

        setIsAddingEntry,

        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
