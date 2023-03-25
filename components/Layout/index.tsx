import { FC, ReactElement } from "react";

import Head from "next/head";

import NavBar from "../ui/NavBar";
import { SideBar } from "../ui/SideBar";

import Box from "@mui/material/Box";

import { Props } from "../../interfaces";

const Layout: FC<Props> = ({ children, title = "OpenJira" }): ReactElement => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <NavBar />
      <SideBar />

      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};

export default Layout;
