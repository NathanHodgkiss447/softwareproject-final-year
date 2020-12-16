import "./Styles/App.scss";
import "./Styles/SidebarResource.scss";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import Resources from "./Components/Resources";
import SidebarResource from "./Components/SidebarResource";
import Journal from "./Components/Journal";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
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
