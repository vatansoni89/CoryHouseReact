import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  //Calling setCourses causes the compo to re-render, which caused useEffect to re-run.
  //The dependency array is a list of values that useEffect should watch. It re-runs when values in this array change.
  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(c => {
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
    </>
  );
}

export default CoursesPage;
