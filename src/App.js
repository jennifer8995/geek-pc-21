import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Login from './pages/Login/Login';
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Link to="/login">Login</Link>
        <Link to="/home">Home</Link> */}
        <Switch>
          <Route path="/home" component={Layout}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
