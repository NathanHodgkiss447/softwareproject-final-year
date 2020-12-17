import "./Styles/App.scss";
import "./Styles/SidebarResource.scss";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import Resources from "./Components/Resources";
import SidebarResource from "./Components/SidebarResource";
import Journal from "./Components/Journal";
import alanBtn from "@alan-ai/alan-sdk-web";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";

const alanKey =
  "b676a44263567b4d0d7478389dbdec362e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ testCommand }) => {
        alert("Test code was exected");
      },
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />

        <div className="app_body">
          <Sidebar />

          <Switch>
            <Route path="/resources">
              <Resources />
            </Route>
          </Switch>

          <Switch>
            <Route path="/journal">
              <Journal />
            </Route>
          </Switch>

          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/"></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
