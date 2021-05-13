
//customer routes
import Login from './pages/auth/login'
import Home from './pages/home/index'

//admin routes
import AddFood from './pages/admin/addFood'
import Foods from './pages/admin/foods'
import FoodOrders from './pages/admin/orders'

const userRoutes = [
    { path: "/home", component: Home },
]

const adminRoutes = [
    { path: "/admin/new-product", component: AddFood },
    { path: "/admin/products", component: Foods },
    { path: "/admin/orders", component: FoodOrders },
]

const authRoutes = [
    { path: "/login", component: Login },
]

export { authRoutes, userRoutes, adminRoutes };
