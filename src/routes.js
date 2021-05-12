
//customer routes
import Login from './pages/auth/login'
import Home from './pages/home/index'

//admin routes
import AddProduct from './pages/admin/addProduct'

const userRoutes = [
    { path: "/home", component: Home },
]

const adminRoutes = [
    { path: "/admin/new-product", component: AddProduct },
]

const authRoutes = [
    { path: "/login", component: Login },
]

export { authRoutes, userRoutes, adminRoutes };