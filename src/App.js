import React, { useEffect } from "react"
import { userRoutes, authRoutes } from "./routes"
import { Switch, BrowserRouter as Router } from "react-router-dom"

import DashboardLayout from "./layouts/DashboardLayout"
import AuthLayout from "./layouts/AuthLayout"
import Authmiddleware from "./middlewares/AuthMiddleware"

const App = props => {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    {authRoutes.map((route, idx) => (
                        <Authmiddleware
                            path={route.path}
                            layout={AuthLayout}
                            component={route.component}
                            key={idx}
                            isAuthProtected={false}
                        />
                    ))}

                    {userRoutes.map((route, idx) => (
                        <Authmiddleware
                            path={route.path}
                            layout={DashboardLayout}
                            component={route.component}
                            key={idx}
                            isAuthProtected={true}
                            exact
                        />
                    ))}
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default App;