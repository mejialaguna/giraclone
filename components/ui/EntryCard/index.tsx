import { DragEvent, FC, ReactElement, useContext } from "react";

import { UIContext } from "../../../context/ui";

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
} from "@mui/material";

import { Entry } from "../../../interfaces";

import moment from "moment";

export interface Entries {
  entries: Entry;
}

export const EntryCard: FC<Entries> = ({
  entries: { createdAt, _id, description, status },
}): ReactElement => {
  const { startDragging, endDragging, isDragging } = useContext(UIContext);

  const onDragStart = (event: DragEvent) => {
    const cardData = { createdAt, _id, description, status };
    // we can only pass string and if we want to pass an Object we need to use JSON.stringify
    event.dataTransfer.setData("text", JSON.stringify(cardData));
    startDragging();
  };

  return (
    <Card
      sx={{ marginBottom: 2 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={endDragging}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {description} {status}
          </Typography>
        </CardContent>
        <CardActions sx={{ float: "right", paddingRight: 1.5 }}>
          <Typography variant="body2">
            Since {moment(createdAt).format("MMM DD hh:mm")}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
