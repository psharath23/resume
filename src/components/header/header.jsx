import React from "react";
import PersonalDetails from "./../personaldetails/personaldetails";
import photo from "./../../media/photo.jpg";
export default (props) => {
  const {
    name = "candidate name",
    role = "candidate role",
    personalDetails = []
  } = props;
  // const photo = require("./../../media/photo.jpg");
  return (
    <div className="header">
      <div className="d-flex align-items-center justify-content-between">
        <div className="">
          <img src={photo} alt={name} className="rounded-circle w-50 p-3" />
        </div>
        <div className="w-75">
          <div className="d-flex flex-column justify-content-center h-100">
            <h2 className="text-uppercase font-weight-bold">{name}</h2>
            <h6>{role}</h6>
          </div>
        </div>
        <div className="text-end pe-2">
          <div className="">
            <PersonalDetails personalDetails={personalDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};
