import React, { useState } from "react";
// import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";

const ManageCoursepage = props => {
  //debugger;
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

  function handleChange(event) {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value
    };
    setCourse(updatedCourse);
  }

  return (
    <>
      <h2>Manage Course</h2>
      {/* <Prompt when={true} message="Are you sure to leave???" /> */}
      <CourseForm course={course} onChange={handleChange} />
    </>
  );
};

export default ManageCoursepage;
