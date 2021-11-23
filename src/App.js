import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Home from "./Pages/Home/Home";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/navigation">
            <Navigation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>


      </Router>
      

    </div>
  );
}

export default App;
