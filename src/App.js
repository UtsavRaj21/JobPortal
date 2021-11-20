import './App.css';
import HomePage from './components/HomePage/HomePage';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import detail from './components/Detail/detail';
import Selected from './components/SelectedPage/Selected';
import Rejected from './components/Rejected/Rejected';

function App() {
  return (

    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/detail/:id" component={detail} />
          <Route exact path="/selected" component={Selected} />
          <Route exact path="/rejected" component={Rejected} />
        </Switch>
      </Router>
      {/* <HomePage/> */}
    </>



  );
}

export default App;
