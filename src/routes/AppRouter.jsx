import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import Header from '../components/Header';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
    return (
        <Router >
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route path="/" component={NotFound} />
            </Switch>
        </Router>
    )
}

export default AppRouter
