import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { getCourses } from "../redux/actions/courseAction";
import Card from "../components/MediaCard1";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

export default function AllCourses() {
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((store) => store.coursesRoot);

  useEffect(() => {
    dispatch(getCourses(history));
  }, []);

  return (
    <Grid container>
      {store.courses.map((data) => (
        // <label key={data._id}>{data}</label>
        // <h1>{data.rating}</h1>
        <Grid item xs={4}>
          <Card
            descripton={data.description}
            key={data._id}
            rating={data.rating}
          />
        </Grid>
      ))}
    </Grid>
  );
}
