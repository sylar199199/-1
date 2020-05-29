import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import Global from './global'
import Util from './util'
import Store from '../vuex/index'

import {Toast, MessageBox} from 'mint-ui';

axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
});

axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
});
var that = this;
function errorState(response) {
    Store.commit("setIsLoading", false);
    // 如果http状态码正常，则直接返回数据

    //if(response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    if (response.status == '200') {

    } else {
        Toast({
            message: '请求超时，请稍后再试！',
            duration: 3000,
        });
    }
}

function successState(response,url) {
    //统一判断后端返回的错误码
    if (response.status == '200') {
        Store.commit("setIsLoading", false);
        if (response.data.errorCode == 0) {
            Store.commit("setIsLoading", false);
        } else if (response.data.errorCode == -1) {
            Store.commit("setIsLoading", false);
            Toast({
                message: '服务端错误，请联系管理员',
                duration: 3000
            });
        } else if (response.data.errorCode == 1) {
            Store.commit("setIsLoading", false);
            if (url.indexOf('/account/bind/wechat') >= 0) {

            }else{
                Toast({
                    message: response.data.message,
                    duration: 3000
                });
            }
        }
        else if (response.data.errorCode == 5001) {
            var url = '',locationHref = window.location.href;
            if(Util.localStorageUtil.get('channelType')){
                var loginObject = {
                    callBackURL : locationHref
                };
                if(this.isiOS){
                    webkit.messageHandlers.gotoNative.postMessage({"pageName": "HealthMall-Login", "parameter":loginObject})
                }else if(this.isAndroid){
                    HostApp.gotoNative("HealthMall-Login", loginObject)
                }
            }else{

                Util.localStorageUtil.clear('access_token');
                Util.localStorageUtil.clear('userInfo');
                if(Global.env == 'dev' || Global.env == 'test'){
                     url = 'http://testm.kunlunhealth.com.cn/user/login?redirectUrl='+encodeURIComponent(locationHref);
                }else{
                    url = 'https://m.kunlunhealth.com.cn/user/login?redirectUrl='+encodeURIComponent(locationHref);
                }
                window.location.href = url;

            }
        }
    } else {
        Store.commit("setIsLoading", false);
        Toast({
            message: '网络请求错误',
            duration: 3000
        });
    }
}
function getUrlParms(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return unescape(r[2]);
    return null;
}
const getResource = (opts, data) => {
    var tokenVal = Util.localStorageUtil.get('access_token');
    if(opts.hasOwnProperty('isLoading')){
        Store.commit("setIsLoading", true);
    }
    Store.commit("setIsLoading", true);
    var shopId = getUrlParms('shopId');
    if(Util.localStorageUtil.get('shopId')){
        shopId = Util.localStorageUtil.get('shopId');
    }
    if(!shopId || shopId == 'undefined'){
        shopId = '';
    }
    var contentType = '';
    contentType = 'application/json; charset=UTF-8';
    let httpDefaultOpts = { //http默认配置
        method: opts.method,
        baseURL: Global.requestUrl,
        url: opts.url,
        timeout: 300000,
        params: data,
        data: data,
        headers: opts.method == 'get' ? {
            'X-Requested-With': 'XMLHttpRequest',
            "Accept": "application/json",
            "Content-Type": contentType,
            'token': tokenVal,
            'shopId':shopId
        } : {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': contentType,
            'token': tokenVal,
            'shopId':shopId
        }
    };

    if (opts.method == 'get') {
        delete httpDefaultOpts.data
    } else {
        delete httpDefaultOpts.params
    }
    let promise = new Promise(function (resolve, reject) {
        axios(httpDefaultOpts).then(
            (response) => {
                successState(response,opts.url);
                resolve(response.data)
            }
        ).catch(
            (error) => {
                errorState(error);
                reject(error)
            }
        )
    });
    return promise
};
let login =  (data,key)=> {//登录
    return getResource({
        url: `/kl-store/user/login`,
        method: 'post'
    }, data)
};
export default {
    browser(){
        return {
            getuuid: function (data, key) {//获取uuid
                return getResource({
                    url: `/kl-store/browse/log/uuid`,
                    method: 'post'
                }, data)
            },
            browerLog:function (data, key) {//浏览日志
                return getResource({
                    url: `/kl-store/browse/log`,
                    method: 'post'
                }, data)
            },
        }
    },
    video(){
        return {
            getcategory: function (data, key) {//分类
                return getResource({
                    url: `/kl-store/video/category`,
                    method: 'get'
                }, data)
            },
            videoList:function (data, key) {//视频列表
                return getResource({
                    url: `/kl-store/video/query`,
                    method: 'post'
                }, data)
            },
            videoDetail:function (data, key) {//视频视频
                return getResource({
                    url: `/kl-store/video/${key}`,
                    method: 'get'
                }, data)
            },
            videoclick:function (data, key) {//视频视频
                return getResource({
                    url: `/kl-store/video/${key}/click`,
                    method: 'post'
                }, data)
            },
        }
    },
    banner(){
        return {
            getBanner: function (data, key) {//banner列表
                return getResource({
                    url: `/kl-store/banner?channelId=${key}`,
                    method: 'get'
                }, data)
            }
        }
    },
    adress(){
        return {
            getAdress: function (data, key) {//获取地址
                return getResource({
                    url: `/kl-store/address?type=${key}`,
                    method: 'get'
                }, data)
            },
            formAction33: function (data, key) {//获取地址
                return getResource({
                    url: `/kl-store/address?type=${key}`,
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    }
                }, data)
            },
        }
    },
    goods(){
        return {
            getGoods: function (data, key) {//推荐商品
                return getResource({
                    url: `/kl-store/goods/rec?channelId=${key}`,
                    method: 'get'
                }, data)
            },
            getGoodsDetail: function (data, key) {//商品详情
                return getResource({
                    url: `/kl-store/goods/${key}`,
                    method: 'get'
                }, data)
            },
            getServicecity: function (data, key) {//商品服务城市
                return getResource({
                    url: `/kl-store/goods/${key}/serviceCity`,
                    method: 'get'
                }, data)
            },
            getrightsgoods: function (data, key) {//权益商品
                return getResource({
                    url: `/kl-store/goods/rights`,
                    method: 'get'
                }, data)
            },


        }
    },
    wx(){
        return {
            geturlCode: function (data, key) {//获取url的code
                return getResource({
                    url: `wx/oauth/url?redirectUri=${key}`,
                    method: 'get'
                }, data)
            },

        }
    },
    login(data) {
        // 登录
        return {
            login: function (data, key) {
                return getResource({
                    url: `/kl-store/user/login`,
                    method: 'post'
                }, data)
            },
            wxlogin: function (data, key) {
                return getResource({
                    url: `/kl-store/user/encstr/login`,
                    method: 'post'
                }, data)
            },
            islogin: function (data, key) {
                return getResource({
                    url: `/kl-store/user/isLogin`,
                    method: 'get'
                }, data)
            },
            loginout: function (data, key) {
                return getResource({
                    url: `/kl-store/user/logout`,
                    method: 'post'
                }, data)
            }
        }
    },
    help(){
        return {
            getcategoryList: function (data, key) {//获取分类列表
                return getResource({
                    url: `/kl-store/help/category`,
                    method: 'get'
                }, data)
            },
            getcategoryData: function (data, key) {//获取项目列表
                return getResource({
                    url: `/kl-store/help/item?categoryId=${key}`,
                    method: 'get'
                }, data)
            },

        }
    },
    product() {
        return {
            gettiaokuan: function (data,key) {//获取条款
                return getResource({
                    url: `/xunan/productInfo/${key}/statement`,
                    method: 'get'
                }, data)
            },
            getProductInfoListByCategory: function (data) {//获取产品列表
                return getResource({
                    url: '/xunan/productInfo/getProductInfoListByCategory',
                    method: 'get'
                }, data)
            },
            getProductInfoDetail: function (data) {//获取产品详情
                return getResource({
                    url: '/xunan/productInfo/getProductInfoDetail',
                    method: 'get'
                }, data)
            },
            getProduct: function (data, key) {//产品
                return getResource({
                    url: `/prod/productinfo/${key}`,
                    method: 'get'
                }, data)
            },
            insuredType: function (data, key) {//   产品被保人类型
                return getResource({
                    url: `/xunan/productInfo/${key}/insured/type`,
                    method: 'get'
                }, data)
            },
            questionnaires: function (data, key) {//   健康告知
                return getResource({
                    url: `/prod/productinfo/${key}/questionnaires`,
                    method: 'get'
                }, data)
            },
            getHealth: function (data, key) {//   投保须知
                return getResource({
                    url: `/prod/productinfo/${key}/notice`,
                    method: 'get'
                }, data)
            },
            getProductPrice: function (data) {//保费试算
                return getResource({
                    url: '/prod/productinfo/price',
                    method: 'post'
                }, data)
            },
            getDocDetail: function (data, key) {//投保须知条款详情
                return getResource({
                    url: `/prod/productinfo/clause/${key}`,
                    method: 'get'
                })
            },
            getStatementDocDetail: function (data, key) {//条款详情
                return getResource({
                    url: `/prod/productinfo/statement/${key}`,
                    method: 'get'
                })
            },
            getProductAreaList: function (data, key) {//产品可销售区域
                return getResource({
                    url: `/prod/productinfo/${key}/area`,
                    method: 'get'
                })
            },
            getProductPosterList: function (data, key) {//产品海报列表
                return getResource({
                    url: `/prod/productinfo/${key}/poster`,
                    method: 'get'
                })
            },
            getProbrand: function (data) {//品牌型号
                return getResource({
                    url: 'prod/brand',
                    method: 'get'
                }, data)
            }
        }
    },
    common() {
        return {
            getRegionTree: function (data) { //地区
                return getResource({
                    url: '/common/region/tree',
                    method: 'get'
                }, data)
            }
        }
    },

    sys() {
        return {
            getShowLawHelpList: function (data) {//法律援助列表
                return getResource({
                    url: '/xunan/lawHelp/showLawHelpList',
                    method: 'get'
                }, data)
            },
            getShowLawHelpDetail: function (data) {//法律援助详情
                return getResource({
                    url: '/xunan/lawHelp/showLawHelpCenterDetail',
                    method: 'get'
                }, data)
            },
            registerxieyi: function (data,key) {//注册
                return getResource({
                    url: `/xunan/protocol/${key}`,
                    method: 'get'
                }, data)
            },
            getProtocol: function (data, key) {//注册协议
                return getResource({
                    url: `/sys/protocol/${key}`,
                    method: 'get'
                })
            },
            getBanner: function (data, key) { //地区
                return getResource({
                    url: `/xunan/banner`,
                    method: 'get'
                },data)
            },
            getBank: function (data) { //银行
                return getResource({
                    url: '/sys/bank/all',
                    method: 'get'
                }, data)
            },
            getPosterList: function (data, key) {//海报邀请列表
                return getResource({
                    url: '/sys/poster',
                    method: 'get'
                })
            },
            getPosterimg: function (data, key) {//海报邀请列表
                return getResource({
                    url: `/prod/poster/${key}/image`,
                    method: 'get'
                }, data)
            },
        }
    },
    user() {
        return {
            getlevel:function(data){
                return getResource({
                    url: `/kl-store/user/customer/level`,
                    method: 'get',

                },data)
            },
            cardocr:function(data){
                return getResource({
                    url: `/kl-store/user/card/ocr/base64`,
                    method: 'post',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                },data)
            },
            userInfo:function(data){
                return getResource({
                    url: `/kl-store/user/login/info`,
                    method: 'get'
                },data)
            },
            getuserInfo:function(data){
                return getResource({
                    url: `/kl-store/user/info`,
                    method: 'get'
                },data)
            },
            bindWechat: function(data){
                return getResource({
                    url: `/xunan/user/account/bind/wechat`,
                    method: 'post'
                },data)
            },
            updatePhone: function(data){
                return getResource({
                    url: `/xunan/user/account/updatePhone`,
                    method: 'post'
                },data)
            },
            editorInfo: function(data) {
                return getResource({
                    url: `/xunan/user/account/updateUserInfoDto`,
                    method: 'post'
                }, data)
            },
            changePhone: function(data) {
                return getResource({
                    url: `/xunan/upload/base64`,
                    method: 'post',
                    isLoading: true
                }, data)
            },
            getToken: function (data) {
                return getResource({
                    url: '/xunan/user/account/token',
                    method: 'get'
                }, data)
            },
            getLoginCode: function (data) {
                return getResource({
                    url: '/usr/user/loginCode',
                    method: 'get'
                }, data)
            },
            postLoginCode: function (data) {
                return getResource({
                    url: '/usr/user/loginCode',
                    method: 'post'
                }, data)
            },
            getTeamInfo: function (data) {
                return getResource({
                    url: '/usr/center/team/info',
                    method: 'get'
                }, data)
            },
            getTeamlist: function (data) {
                return getResource({
                    url: '/usr/center/team',
                    method: 'get'
                }, data)
            },
            getWithdraw: function (data) {//提现记录
                return getResource({
                    url: '/usr/center/withdraw',
                    method: 'get'
                }, data)
            },
            getAccount: function (data) {//享宝明细
                return getResource({
                    url: '/usr/center/account',
                    method: 'get'
                }, data)
            },
            getUserInfo: function (data) {
                return getResource({
                    url: '/xunan/user/account/wechat/login',
                    method: 'post'
                }, data)
            },
            getusercode: function (data,key) {
                return getResource({
                    url:`/kl-store/user/phone/code?phone=${key}`,
                    method: 'post'
                }, data)
            },
            getRegcode: function (data,key) {
                return getResource({
                    url:`/kl-store/user/reg/code?phone=${key}`,
                    method: 'post'
                }, data)
            },
            renzheng: function (data) {
                return getResource({
                    url: '/kl-store/user/reg',
                    method: 'post'
                }, data)
            },
            signature: function (data) {
                return getResource({
                    url: 'wx/jsapi/sign',
                    method: 'post'
                }, data)
            },
            reglogin: function (data) {
                return getResource({
                    url: '/kl-store/user/phone/login',
                    method: 'post'
                }, data)
            },
            getbankCard: function (data) {
                return getResource({
                    url: 'usr/bankCard',
                    method: 'get'
                }, data)
            },
            getwithdraw: function (data) {
                return getResource({
                    url: 'usr/center/withdraw/info',
                    method: 'get'
                }, data)
            },
            postbankCard: function (data) {
                return getResource({
                    url: 'usr/bankCard',
                    method: 'post'
                }, data)
            },
            getpersonDetail: function (data) {
                return getResource({
                    url: 'usr/center/profile',
                    method: 'get'
                }, data)
            },
            getcenterInfo: function (data) {
                return getResource({
                    url: 'usr/center/info',
                    method: 'get'
                }, data)
            },
            getinfo: function (data) {
                return getResource({
                    url: '/xunan/user/account/info',
                    method: 'get'
                }, data)
            },
            getisSubscribe: function (data) {
                return getResource({
                    url: '/xunan/user/account/wechat/isSubscribe',
                    method: 'get'
                }, data)
            },
            getBalance: function (data) {
                return getResource({
                    url: 'usr/center/balance',
                    method: 'get'
                }, data)
            },
            postWithdraw: function (data) {
                return getResource({
                    url: 'usr/center/withdraw',
                    method: 'post'
                }, data)
            },

        }
    },
    area(){
        return {
            getAreaList: function (data,key) {
                return getResource({
                    url:  `/kl-store/area/tree`,
                    method: 'get',
                    isLoading: true
                }, data)
            },
        }
    },
    order() {
        return {
          wxpay: function (data,key) {
                return getResource({
                  url: '/kl-store/order/wxpay',
                    method: 'post',
                }, data)
            },
          alipay: function (data,key) {
                return getResource({
                  url: '/kl-store/order/alipay',
                    method: 'post',
                }, data)
            },
          // 查询微信支付状态
          status: function (data,key) {
                return getResource({
                  url: `/kl-store/payment/status?payId=${key}`,
                    method: 'post',
                }, data)
            },
          lastconsignee: function (data,key) {
                return getResource({
                    url:  `/kl-store/order/last/consignee`,
                    method: 'get',
                    isLoading: true
                }, data)
            },
            payresult: function (data,key) {
                return getResource({
                    url:  `/kl-store/payment/s3query/${key}`,
                    method: 'post',
                    isLoading: true
                }, data)
            },
            s3pay: function (data,key) {
                return getResource({
                    url:  `/kl-store/s3pay`,
                    method: 'post',
                    isLoading: true
                }, data)
            },
            payOrders3: function (data,key) {
                return getResource({
                    url:  `/kl-store/order/s3pay`,
                    method: 'post',
                    isLoading: true
                }, data)
            },
            createdInvoice: function (data,key) {
                return getResource({
                    url:  `/kl-store/order/invoice`,
                    method: 'post',
                    isLoading: true
                }, data)
            },
            createdOrder: function (data,key) {
                return getResource({
                    url:  `/kl-store/order`,
                    method: 'post',
                    isLoading: true
                }, data)
            },
            payOrder: function(data,key){
                return getResource({
                    url:  `/kl-store/order/pay`,
                    method: 'post',
                    isLoading: true
                }, data)
            },
            orderJihuo: function(data,key){
                return getResource({
                    url:  `/kl-store/order/use?id=${key}`,
                    method: 'post',
                    isLoading: true
                }, data)
            },

            postorderafs: function (data) {
                return getResource({
                    url: '/kl-store/order/afs',
                    method: 'post'
                }, data)
            },
            getOrderList: function (data) {
                return getResource({
                    url: '/kl-store/order/query',
                    method: 'post'
                }, data)
            },
            getorderDetail: function (data, key) {
                return getResource({
                    url: `/kl-store/order/${key}`,
                    method: 'get'
                }, data)
            },
            deleteOrder: function (data, key) {
                return getResource({
                    url: `/kl-store/order/${key}`,
                    method: 'DELETE'
                }, data)
            },
            closeOrder: function (data, key) {
                return getResource({
                    url: `/kl-store/order/${key}/close`,
                    method: 'post'
                }, data)
            },
            afsship: function (data, key) {//申请售后
                return getResource({
                    url: `/kl-store/order/afs/ship`,
                    method: 'post'
                }, data)
            },
            orderstats: function (data, key) {//订单统计
                return getResource({
                    url: `/kl-store/order/stats`,
                    method: 'get'
                }, data)
            },

            getInsurance: function (data,key) {
                return getResource({
                    url:  `/xunan/user/present/insurance`,
                    method: 'get',
                    isLoading: true
                }, data)
            },
            postOrder: function (data,key) {
                return getResource({
                    url:  `/xunan/user/order?code=${key}`,
                    method: 'post',
                    isLoading: true
                }, data)
            },
            postOrdercode: function (data) {
                return getResource({
                    url:  `/xunan/user/order/code`,
                    method: 'post'
                }, data)
            },

            goPay: function (data, key,key1) {
                return getResource({
                    url: `/xunan/user/order/${key}/pay?platform=${key1}`,
                    method: 'post',
                    isLoading: true
                }, data)
            },
            getorderState: function (data, key) {
                return getResource({
                    url: `/xunan/user/order/${key}/info`,
                    method: 'get',
                }, data)
            },
            getOrderpolicy: function (data, key) {
                return getResource({
                    url: `/xunan/user/order/${key}/policy`,
                    method: 'post',
                    isLoading: true
                }, data)
            },
            getcountInfo: function (data) {
                return getResource({
                    url: '/ord/order/count',
                    method: 'get'
                }, data)
            },
        }
    }
}


