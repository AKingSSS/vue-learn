import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = ()=> import("../views/home/Home");
const Category = ()=> import("../views/category/Category")
const Cart = ()=> import("../views/cart/Cart")
const Profile = ()=> import("../views/profile/Profile")

export default new Router({
  routes: [
    {
      path:"",
      redirect:"/home"
    },
    {
      path:"/category",
      component:Category
    },
    {
      path:"/cart",
      component:Cart
    },
    {
      path:"/home",
      component:Home
    },
    {
      path:"/profile",
      component:Profile
    }
  ],
  mode:'history'
})
