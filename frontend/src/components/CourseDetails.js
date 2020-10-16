import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { viewCourse, enroll } from "../redux/actions/courseAction";
import { useHistory, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

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
   *
   * @param {link click listener} e
   */
  function onClickLink(e) {
    e.preventDefault();
    dispatch(viewCourse(store.courseDetails, this, history));
  }

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
          <Button size="small" color="primary" onClick={onEnroll}>
            Enroll
          </Button>
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
