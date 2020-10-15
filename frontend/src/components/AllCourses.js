import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { getCourses } from "../redux/actions/courseAction";
import Card from "../components/MediaCard1";
import { Grid } from "@material-ui/core";
import { getCourseDetails } from "../redux/actions/courseAction";

export default function AllCourses() {
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((store) => store.coursesRoot);

  /**
   * Fetch all courses
   */
  useEffect(() => {
    dispatch(getCourses(history));
  }, []);

  /**
   * On course click
   *
   * @param {event} e
   */
  function onClick(e) {
    e.preventDefault();
    dispatch(getCourseDetails(this));
  }

  return (
    <Grid container>
      {store.courses.map((data) => (
        <Grid item xs={4} key={data._id} id={data._id}>
          <Card
            onClick={onClick}
            descripton={data.description}
            key={data._id}
            id={data._id}
            rating={data.rating}
          />
        </Grid>
      ))}
    </Grid>
  );
}
