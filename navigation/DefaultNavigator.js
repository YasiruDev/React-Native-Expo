// This is our main navigation i have simply provided stack navigation example. You can add what ever requirement you have here
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register'
import MakeOrder from '../screens/MakeOrder'
import Checkout from '../screens/Checkout'
import Profile from '../screens/Profile'
import OrderHistory from '../screens/OrderHistory'
import BidsForOrder from '../screens/BidsForOrder'

const defaultNav = {
  header: null
};

const homeStackNav = createStackNavigator({
  Login: Login,
  Register: Register,
  Dashboard: Dashboard,
  MakeOrder:MakeOrder,
  Checkout:Checkout,
  Profile: Profile,
  OrderHistory:OrderHistory,
  BidsForOrder:BidsForOrder
}, {
    defaultNavigationOptions: defaultNav,

  })


export default createAppContainer(homeStackNav);