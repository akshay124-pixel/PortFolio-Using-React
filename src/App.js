import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Components/Menu";
function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
        <Route exact path="/Resume">
          <Resume />
        </Route>
        <Route exact path="/Skills">
          <Skills />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/Menu">
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
