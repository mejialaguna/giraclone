import { ReactElement, useContext, useState } from "react";

import { NextPage } from "next/types";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import {
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { UIContext } from "../../../context/ui";

export const SideBar: NextPage = (): ReactElement => {
  const { sidemenuOpen, closeSideMenu } = useContext(UIContext);
  // sidemenuOpen es el estado , abierto o cerrado ( true or false)

  const listItemTypography: string[] = [
    "Inbox",
    "Starred",
    "Send email",
    "Drafts",
  ];

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={sidemenuOpen} // update the state if is open or close with an boolean value
      onClick={() => closeSideMenu()}
    >
      <Box sx={{ width: 250 }}>
        <List>
          {listItemTypography.map((text, index) => {
            return (
              <ListItem button={true} key={index}>
                <ListItemIcon>
                  {index % 2 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText>{text}</ListItemText>
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          {listItemTypography.map((text, index) => {
            return (
              <ListItem button={true} key={index}>
                <ListItemIcon>
                  {index % 2 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText>{text}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};
