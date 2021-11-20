import './App.css';
import React, { createContext } from 'react';
import HomePage from './components/HomePage/HomePage';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import detail from './components/Detail/detail';
import Selected from './components/SelectedPage/Selected';
import Rejected from './components/Rejected/Rejected';

const selected = createContext();
const rejected = createContext();
export{selected,rejected};
function App() {
  return (

    <>
      <selected.Provider value={[]}>
        <rejected.Provider value={[]}>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/detail/:id" component={detail} />
              <Route exact path="/selected" component={Selected} />
              <Route exact path="/rejected" component={Rejected} />
            </Switch>
          </Router>
        </rejected.Provider>
      </selected.Provider>

      {/* <HomePage/> */}
    </>



  );
}

export default App;
