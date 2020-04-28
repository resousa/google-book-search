import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Nav from './components/Nav';
import React from 'react';

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Search} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/saved" component={Saved} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
