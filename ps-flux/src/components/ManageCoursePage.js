import React from "react";
import { Prompt } from "react-router-dom";

const ManageCoursepage = props => {
  //debugger;
  return (
    <>
      <h2>Manage Course</h2>
      <Prompt when={true} message="Are you sure to leave???" />
      {props.match.params.slug}
    </>
  );
};

export default ManageCoursepage;
