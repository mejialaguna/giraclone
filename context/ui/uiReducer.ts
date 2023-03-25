import { UIState } from "./UIProvider";

// recibe un estado inicial y 1 accion --> que modificaciones debe aplicar al estado

type UIactionType =
  | { type: "UI - Open sidebar" }
  | { type: "UI - Close sidebar" }
  | { type: "UI - isAddingEntry"; payload: boolean }
  | { type: "UI - start Dragging" }
  | { type: "UI - end Dragging" };

export const uiReducer = (state: UIState, action: UIactionType): UIState => {
  switch (action.type) {
    //   type script logra referir los dos typos de estados que tenemos usando single quotes ''
    case "UI - Open sidebar":
      return {
        // primero exparsimos todas las propiedades propiedades del state con el spread operator
        ...state,
        sidemenuOpen: true,
      };

    case "UI - Close sidebar":
      return {
        ...state,
        sidemenuOpen: false,
      };

    case "UI - isAddingEntry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };

    case "UI - start Dragging":
      return {
        ...state,
        isDragging: true,
      };

    case "UI - end Dragging":
      return {
        ...state,
        isDragging: false,
      };

    default:
      return state;
  }
};
