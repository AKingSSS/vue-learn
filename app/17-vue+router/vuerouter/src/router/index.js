// 配置路由相关的信息
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
// import User from '../components/User' // 懒加载先注释

// 懒加载 es6 写法
const User = () => import('../components/User')
const HomeMessage = () => import('../components/HomeMessage')
const HomeNews = () => import('../components/HomeNews')
const Profile = () => import('../components/Profile')


// 1.通过vue.use(插件)，安装插件
Vue.use(Router)

// 2.创建router对象
const routes = [
  {
    path: '',
    // 重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: "首页"
    },
    children: [
      {
        path: "news",
        component: HomeNews,
        meta: {
          title: "新闻"
        },
      }
      ,
      {
        path: "message",
        component: HomeMessage,
        meta: {
          title: "消息"
        },
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: "关于"
    },
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: "用户"
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: "档案"
    },
  },
]
const router = new Router({
  // 配置路由和组件之间的映射关系
  routes,
  mode: 'history'
})

// 3.将 router 对象传入到 vue 实例中
export default router

// 4.在 main.js 中导入 router

// 前置钩子
router.beforeEach(((to, from, next) => {
  document.title = to.meta.title;
  next();
}))
