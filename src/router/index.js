import Vue from 'vue'
import Router from 'vue-router'
//@表示根目录，找根目录下的components目录，里面的HelloWorld组件
import HelloWorld from '@/components/HelloWorld'
//导入自己的自定义组件
import Hello from '@/components/Hello'
//导入自定义表格
import MyTable from '@/components/MyTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/hello",
      name: "Hello",
      component: Hello
    },
    {
      path: "/table",
      name: "MyTable",
      component: MyTable
    }
  ]
})
