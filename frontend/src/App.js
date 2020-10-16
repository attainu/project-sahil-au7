import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AllCourses from "./components/AllCourses";
import Course from "./components/Course";
import CourseDetails from "./components/CourseDetails";
import Header from "./components/Header.js";
import Login from "./components/Login";
import Logout from "./components/Logout";
import MyCourses from "./components/MyCourses";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/Signup";

function App() {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  };
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={AllCourses} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <PrivateRoute path="/course" exact component={Course} />
        <PrivateRoute path="/all-courses" exact component={AllCourses} />
        <PrivateRoute path="/course-details" exact component={CourseDetails} />
        <PrivateRoute path="/my-courses" exact component={MyCourses} />
      </Switch>
    </Router>
  );
}

export default App;
