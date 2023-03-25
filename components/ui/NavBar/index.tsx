import { FC, ReactElement, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/icons-material/Menu";
import { UIContext } from "../../../context/ui";

const Navbar: FC = (): ReactElement => {
  const { openSideMenu } = useContext(UIContext);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          size="large"
          aria-label="menu"
          onClick={openSideMenu}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
