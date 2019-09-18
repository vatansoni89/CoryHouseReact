import React, { useState, useEffect } from "react";
//import { getCourses } from "../api/courseApi";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses } from "../actions/courseActions";

function CoursesPage() {
  //const [courses, setCourses] = useState([]); //useState Hook
  const [courses, setCourses] = useState(courseStore.getCourses());

  //Calling setCourses causes the compo to re-render, which caused useEffect to re-run.
  //The dependency array is a list of values that useEffect should watch. It re-runs when values in this array change.
  useEffect(() => {
    //useEffect Hook
    //getCourses().then(_courses => setCourses(_courses));
    courseStore.addChangeListener(onChange);
    //setCourses(courseStore.getCourses());
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange); // clean up on unmount (navigae to different page)
  }, []); // second arg [] is dependency array, which is observed after each fun call. it array don't have chage then no further re-render.

  ///
  //Since our component is connected to the flux store, when courses are added to the store, onChange will be called.
  ///
  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
