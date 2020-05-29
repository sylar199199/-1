// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//引入插件与第三方库
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import "../node_modules/font-awesome/css/font-awesome.min.css";
import {Toast} from 'mint-ui';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Util from './common/util'
import Service from './common/service'
import Global from './common/global'
import '../static/flexible.debug.js'
import '../static/flexible_css.debug.js'
// import {Toast} from '../static/exif.js';
import  '../static/exif.js'
import Store from './vuex/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import LyTab from 'ly-tab';
import 'swiper/dist/css/swiper.css'
import '../static/base.css'
import '../static/iconfont.css'
import App from './App'
import Clipboard from 'clipboard';
import vueTouch from 'kim-vue-touch'
// import math from 'mathjs'
// Vue.prototype.$math = math
Vue.use(vueTouch)
Vue.prototype.Clipboard=Clipboard;
import config from '../package.json'
// require styles
Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.use(MintUI);
Vue.use(LyTab);

import router from './router'
/* eslint-disable no-new */
let wxConfig = Global.wxConfig;
Vue.prototype.isWx = false;

// console.log = (function (oriLogFunc) {
//     return function () {
//         if(Global.env == 'prod'){
//         }else{
//             oriLogFunc.apply(this, arguments);
//         }
//     }
//   })(console.log);


function isBrower(){
    var inKLAndroidApp = RegExp(/KLAPP_Android/).exec(navigator.userAgent)
    var inKLiOSApp = RegExp(/KLAPP_iOS/).exec(navigator.userAgent)
    var u = navigator.userAgent;
    if(inKLAndroidApp){
        Vue.prototype.isAndroid = true;
        Vue.prototype.isiOS = false;
    }
    if(inKLiOSApp){
        Vue.prototype.isAndroid = false;
        Vue.prototype.isiOS = true;
    }
}
function  getUrlParms(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return unescape(r[2]);
    return null;
}
(function(){
    var url = '',locationHref = window.location.href,customparam = 'has';
    var haslogin = sessionStorage.getItem('noLogin');
    var firstcom = sessionStorage.getItem('firstcom')
    var inKLAndroidApp = RegExp(/KLAPP_Android/).exec(navigator.userAgent)
    var inKLiOSApp = RegExp(/KLAPP_iOS/).exec(navigator.userAgent)
    if(inKLAndroidApp || inKLiOSApp){
        Util.localStorageUtil.set('channelType', 'App')
    }
    if(!Util.localStorageUtil.get('channelType')){//非app
        if(!haslogin && !getUrlParms('customparam') && !getUrlParms('timestamp') && !getUrlParms('encode_string')){//不存在参数
            if (locationHref.indexOf('?')<0) {
                locationHref = locationHref + '?customparam=' + customparam;
            }else{
                locationHref = locationHref + '&customparam=' + customparam;
            }
            locationHref = encodeURIComponent(locationHref) + '&noLogin=1'; // 有这个参数昆仑那边会直接调回来，同时不会携带任何参数
            if(Global.env == 'dev' || Global.env == 'test'){
                url = 'http://testm.kunlunhealth.com.cn/user/login?redirectUrl='+locationHref;
            }else{
                url = 'https://m.kunlunhealth.com.cn/user/login?redirectUrl='+locationHref;
            }
            sessionStorage.setItem('noLogin','1') // 有这个参数昆仑那边会直接调回来，同时不会携带任何参数
            window.location.href = url;
            return;
        }else if(getUrlParms('customparam') && (!getUrlParms('timestamp') && !getUrlParms('encode_string'))){
            Service.login().loginout({}).then(response => {
                if(response.errorCode == 0) {
                }
            }, err => {
            });
        }
    }else{
        if(firstcom){//刷新当前页面
        }else{//app进入商城首页
            sessionStorage.setItem('firstcom','2')
            if(!getUrlParms('timestamp') && !getUrlParms('encode_string')){//商城没有登陆
                var timestampstorage = Util.localStorageUtil.get('timestamp');
                var encode_stringstorage = Util.localStorageUtil.get('encode_string')
                if(!timestampstorage && !encode_stringstorage){
                    if(locationHref.indexOf('pay/result')>=0){

                    }else{
                        Service.login().loginout({}).then(response => {
                            if(response.errorCode == 0) {
                            }
                        }, err => {
                        });
                    }
                }

            }
        }
    }
    function getuuid(url){
        if(Util.localStorageUtil.get('uuid')){
            Service.browser().browerLog({url: url,visitorId:Util.localStorageUtil.get('uuid')}).then(response => {
                if(response.errorCode == 0) {

                }
            }, err => {
            });
        }else{
            Service.browser().getuuid({}).then(response => {
                if(response.errorCode == 0) {
                    var visitorId = response.data;
                    Util.localStorageUtil.set('uuid',visitorId)
                    Service.browser().browerLog({url: url,visitorId:visitorId}).then(response => {
                        if(response.errorCode == 0) {

                        }
                    }, err => {
                    });
                }
            }, err => {
            });
        }
    }
    router.beforeEach((to, from, next) => {
      var url = '',locationHref = window.location.href,customparam = 'has';
      var haslogin = sessionStorage.getItem('noLogin');
      if(!Util.localStorageUtil.get('channelType')){//非app
        if(!haslogin && !getUrlParms('customparam') && !getUrlParms('timestamp') && !getUrlParms('encode_string')){//不存在参数
          if (locationHref.indexOf('?')<0) {
            locationHref = locationHref + '?customparam=' + customparam;
          }else{
            locationHref = locationHref + '&customparam=' + customparam;
          }
          locationHref = encodeURIComponent(locationHref) + '&noLogin=1'; // 有这个参数昆仑那边会直接调回来，同时不会携带任何参数
          if(Global.env == 'dev' || Global.env == 'test'){
            url = 'http://testm.kunlunhealth.com.cn/user/login?redirectUrl='+locationHref;
          }else{
            url = 'https://m.kunlunhealth.com.cn/user/login?redirectUrl='+locationHref;
          }
          sessionStorage.setItem('noLogin','1') // 有这个参数昆仑那边会直接调回来，同时不会携带任何参数
          window.location.href = url;
          return;
        }else if(getUrlParms('customparam') && (!getUrlParms('timestamp') && !getUrlParms('encode_string'))){
          Service.login().loginout({}).then(response => {
            if(response.errorCode == 0) {
            }
          }, err => {
          });
        }
      }
        isBrower();
        NProgress.start()
        if(to.query.timestamp && to.query.encode_string){
            Util.localStorageUtil.set('timestamp',to.query.timestamp);
            Util.localStorageUtil.set('encode_string',to.query.encode_string);
            if(to.path == '/pay/result'){
              if(to.query.payId){
                next({
                  path: to.path,
                  query:{payId:to.query.payId}
                });
              }else if(to.query.xjkPayId){
                next({
                  path: to.path,
                  query:{xjkPayId:to.query.xjkPayId}
                });
              }
            }else if(to.path.indexOf('/product/detail') != -1){
              next({
                path: to.path,
              });
            } else if(to.path =='/product/cashier'){
              if(to.query.queryData){
                next({
                  path: to.path,
                  query:{queryData:to.query.queryData}
                });
              }
            } else{
                var domain = document.domain
                var hrefurl= `http://${domain}${to.path}`;
                window.location.href = hrefurl
            }
        }else{
            if(to.query.customparam){
                if(to.path == '/pay/result'){
                    next({
                        path: to.path,
                        query:{payId:to.query.payId}
                    });
                }else{
                    next({
                        path: to.path,
                    });
                }
            }else{
                next()
            }
        }
    });

router.afterEach((to, from, next) => {
    NProgress.done()
    console.log(window.location.href)
    var pvurl = '';
    if(Global.env == 'dev' || Global.env == 'test'){
        pvurl = 'http://testjianfu.ifxj.com'+to.path;
    }else{
        pvurl = 'http://mall.kunlunhealth.com'+to.path;
    }
    getuuid(pvurl)
})
    new Vue({
        el: '#app',
        router,
        components: {
            App
        },
        template: '<App/>',
        data: {
            eventHub: new Vue()
        }
    });
})()



