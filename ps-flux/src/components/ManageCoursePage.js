import React, { useState, useEffect } from "react";
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
//import * as courseApi from "../api/courseApi";
import courseStore from "../stores/courseStore";
import { toast } from "react-toastify";
import * as courseActions from "../actions/courseActions";

const ManageCoursepage = props => {
  //debugger;
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  // function handleTitleChange(event) {
  //   const updatedCourse = { ...course, title: event.target.value };
  //   setCourse(updatedCourse);
  // }

  useEffect(() => {
    debugger;
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    console.log("slug is: ", props.match.params.slug);

    //Course Page Refresh fix
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      //courseApi.getCourseBySlug(slug).then(_c => setCourse(_c));
      setCourse(courseStore.getCourseBySlug(slug));
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  function handleChange({ target }) {
    const updatedCourse = {
      ...course,
      [target.name]: target.value
    };
    setCourse(updatedCourse);
  }

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "authorId is required";
    if (!course.category) _errors.category = "category is required";

    setErrors(_errors);

    // valid if errors object has no properties.
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    // courseApi.saveCourse(course).then(() => {
    //   props.history.push("/courses");
    //   toast.success("Course saved with title: " + course.title);
    // });
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved with title: " + course.title);
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      {/* <Prompt when={true} message="Are you sure to leave???" /> */}
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursepage;
