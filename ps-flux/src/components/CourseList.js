import React from "react";
import PropTypes from "prop-types";

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(c => {
          return (
            <tr key={c.id}>
              <td>{c.title}</td>
              <td>{c.authorId}</td>
              <td>{c.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

//If required then
CourseList.defaultProps = {
  courses: []
};

export default CourseList;
