import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteCourse, enroll, viewCourse } from "../redux/actions/courseAction";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  links: {
    flexGrow: 1,
  },
});

export default function CourseDetails(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((store) => store.coursesRoot);

  /**
   *
   * @param {card click listener} e
   */
  const onCardClick = (e) => {
    e.preventDefault();
    dispatch(
      viewCourse(
        store.courseDetails,
        store.courseDetails.link.map((v) => v.split("&")[0])[0],
        history
      )
    );
  };

  /**
   * Enroll course
   *
   * @param {event} e
   */
  const onEnroll = (e) => {
    e.preventDefault();

    //Enroll
    dispatch(enroll(store.courseDetails._id, history));
  };

  /**
   * Delete course
   *
   * @param {event} e
   */
  const onDelete = (e) => {
    e.preventDefault();

    //Delete course
    dispatch(deleteCourse(store.courseDetails._id, history));
  };

  /**
   *
   * @param {link click listener} e
   */
  function onClickLink(e) {
    e.preventDefault();
    dispatch(viewCourse(store.courseDetails, this, history));
  }

  //Video links
  var links = store.courseDetails.link.map((v) => v.split("&")[0]);

  return (
    <Container maxWidth="md">
      <Card maxWidth style={{ margin: "10px" }} onClick={onCardClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="440"
            image={` https://img.youtube.com/vi/${
              store.courseDetails.link.map((v) => v.split("&")[0])[0]
            }/mqdefault.jpg`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {store.courseDetails.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {store.courseDetails.description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          {isEnrolled(store.courseDetails.users, onEnroll, onDelete)}
        </CardActions>
      </Card>

      <Card>
        <div className={classes.links} style={{ display: "inline-block" }}>
          <Grid container spacing={4}>
            {links.map((element) => (
              <Grid xs={6} sm={3} spacing={4}>
                <CardMedia
                  style={{ padding: "10px" }}
                  component="img"
                  alt="Contemplative Reptile"
                  height="100"
                  width="100"
                  image={`https://img.youtube.com/vi/${element}/mqdefault.jpg`}
                  title="Contemplative Reptile"
                  onClick={onClickLink.bind(element)}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Card>
    </Container>
  );
}

/**
 * Check if the current user is enrolled
 *
 * @param {users} users
 */
function isEnrolled(users = [], onEnroll, onDelete) {
  var uid = localStorage.getItem("uid");
  if (users.find((e) => e === uid)) {
    return (
      <Button size="small" color="primary" onClick={onDelete}>
        Delete
      </Button>
    );
  } else {
    return (
      <Button size="small" color="primary" onClick={onEnroll}>
        Enroll
      </Button>
    );
  }
}
