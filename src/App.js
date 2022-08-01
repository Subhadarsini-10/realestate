import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import { Page } from "./components/Page";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Page />
    </div>
  );
}

export default App;
