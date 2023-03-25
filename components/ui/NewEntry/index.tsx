import { ChangeEvent, FC, ReactElement, useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import { EntriesContext } from "../../../context/entries";
import { UIContext } from "../../../context/ui";

export const NewEntry: FC = (): ReactElement => {
  const [onError, setOnError] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const onTextFieldValueChanged = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (!inputValue) {
      setOnError(true);
    } else {
      addNewEntry(inputValue);
      setIsAddingEntry(false);
      setInputValue("");
    }
  };

  return (
    <Box sx={{ marginBottom: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            sx={{ marginBottom: 3, marginTop: 2 }}
            fullWidth
            error={onError}
            id="outlined-error-helper-text"
            label="Input - Task"
            helperText={onError && "Please add a Task."}
            value={inputValue}
            onChange={onTextFieldValueChanged}
            autoFocus
            multiline
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              type="submit"
              variant="outlined"
              color="success"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
              onBlur={() => setOnError(false)}
            >
              Guardar
            </Button>
            <Button
              variant="text"
              color="error"
              endIcon={<SaveOutlinedIcon />}
              onClick={() => setIsAddingEntry(false)}
            >
              Cancelar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          startIcon={<AddCircleOutlineSharpIcon />}
          onClick={() => setIsAddingEntry(true)}
        >
          Add New Task
        </Button>
      )}
    </Box>
  );
};
