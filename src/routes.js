//import routes
import Login from './pages/auth/login'

import Home from './pages/home/index'

const userRoutes = [
    { path: "/home", component: Home },
]

const authRoutes = [
    { path: "/login", component: Login },
]

export { authRoutes, userRoutes };