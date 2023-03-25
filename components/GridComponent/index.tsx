import * as React from "react";
import { Card, CardContent, CardHeader, Grid, Box } from "@mui/material";
import { EntryList } from "../ui/EntryList";
import { NewEntry } from "../ui/NewEntry";

export const GridComponent = () => {
  console.log(process.env.NEXT_PUBLIC_SECRET_KEY);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes" sx={{ textAlign: "center" }} />
            <CardContent sx={{ padding: "8px" }}>
              <NewEntry />
              <EntryList status="pending" />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="En Progreso" sx={{ textAlign: "center" }} />
            <CardContent sx={{ padding: "8px" }}>
              <EntryList status="in-progress" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completadas" sx={{ textAlign: "center" }} />
            <CardContent sx={{ padding: "8px" }}>
              <EntryList status="finished" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
