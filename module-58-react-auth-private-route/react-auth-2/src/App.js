import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Album from './components/Album/Album';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Posts from './components/Posts/Posts';
import Register from './components/Register/Register';
import UserDetails from './components/UserDetails/UserDetails';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route exact path="/album">
            <Album />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/userDetails">
            <UserDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
