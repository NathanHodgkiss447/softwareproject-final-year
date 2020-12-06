import "./Styles/App.scss";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
