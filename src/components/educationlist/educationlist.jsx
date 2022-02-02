import React from "react";
import Education from "./../education/education";
export default (props) => {
  const { educations = [] } = props;
  if (educations.length === 0) {
    return <div></div>;
  }
  return (
    <div className="education-list mt-2 mb-2">
      <div className="row">
        <div className="col-lg-12">
          <h4 className="text-primary font-weight-bold">Education</h4>
        </div>
      </div>
      <div className="">
        {educations.map((edu) => {
          return <Education education={edu} />;
        })}
      </div>
    </div>
  );
};
