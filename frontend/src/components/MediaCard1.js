import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard1(props) {
  const classes = useStyles({
    root: {
      padding: "10px",
      margin: "10px",
    },
  });

  return (
    <div
      style={{ margin: "10px" }}
      onClick={props.onClick.bind(props.id)}
      key={props.key}
      id={props.id}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`https://img.youtube.com/vi/${props.videoId}/mqdefault.jpg`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
    </div>
  );
}
