import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { getCourses, myCourses } from "../redux/actions/courseAction";
import Card from "../components/MediaCard1";
import { Grid } from "@material-ui/core";
import { getCourseDetails } from "../redux/actions/courseAction";

export default function MyCourses() {
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((store) => store.coursesRoot);

  /**
   * Fetch  courses
   */
  useEffect(() => {
    dispatch(myCourses(history));
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
    <div>
      <h1>My Courses</h1>
      <Grid container>
        {store.myCourses.map((data) => (
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
    </div>
  );
}
