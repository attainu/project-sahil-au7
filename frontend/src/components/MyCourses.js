import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { getCourses } from "../redux/actions/courseAction";
import Card from "../components/MediaCard1";
import { Grid } from "@material-ui/core";
import { getCourseDetails } from "../redux/actions/courseAction";
import { isVisible } from "../redux/actions/progressActions";

export default function MyCourses() {
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((store) => store.coursesRoot);

  /**
   * Fetch all courses
   */
  useEffect(() => {
    dispatch(getCourses(history));

    // //Display progress bar
    // dispatch(isVisible(true));
  }, []);

  /**
   * On course click
   *
   * @param {event} e
   */
  function onClick(e) {
    e.preventDefault();
    dispatch(getCourseDetails(this, history));
  }

  return (
    <Grid container>
      {store.courses.map((data) => (
        <Grid item key={data._id} id={data._id}>
          <Card
            onClick={onClick}
            title={data.title}
            videoId={data.link.map((v) => v.split("&")[0])[0]}
            description={data.description}
            key={data._id}
            id={data._id}
          />
        </Grid>
      ))}
    </Grid>
  );
}
