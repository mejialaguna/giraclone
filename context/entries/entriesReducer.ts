import { Entry } from "./../../interfaces/index";
import { EntriesState } from "./";

type EntriesActionType =
  | { type: "Entries Add-Entry"; payload: Entry }
  | { type: "Entries Entry-Updated"; payload: Entry };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case "Entries Add-Entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    case "Entries Entry-Updated":
      // we need to loop dentro del arreglo y modificar el arreglo q estoy recibiendo
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            // entry.status = action.payload.status;
            // entry.description = action.payload.status;

            // esta es la nueva action que tenemos que regresar , o tambien podemos modicar la nueva action solomamente mandando y modificando las acciones individuales asi como el ejemplo de la lineas que estas arriba de esto
            return action.payload;
          }
          return entry;
        }),
      };

    default:
      return state;
  }
};
