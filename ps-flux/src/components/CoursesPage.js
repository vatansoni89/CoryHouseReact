import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  state = {
    courses: []
  };

  componentDidMount() {
    getCourses().then(courses => this.setState({ courses: courses }));
  }

  render() {
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
            {this.state.courses.map(c => {
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
}

export default CoursesPage;
