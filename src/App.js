import "./Styles/App.scss";
import "./Styles/SidebarResource.scss";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import Resources from "./Components/Resources";
import SidebarResource from "./Components/SidebarResource";
import Journal from "./Components/Journal";
import Note from "./Components/Note";
import alanBtn from "@alan-ai/alan-sdk-web";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import React, { useEffect, useState } from "react";
import JournalEntry from "./Components/JournalEntry";

const alanKey =
  "b676a44263567b4d0d7478389dbdec362e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ testCommand }) => {
        alert("Test code was exected");
      },
    });
  }, []);

  useEffect(() => {
    document.title = "Smart Coding Journal";
    <Switch>
      <Route path="/journalEntry">
        <JournalEntry />
      </Route>
    </Switch>;
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <>
            <Login />
          </>
        ) : (
          //Fragment - Need to wrap as two sibling beside each other
          <>
            <Header />

            <div className="app_body">
              <Sidebar />

              <Route exact path="/">
                <Redirect to="/home" />
              </Route>

              <Switch>
                <Route path="/home">
                  <JournalEntry />
                </Route>
              </Switch>

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
                <Route path="/journalEntry">
                  <JournalEntry />
                </Route>
              </Switch>

              <Switch>
                <Route path="/journal-notes">
                  <Note />
                </Route>
              </Switch>

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/"></Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
      )
    </div>
  );
}

export default App;
