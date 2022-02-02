import React from "react";

export default (props) => {
  const { summary } = props;
  return (
    <div className="summary">
      <div className="row">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="text-primary font-weight-bold">Summary</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="ml-2 mr-2 text-start">{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
