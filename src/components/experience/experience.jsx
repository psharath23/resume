import React from "react";

export default (props) => {
  const { experience } = props;
  const {
    startYear,
    startMonth,
    endYear,
    endMonth,
    companyName,
    companyAddress,
    role,
    description = []
  } = experience;

  let start = `${startMonth} ${startYear}`;
  let end = `${endMonth} ${endYear}`;
  end = end.trim().length > 0 ? end : "present";

  return (
    <div className="experience mb-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="w-100 d-flex align-items-center justify-content-between">
            <h5>
              {start} - {end}
            </h5>
            <div className="text-end">
              <h4>{role}</h4>
              <h4>
                {companyName}, {companyAddress}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="pl-2">
            {description
              .filter((d) => d.trim().length > 0)
              .map((desc) => {
                return <li className="fs-6 text-start">{desc}</li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
