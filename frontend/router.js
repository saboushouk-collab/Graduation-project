import Login from './components/Login.js'
import Dashboard from './components/Dashboard.js'
import Inventory from './components/Inventory.js'
import Sales from './components/Sales.js'

const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/inventory', component: Inventory },
  { path: '/sales', component: Sales }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes
})

export default router

