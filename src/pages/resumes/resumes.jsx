import React from "react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div>
      <div className="list-group">
        <div className="list-group-item">
          <Link to="/resumes/frontend">Frontend Developer</Link>
        </div>
        <div className="list-group-item">
          <Link to="/resumes/fullstack">Fullstack Developer</Link>
        </div>
      </div>
    </div>
  );
};
