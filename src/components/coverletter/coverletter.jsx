import React, { useEffect, useMemo, createRef } from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import Header from "./../header/header";
import { coverLetters } from "./../../details";
import querystring from "query-string";
import CoverLetterSummary from "./../coverlettersummary/coverlettersummary";

export default () => {
  const match = useRouteMatch();
  const location = useLocation();
  const resumeRef = createRef();

  const details = useMemo(() => {
    const { role } = match.params;
    const parsed = querystring.parse(location.search);
    const { email = "", phone = "" } = parsed;
    const r = coverLetters.find((coverLetter) => coverLetter.id === role);
    if (r) {
      console.log(r);
      r.personalDetails = r.personalDetails.map((detail) => {
        if (detail.key === "email") {
          detail.value = email;
        }
        if (detail.key === "phone") {
          detail.value = phone;
        }
        return detail;
      });
      return r;
    }
    return {};
  }, [match, location]);

  const {
    personalDetails = [],
    name = "",
    role = "",
    summary = "",
    experiences = [],
    educations = [],
    techStack = []
  } = details;

  return (
    <div>
      <div className="resume bg-light m-3 p-3" ref={resumeRef}>
        <Header name={name} role={role} personalDetails={personalDetails} />
        <div className="p-2">
          <CoverLetterSummary summary={summary} />
        </div>
      </div>
    </div>
  );
};
