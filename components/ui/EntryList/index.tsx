import { FC, ReactElement, useContext, useMemo, DragEvent } from "react";

import { EntryCard } from "../EntryCard";

import { List, Paper } from "@mui/material";

import { EntriesContext } from "../../../context/entries/";
import { UIContext } from "../../../context/ui";

import { EntriesStatus } from "../../../interfaces";

export interface Props {
  status: EntriesStatus;
}

export const EntryList: FC<Props> = ({ status }): ReactElement => {
  const { entries, entryUpdated } = useContext(EntriesContext);

  const { isDragging, endDragging } = useContext(UIContext);

  // useMeno is like useEffect , needs a function that return a value que se memoriza and needs a dependecy que se vuelve a memorizar everything that value changes

  const entriesByStatus = useMemo(
    () =>
      entries.filter((entries) => {
        return entries.status === status;
      }),
    [entries]
  );

  // to get all of the info thats coming from the drag event first we meed to prevent default usando el metodo OnDragover para permitir que algo se va a dejar caer en ese elemento.

  const allowedDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // despues tenemos que agarrar la data , usando el JSONparse si estamos mandando un objeto , o si es solamente un string solo. nose nesecita el JSON.parse. y el nombre que se le dio a la data cuando se esta mandando on drag start en este caso de desde entryCard , ese el el div donde estan todas las tarjetas. y esta es la tarjerta que esta siendo arrastrada a otra parte .

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const dropEntry = JSON.parse(event.dataTransfer.getData("text"));

    // nesecitamos encontrar el entry y mancharlo con el entry que estamos mandando o que estamos arrastrando. y estamos reasignando el status con el nuevo valor del status newUpdatedEntry.status = status; y mandando ese nuevo arreglo con el nuevo status en entryUPdated()

    const newUpdatedEntry = entries.find((e) => {
      return e._id === dropEntry._id;
    })!; // con el ! le estamos diciendo a typeScript que siempre va a ver uno
    newUpdatedEntry.status = status;
    entryUpdated(newUpdatedEntry);
    endDragging();

    console.log({ dropEntry, newUpdatedEntry });
  };

  return (
    <div onDrop={onDropEntry} onDragOver={allowedDrop}>
      <Paper
        sx={{
          height: "calc(100vh - 200px)",
          overflow: "auto",
          backgroundColor: "transparent",
        }}
      >
        <List
          sx={{
            opacity: isDragging ? 0.2 : 1,
            transition: "all 300ms",
            padding: ".3rem",
          }}
        >
          {entriesByStatus.map((entries) => {
            return <EntryCard key={entries._id} entries={entries} />;
          })}
        </List>
      </Paper>
    </div>
  );
};
