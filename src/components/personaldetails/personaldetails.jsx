import React from "react";

export default (props) => {
  const { personalDetails } = props;

  return (
    <div>
      {personalDetails.map((detail) => {
        const { value, icon, key } = detail;
        const isAddress = value.includes("http") || value.includes("www");
        const isEmail = value.includes("@");
        return (
          <div>
            {isAddress && (
              <a href={value} target="_blank" rel="noreferrer">
                {value}
              </a>
            )}
            {isEmail && <a href={`mailto:${value}`}>{value}</a>}
            {!isAddress && !isEmail && <span>{value}</span>}
          </div>
        );
      })}
    </div>
  );
};
