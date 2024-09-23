import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Profile from './components/Profile';
import Account from './components/Account'; // Import Account page
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Registration} />
                    <ProtectedRoute path="/profile" component={Profile} />
                    <ProtectedRoute path="/account" component={Account} /> {/* Add Account route */}
                    <Route exact path="/" component={Login} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
