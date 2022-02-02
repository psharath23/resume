import "./styles.scss";
import "bootstrap";
import { frontendDetails, fullstackDetails } from "./details";
import Homepage from "./pages/homepage/homepage";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Resume from "./components/resume/resume";
import Resumes from "./pages/resumes/resumes";
import CoverLetters from "./pages/coverletters/coverletters";
import CoverLetter from "./components/coverletter/coverletter";
export default function App() {
  let role = "fullstack";
  let details = {};
  switch (role) {
    case "fullstack":
      details = fullstackDetails;
      break;
    case "frontend":
      details = frontendDetails;
      break;
    default:
      details = {};
  }

  const history = createBrowserHistory();
  return (
    <div className="App bg-gradient m-3">
      <Router history={history}>
        <Route path="/" exact={true} component={Homepage} />
        <Route path="/resumes" exact={true} component={Resumes} />
        <Route path="/resumes/:role" component={Resume} />
        <Route path="/coverletters" exact={true} component={CoverLetters} />
        <Route path="/coverletters/:role" component={CoverLetter} />
      </Router>
    </div>
  );
}
