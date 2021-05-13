//customer routes
import Login from './pages/auth/login'
import Signup from './pages/auth/sign-up'
import Forgotpass from './pages/auth/forgot-pw'
import Resetpass from './pages/auth/reset-pw'
import FoodItems from './pages/foodItems'
import Cart from './pages/cart'
import Order from './pages/orders'
import Product from './pages/product'

//admin routes
import AddFood from './pages/admin/addFood'
import Foods from './pages/admin/foods'
import FoodOrders from './pages/admin/orders'

const userRoutes = [
  { path: "/", component: FoodItems },
  { path: "/cart", component: Cart },
  { path: "/orders", component: Order },
  { path: "/product", component: Product },
]

const adminRoutes = [
    { path: "/admin/new-product", component: AddFood },
    { path: "/admin/products", component: Foods },
    { path: "/admin/orders", component: FoodOrders },
]

const authRoutes = [
  { path: "/login", component: Login },
  { path: "/sign-up", component: Signup },
  { path: "/forgot-password", component: Forgotpass },
  { path: "/reset-password/:token", component: Resetpass },
]

export { authRoutes, userRoutes, adminRoutes };
