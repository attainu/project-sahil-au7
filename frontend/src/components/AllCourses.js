import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "../components/MediaCard1";
import { getCourseDetails, getCourses } from "../redux/actions/courseAction";

export default function AllCourses() {
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((store) => store.coursesRoot);

  /**
   * Fetch all courses
   */
  useEffect(() => {
    dispatch(getCourses(history));
  });

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
      <h1>All Courses</h1>

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
    </div>
  );
}
