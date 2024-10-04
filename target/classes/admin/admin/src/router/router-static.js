import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import anquan from '@/views/modules/anquan/list'
    import cunchu from '@/views/modules/cunchu/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import shiji from '@/views/modules/shiji/list'
    import shijiChuruInout from '@/views/modules/shijiChuruInout/list'
    import shijiChuruInoutList from '@/views/modules/shijiChuruInoutList/list'
    import shiyong from '@/views/modules/shiyong/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dictionaryAnquan from '@/views/modules/dictionaryAnquan/list'
    import dictionaryCunchu from '@/views/modules/dictionaryCunchu/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShiji from '@/views/modules/dictionaryShiji/list'
    import dictionaryShijiChuruInout from '@/views/modules/dictionaryShijiChuruInout/list'
    import dictionaryShiyong from '@/views/modules/dictionaryShiyong/list'
    import dictionaryShiyongYesno from '@/views/modules/dictionaryShiyongYesno/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryAnquan',
        name: '危险程度',
        component: dictionaryAnquan
    }
    ,{
        path: '/dictionaryCunchu',
        name: '存储类型',
        component: dictionaryCunchu
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShiji',
        name: '试剂类型',
        component: dictionaryShiji
    }
    ,{
        path: '/dictionaryShijiChuruInout',
        name: '出入库类型',
        component: dictionaryShijiChuruInout
    }
    ,{
        path: '/dictionaryShiyong',
        name: '使用记录类型',
        component: dictionaryShiyong
    }
    ,{
        path: '/dictionaryShiyongYesno',
        name: '申请状态',
        component: dictionaryShiyongYesno
    }


    ,{
        path: '/anquan',
        name: '安全',
        component: anquan
      }
    ,{
        path: '/cunchu',
        name: '存储',
        component: cunchu
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告资讯',
        component: gonggao
      }
    ,{
        path: '/shiji',
        name: '试剂',
        component: shiji
      }
    ,{
        path: '/shijiChuruInout',
        name: '出入库',
        component: shijiChuruInout
      }
    ,{
        path: '/shijiChuruInoutList',
        name: '出入库详情',
        component: shijiChuruInoutList
      }
    ,{
        path: '/shiyong',
        name: '使用记录',
        component: shiyong
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
