import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect, useHistory
} from "react-router-dom";

//import routes
import Login from './screens/auth/login'
import SignUp from './screens/auth/sign-up'
import ForgetPw from './screens/auth/forget-pw'
import ResetPw from './screens/auth/reset-pw'
import Suc from './screens/home/index'


const Routes = () => {

    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const history = useHistory();


    useEffect(() => {
        checkLoginAndNavigate()
    }, [])

    const checkLoginAndNavigate = () => {
        let token = localStorage.getItem('TOKEN')

        // window.location.replace(token ? '/home/index' : '/auth/login')
    }

    return (
        <Router>
 
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return (
                                isUserAuthenticated ?
                                    <Redirect to="/home/index" /> :
                                    <Redirect to="/auth/login" />
                            )
                        }}
                    />
                    <Route path="/auth/login">
                        <Login />
                    </Route>
                    <Route path="/auth/sign-up">
                        <SignUp />
                    </Route>
                    <Route path="/auth/forget-pw">
                        <ForgetPw />
                    </Route>
                    <Route path="/auth/reset-pw/:token">
                        <ResetPw />
                    </Route>
                    <Route path="/home/index">
                        <Suc />
                    </Route>
                </Switch>
        
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