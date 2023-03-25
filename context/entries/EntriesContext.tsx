import { createContext } from "react";
import { Entry } from "../../interfaces";

// lo que el contexto exporta y expone a sus hijos
interface ContextProps {
  entries: Entry[];

  // methods coming from provider
  addNewEntry: (description: string) => void;

  entryUpdated: (entry: Entry) => void;
}

export const EntriesContext = createContext({} as ContextProps);
