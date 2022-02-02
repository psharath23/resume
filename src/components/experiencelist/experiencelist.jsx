import React from "react";
import Experience from "./../experience/experience";
export default (props) => {
  const { experiences } = props;
  if (experiences.length === 0) {
    return <div></div>;
  }
  return (
    <div className="experience-list mt-2 mb-2">
      <div className="row">
        <div className="col-lg-12">
          <h4 className="text-primary font-weight-bold">Experience</h4>
        </div>
      </div>
      <div className="">
        {experiences.map((exp) => {
          return <Experience experience={exp} />;
        })}
      </div>
    </div>
  );
};
