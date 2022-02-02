import React, { useEffect, useMemo, createRef } from "react";
import Header from "./../header/header";
import Summary from "./../summary/summary";
import ExperienceList from "./../experiencelist/experiencelist";
import EducationList from "./../educationlist/educationlist";
import TechStack from "./../techstack/techstack";
import { resumes } from "./../../details";
import { useLocation, useRouteMatch } from "react-router-dom";
import querystring from "query-string";
export default () => {
  const match = useRouteMatch();
  const location = useLocation();
  const resumeRef = createRef();

  const details = useMemo(() => {
    const { role } = match.params;
    const parsed = querystring.parse(location.search);
    const { email = "", phone = "" } = parsed;
    const r = resumes.find((resume) => resume.id === role);
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

  const d = document;
  useEffect(() => {
    window.setTimeout(() => {
      for (let a of d.getElementsByTagName("a")) {
        console.log(a);
        if (a.text.toLowerCase().includes("sandbox")) {
          document.removeChild(a);
        }
      }
    }, 2000);

    // print();
    // }
  }, [d]);

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
    <div className="resume bg-light m-3 p-3" ref={resumeRef}>
      <Header name={name} role={role} personalDetails={personalDetails} />
      <div className="p-2">
        <Summary summary={summary} />
        <ExperienceList experiences={experiences} />
        <EducationList educations={educations} />
        <TechStack techStack={techStack} />
      </div>
    </div>
  );
};
