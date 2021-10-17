import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Auth from './Pages/Auth';
import './css/main.css'
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './Pages/Dashboard';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MyPostsPage from './Pages/MyPostsPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router basename="/crud/">
        <Nav />
        <div className='body-main'>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/auth" component={Auth} />
            <ProtectedRoute path='/dashboard' component={Dashboard} />
            <Route path='/myposts' component={MyPostsPage} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
