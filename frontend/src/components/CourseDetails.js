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
import { viewCourse } from "../redux/actions/courseAction";
import { useHistory, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

export default function CourseDetails(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((store) => store.coursesRoot);

  const onCardClick = (e) => {
    e.preventDefault();
    dispatch(viewCourse(store.courseDetails, history));
  };

  return (
    <Container maxWidth="md">
      <Card maxWidth style={{ margin: "10px" }} onClick={onCardClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="440"
            image="https://loremflickr.com/320/240"
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
          <Button size="small" color="primary">
            Enroll
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
