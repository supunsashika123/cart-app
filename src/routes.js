import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect, useHistory
} from "react-router-dom";

//import routes
import Login from './screens/auth/login'

const Routes = () => {

    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const history = useHistory();


    useEffect(() => {
        checkLoginAndNavigate()
    }, [])

    const checkLoginAndNavigate = () => {
        let token = localStorage.getItem('TOKEN')

        // window.location.replace(token ? '/home' : '/auth/login')
    }

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/auth/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return (
                                isUserAuthenticated ?
                                    <Redirect to="/home" /> :
                                    <Redirect to="/auth/login" />
                            )
                        }}
                    />
                    <Route path="/auth/login">
                        <Login />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default Routes;