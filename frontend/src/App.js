import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Player from "./components/Player";
import Course from "./components/Course";
import CourseDetails from "./components/CourseDetails";
import AllCourses from "./components/AllCourses";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/course" exact component={Course} />
        <PrivateRoute path="/all-courses" exact component={AllCourses} />
        <PrivateRoute path="/course-details" exact component={CourseDetails} />
      </Switch>
    </Router>
  );
}

export default App;
