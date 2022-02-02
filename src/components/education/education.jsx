import React from "react";

export default (props) => {
  const { education } = props;
  const {
    startYear,
    startMonth,
    endYear,
    endMonth,
    universityName,
    universityAddress,
    degree,
    major
  } = education;

  let start = `${startMonth} ${startYear}`;
  let end = `${endMonth} ${endYear}`;
  end = end.trim().length > 0 ? end : "present";

  return (
    <div className="education">
      <div className="row">
        <div className="col-lg-12">
          <div className="w-100 d-flex align-items-center justify-content-between">
            <h5>
              {start} - {end}
            </h5>
            <div className="text-end">
              <h5>
                {degree} in {major}
              </h5>
              <h5>
                {universityName}, {universityAddress}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
