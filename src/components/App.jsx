import React from 'react';
import MovieDetails from '@components/details';
import Home from '@components/home';
import NotFoundPage from '@components/notFound'
import ErrorBoundary from '@components/error';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const App = () => {
    return (
        <ErrorBoundary>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/search" />
                    </Route>
                    <Route path={['/search/:query', '/search/']} component={Home} />
                    <Route exact path="/search?movie=:id" component={MovieDetails} />
                    <Route path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        </ErrorBoundary>
    )
}

export default App;
