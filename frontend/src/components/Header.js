import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
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
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Educate-India
          </Typography>

          <div className={classes.grow} />
          <Button color="primary">
            <Link to="/">
              <li>Home</li>
            </Link>
          </Button>

          <Button edge="start" color="inherit" aria-label="menu">
            <Link to="/signup">
              <li>Signup</li>
            </Link>
          </Button>

          <Button edge="start" color="inherit" aria-label="menu">
            <Link to="/login">
              <li>Login</li>
            </Link>
          </Button>

          <Button edge="start" color="inherit" aria-label="menu">
            <Link to="/player">
              <li>Player</li>
            </Link>
          </Button>

          <Button edge="start" color="inherit" aria-label="menu">
            <Link to="/all-courses">
              <li>All Courses</li>
            </Link>
          </Button>

          <Button edge="start" color="inherit" aria-label="menu">
            <Link to="/course">
              <li>Course</li>
            </Link>
          </Button>
        </Toolbar>
        <div>{progressBarComponent(progressBar.isVisible)}</div>
      </AppBar>
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
