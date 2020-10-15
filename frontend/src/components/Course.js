import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";

import Player from "./Player";

export default function Course() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: "10px",
      margin: "10px",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    input: {
      height: "500px",
    },
  }));

  const classes = useStyles();
  const store = useSelector((store) => store.coursesRoot);

  console.log(store, "player");

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Player />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-multiline-static"
            label="Notes"
            multiline
            rows="23"
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
    </div>
  );
}
