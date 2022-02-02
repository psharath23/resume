import React from "react";

export default (props) => {
  const { techStack = [] } = props;

  if (techStack.length === 0) {
    return <div></div>;
  }
  return (
    <div className="techstack-list mt-2 mb-2 w-100">
      <div className="row">
        <div className="col-lg-12">
          <h4 className="text-primary font-weight-bold">Tech Stack</h4>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {techStack.map((exp) => {
          return (
            <div className="badge rounded-pill bg-light border border-secondary text-dark m-2">
              {exp}
            </div>
          );
        })}
      </div>
    </div>
  );
};
