import { Link } from "react-router-dom";
import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

/**
 * Header
 */
export default function Header() {
  const progressBar = useSelector((store) => store.progressRoot);
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: "#37474f" }}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Educate-India
          </Typography>

          <div className={classes.grow} />
          {link("signup", "Signup")}
          {link("login", "Login")}
          {link("all-courses", "All Courses")}
          {link("course", "Course")}
          {link("my-courses", "My Courses")}
        </Toolbar>
      </AppBar>
      <div>{progressBarComponent(progressBar.isVisible)}</div>
    </div>
  );
}

/**
 * Progress Bar
 *
 * @param {progressBar visibility} isVisible
 */
function progressBarComponent(isVisible) {
  if (isVisible) return <LinearProgress />;
  else return <div></div>;
}

/**
 *
 * @param {destination route} to
 * @param {Label} label
 */
function link(to, label) {
  return (
    <Link to={`/${to}`}>
      <h3 style={{ color: "white", padding: "10px" }}>{label}</h3>
    </Link>
  );
}
