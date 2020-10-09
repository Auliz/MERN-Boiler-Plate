import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/signup';
import SignIn from './components/signin';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
