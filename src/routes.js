//customer routes
import Login from './pages/auth/login'
import Signup from './pages/auth/sign-up'
import Forgotpass from './pages/auth/forgot-pw'
import Resetpass from './pages/auth/reset-pw'
import Home from './pages/home/index'

//admin routes
import AddFood from './pages/admin/addFood'
import Foods from './pages/admin/foods'

const userRoutes = [
    { path: "/home", component: Home },
]

const adminRoutes = [
    { path: "/admin/new-product", component: AddFood },
    { path: "/admin/products", component: Foods },
]

const authRoutes = [
    { path: "/login", component: Login },
    { path: "/sign-up", component: Signup },
    { path: "/forgot-password", component: Forgotpass },
    { path: "/reset-password/:token", component: Resetpass },
]

export { authRoutes, userRoutes, adminRoutes };
