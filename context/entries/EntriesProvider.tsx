import { FC, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

import { v4 as uuidv4 } from "uuid";

//este es el estado
export interface EntriesState {
  entries: Entry[];
}

export interface Props {
  children: JSX.Element | JSX.Element[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "test description",
      status: "pending",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "En-progreso test description",
      status: "in-progress",
      createdAt: Date.now() - 100000,
    },
    {
      _id: uuidv4(),
      description: "Terminado test description",
      status: "finished",
      createdAt: Date.now() - 10000,
    },
  ],
};

export const EntriesProvider: FC<Props> = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4,
      description,
      createdAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "Entries Add-Entry", payload: newEntry });
  };

  const entryUpdated = (entry: Entry) => {
    dispatch({
      type: "Entries Entry-Updated",
      payload: entry,
    });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        // methods..
        addNewEntry,
        entryUpdated,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
