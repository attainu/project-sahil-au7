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
import Button from "@material-ui/core/Button";

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

  /**
   * Save notes
   *
   * @param {e} e
   */
  const onSave = (e) => {
    e.preventDefault();

    //TODO: Notes
  };

  return (
    <div
      className={classes.root}
      key={store.viewCourse._id}
      id={store.viewCourse._id}
    >
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Player id={store.viewCourse.videoId} />
        </Grid>
        <Grid item xs={4}>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Notes"
              multiline
              rows="23"
              fullWidth
              variant="outlined"
            />
            <Grid>
              <Button
                size="small"
                color="secondary"
                item
                xs={4}
                onClick={onSave}
              >
                Save
              </Button>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
