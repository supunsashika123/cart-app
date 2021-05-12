
//import routes
// import Login from './screens/auth/login'
import SignUp from './screens/auth/sign-up'
import ForgetPw from './screens/auth/forget-pw'
import ResetPw from './screens/auth/reset-pw'
import Suc from './screens/home/index'

//customer routes
import Login from './pages/auth/login'
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
]

export { authRoutes, userRoutes, adminRoutes };
