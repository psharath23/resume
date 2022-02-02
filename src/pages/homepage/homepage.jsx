import React from "react";
import { Link, useHistory } from "react-router-dom";
export default () => {
  return (
    <div>
      <div className="list-group">
        <div className="list-group-item">
          <Link to="/resumes">Resumes</Link>
        </div>
        <div className="list-group-item">
          <Link to="/coverletters/">Cover Letter</Link>
        </div>
      </div>
    </div>
  );
};
