import React, { Component } from "react";

import { Link } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Button,
} from "@material-ui/core";

export default class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
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
        </Toolbar>
      </AppBar>
    );
  }
}
