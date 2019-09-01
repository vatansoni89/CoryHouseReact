import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h2>
        Page Not Found
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </h2>
    </div>
  );
}

export default NotFoundPage;
