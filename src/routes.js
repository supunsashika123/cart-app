//customer routes
import Login from './pages/auth/login'
import Signup from './pages/auth/sign-up'
import Forgetpass from './pages/auth/forget-pw'
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
    { path: "/signup", component: Signup },
    { path: "/forgetpass", component: Forgetpass },
    { path: "/resetpass/:token", component: Resetpass },
]

export { authRoutes, userRoutes, adminRoutes };
