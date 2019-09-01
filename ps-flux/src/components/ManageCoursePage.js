import React from "react";

const ManageCoursepage = props => {
  //debugger;
  return (
    <>
      <h2>Manage Course</h2>
      {props.match.params.slug}
    </>
  );
};

export default ManageCoursepage;
