import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import { Header, Footer, Loading, OstMask } from "../components";

const LoadingC = () => {
  return <Loading isLoading={true} />;
};

const OstMaskC = () => {
  return <OstMask show={true} />;
};

function BasicExample() {
  return (
    <Router>
      <div>
        <h1>Orcrist-UI Components: </h1>
        <ul>
          <li>
            <Link to="/header">Header</Link>
          </li>
          <li>
            <Link to="/Footer">Footer</Link>
          </li>
          <li>
            <Link to="/Loading">Loading</Link>
          </li>
          <li>
            <Link to="/mask">mask</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={Header}></Route>
          <Route path="/header" component={Header}></Route>
          <Route path="/footer" component={Footer}></Route>
          <Route path="/Loading" component={LoadingC}></Route>
          <Route path="/mask" component={OstMaskC}></Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

ReactDOM.render(<BasicExample />, document.getElementById("app"));
