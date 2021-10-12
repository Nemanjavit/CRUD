import Register from './Pages/Register';
import './App.css';
import LogIn from './Pages/LogIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Protected from './Pages/Protected';

function App() {
  return (

    <div className="App">
      <Router basename="/crud/">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/logIn" component={LogIn} />
          <Route path="/register" component={Register} />
          <Route path='/protected' component={Protected} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
