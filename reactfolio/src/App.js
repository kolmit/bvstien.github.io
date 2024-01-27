import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import './App.css';
import Feed from './feed/Feed';
import Telecommande from "./projectTile/telecommande/Telecommande";
import FitnessPerfs from "./projectTile/fitnessperfs/FitnessPerfs";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Feed} />
        <Route path="/telecommande" component={Telecommande} />
        <Route path="/fitnessperfs" component={FitnessPerfs} />
      </Switch>
    </Router>
  );
}

export default App;
