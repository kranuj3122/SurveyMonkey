import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "./logo.png";
import Menu from "./Menu";
import CreateSurvey from "./CreateSurvey";
import TakeSurvey from "./TakeSurvey";
import { useState } from "react";
function App() {
  const [squestion, setSquestion] = useState([]);
  return (
    <div className="col-md-10 offset-md-1 col-12 text-center">
      <Router>
        <Link to="/">
          <img className="col-md-6" src={Logo} alt="logo" />
        </Link>
        <Switch>
          <Route path="/" exact>
            <Menu />{" "}
          </Route>
          <Route path="/create-survey" exact>
            <CreateSurvey
              squestions={squestion}
              setSquestion={setSquestion}
            ></CreateSurvey>
          </Route>
          <Route path="/take-survey" exact>
            <TakeSurvey queston={squestion}></TakeSurvey>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
