import Vue from 'vue'
import Util from '../common/util'
import Filters from '../common/filter'
import Global from '../common/global'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import homeindex from '@/views/home/homeindex'

import Detail from '@/views/product/detail'
import helpcenter from '@/views/service/helpcenter'
import logistics from '@/views/service/logistics'
import orderconfirm from '@/views/product/orderconfirm'
import cashier from '@/views/product/cashier'
import orderlist from '@/views/user/order/orderlist'
import invioceDetail from '@/views/user/order/invioceDetail'
import equity from '@/views/user/person/equity'

import orderDetail from '@/views/user/order/orderDetail'
import statusDetail from '@/views/user/order/statusDetail'
import result from '@/views/pay/result'
import productdescription from '@/views/product/productdescription'
import authentication from '@/views/user/person/authentication'
import videoList from '@/views/service/videoList'
import videodetail from '@/views/service/videodetail'
import PersonCenter from '@/views/user/person/person-center'
Vue.use(Router);

Object.keys(Filters).forEach((k) => Vue.filter(k, Filters[k]));
let baseUrl = Global.env == 'test' ? '' : '';
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/authentication',
            name: 'authentication',
            component: authentication
        },
        // {
        //     path: '/',
        //     name: 'homeindex',
        //     component: homeindex
        // },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/user/person/equity',
            name: 'equity',
            component: equity
        },
        {
            path: '/service/videoList',
            name: 'videoList',
            component: videoList
        },
        {
            path: '/service/videodetail/:videoId',
            name: 'videodetail',
            component: videodetail
        },
        {
            path: '/product/detail/:productId',
            name: 'detail',
            component: Detail
        },
        {
            path: '/service/helpcenter',
            name: 'helpcenter',
            component: helpcenter
        },
        {
            path: '/service/logistics/:orderid',
            name: 'logistics',
            component: logistics
        },

        {
            path: '/product/orderconfirm/:productId',
            name: 'orderconfirm',
            component: orderconfirm
        },
        {
            path: '/user/order/orderlist',
            name: 'orderlist',
            component: orderlist
        },
        {
            path: '/user/order/invioceDetail/:orderId',
            name: 'invioceDetail',
            component: invioceDetail
        },
        {
            path: '/user/order/statusDetail/:orderId',
            name: 'statusDetail',
            component: statusDetail
        },
        {
            path: "/pay/result",
            name: 'result',
            component: result,
            meta:{
                keepAlive: false
            }
        },
        {
            path: '/user/order/orderDetail/:orderId',
            name: 'orderDetail',
            component: orderDetail
        },
        {
            path: '/product/productdescription/:goodsId',
            name: 'productdescription',
            component: productdescription
        },
        {
            path: '/product/cashier',
            name: 'cashier',
            component: cashier
        },
        //个人中心
        {
            path: '/user/person/person-center',
            name: 'person-center',
            component: PersonCenter
        }
    ]
})


