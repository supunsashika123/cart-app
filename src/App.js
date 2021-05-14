import React from "react"
import { userRoutes, authRoutes, adminRoutes } from "./routes"
import { Switch, BrowserRouter as Router } from "react-router-dom"

import DashboardLayout from "./layouts/DashboardLayout"
import AuthLayout from "./layouts/AuthLayout"
import CustomerLayout from "./layouts/CustomerLayout"
import Authmiddleware from "./middlewares/AuthMiddleware"

import "./assets/scss/theme.scss"


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
              layout={CustomerLayout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}

          {adminRoutes.map((route, idx) => (
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
