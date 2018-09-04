import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main.vue'
import Login from '@/components/Login.vue'

Vue.use(Router)  //注册vue-router


export default new Router({
  routes: [
    {
      path: '/',  //主显示模块
      name: 'Main',
      component: Main
    },{
    	path:'/login',   //同一个目录下面为啥 path路径有要写的
    	name:'Login',
    	component:Login
    }
  ]
})
