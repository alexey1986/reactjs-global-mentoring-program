import React from 'react';
import MovieDetails from 'components/details';
import Home from 'components/home';
import NotFoundPage from 'components/404'
import ErrorBoundary from 'components/error';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

// NOTE: Replace App component to src/components/App.jsx.
// No need to create a separate folder to keep app.js

// NOTE: Add useCallback hook usage at least 5 times

const App = () => {
    return (
        <ErrorBoundary>
            <Router>
                <Switch>
                    {/* NOTE: Implement task 8 :) */}
                    <Route exact path='/' component={Home} />
                    <Route exact path="/search/:query" component={Home} />
                    <Route path={['/search/:query', '/search/']} component={Home} />
                    <Route exact path="/film/:id" component={MovieDetails} />
                    {/* NOTE: Rename 404 folder and files to "NotFound" as an example. Don't name files like numbers */}
                    <Route path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        </ErrorBoundary>
    )
}

export default App;
