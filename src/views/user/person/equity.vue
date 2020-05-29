<style rel="stylesheet/scss" lang="scss" scoped>
    @charset "utf-8";
    $bgcolor: #D51E12;
    $fontFamily: pingfangSC,
    Arial,
    Helvetica,
    sans-serif;
    $fontColor: #fff;
    $bgtc: #ECECEC;
    $baseFontSize: 75;
    .container {
        /*padding: 0 0 60px;*/
        margin-top: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .back {
        position: relative;
        width: 100%;
        height: 406rem/$baseFontSize;
        background: url('../../../assets/image/backequity.png') no-repeat center center;
        background-size: cover;
        .bannerContent{
            padding: 40rem/$baseFontSize 20rem/$baseFontSize;
            .bannerTop {
                display: flex;
                align-items: center;
                .logoImg{
                    height: 89rem/$baseFontSize;
                    width: 116rem/$baseFontSize;
                    margin-right: 30rem/$baseFontSize;
                }
                .logoImg1{
                     height: 99rem/$baseFontSize;
                    width: 116rem/$baseFontSize;
                }
                .gradename{
                    margin-top: -12rem/$baseFontSize;
                }
                .userName{
                    margin-top: 20rem/$baseFontSize;
                }
            }
            .bannerBottom{
                margin-top: 80rem/$baseFontSize;
                border-top: 1px solid rgba(255, 255, 255, 0.25);
                .bottomImg{
                    margin-top: 38rem/$baseFontSize;
                    display: flex;
                    align-items: center;
                    .marginLeft10{
                        margin-left: 10rem/$baseFontSize;
                    }
                    .gbicon{
                        height: 28rem/$baseFontSize;
                        width: 34rem/$baseFontSize;
                    }
                    .tyicon{
                        height: 34rem/$baseFontSize;
                        width: 38rem/$baseFontSize;
                    }
                    .zxicon{
                        height: 37rem/$baseFontSize;
                        width: 35rem/$baseFontSize;
                    }

                }
            }
        }
        
        @media screen and (min-width: 768px) {
            .swiper-inner {
                width: 100%;
                position: absolute;
                margin-top: 66rem/$baseFontSize;
                .swiper-slide {
                    text-align: center;
                    background-size: cover;
                    background-color: rgba(255, 255, 255, 0);
                    height: 339rem/$baseFontSize;
                    width: 100%;
                    img {
                        height: 339rem/$baseFontSize;
                        width: 100%;
                        border-radius: 20rem/$baseFontSize;
                    }
                }
                .banner{
                    height: 339rem/$baseFontSize;
                    width: 90%;
                    margin: 0 auto;
                    border-radius: 20rem/$baseFontSize;
                    
                }
            }
        }
        @media screen and (max-width: 767px) {
            .swiper-inner {
                width: 100%;
                position: absolute;
                margin-top: 66rem/$baseFontSize;
                /*<!--bottom: 24rem/$baseFontSize;-->*/
                .swiper-slide {
                    text-align: center;
                    background-size: cover;
                    background-color: rgba(255, 255, 255, 0);
                    height: 339rem/$baseFontSize;
                    width: 100%;
                    img {
                        height: 339rem/$baseFontSize;
                        width: 90%;
                        border-radius: 20rem/$baseFontSize;
                    }
                }
                .banner{
                    height: 339rem/$baseFontSize;
                    width: 90%;
                    margin: 0 auto;
                    border-radius: 20rem/$baseFontSize;
                }
            }

        }

    }
    .product-box {
        .productTitle{
            padding: 50rem/$baseFontSize 0;
            text-align: center ;
            color: #1d1d1d;
            position: relative;
            .titleBck{
                left: 50%;
                margin-left: -90rem/$baseFontSize;
                top: 40rem/$baseFontSize;
                position: absolute;
                height: 70rem/$baseFontSize;
                width: 70rem/$baseFontSize;
                background: url('../../../assets/image/qyicon.png') no-repeat center center;
                 background-size: 100% 100%;
            }
            .titleText{
                color: #1d1d1d;
                font-size: 36rem/$baseFontSize;
                height: 30rem/$baseFontSize;
            }
        }
        .firstProduct{
            padding: 0 30rem/$baseFontSize;
            display: flex;
            .leftImg{
                height: 231rem/$baseFontSize;
                width: 50%;
                background-size: cover;
                position: relative;
                background-position:-145rem/$baseFontSize center;
                .redBac{
                    background: url('../../../assets/image/backSpecial.png') no-repeat center center;
                    width: 100%;
                    background-size: cover;
                    height: 78rem/$baseFontSize;
                    position: absolute;
                    bottom: 0;
                    .redPriceBox{
                        display: flex;
                        justify-content: space-between;
                        padding: 28rem/$baseFontSize 15rem/$baseFontSize 0;
                        .priceBox{
                            .tejia{
                                color: #fff;
                                font-size: 36rem/$baseFontSize;
                            }
                            .yuanjia{
                                margin-left: 3px;
                                color: #c4c4c4;
                                font-size: 22rem/$baseFontSize;
                                text-decoration:line-through;
                            }
                        }
                        .spanText{
                            width: 68rem/$baseFontSize;
                            height: 26rem/$baseFontSize;
                            background-color: #ffffff;
                            border-radius: 13px;
                            text-align: center;
                            line-height: 26rem/$baseFontSize;
                            color: #ff0000;
                            margin-top: 10rem/$baseFontSize;
                        }
                    }
                }
            }
            .rightText{
                width: 50%;
                margin-left: 15px;
                .rightTitle{
                    color: #1d1d1d;
                    font-size: 28rem/$baseFontSize;
                    line-height: 30rem/$baseFontSize;
                }
                .rightTextdescrible{
                    margin-top: 5px;
                    color: #979797;
                    font-size: 24rem/$baseFontSize;
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 6;      /* 可以显示的行数，超出部分用...表示*/
                    -webkit-box-orient: vertical;
                }
            }
        }
        .describleBac{
            background: url('../../../assets/image/backdescrible.png') no-repeat center center;
            width: 100%;
            height: 70rem/$baseFontSize;
            margin-top: 35rem/$baseFontSize;
            background-size: cover;
        }
        .productBoxlist{
            padding: 0rem/$baseFontSize 30rem/$baseFontSize 35rem/$baseFontSize;
            .productBox{
                width: 680rem/$baseFontSize;
                margin-bottom: 35rem/$baseFontSize;
                height: 375rem/$baseFontSize;
                box-shadow: 0px 0px 20px 0px rgba(221, 221, 221,1);
                background: #fff;
                 border-radius: 8px;
                .productImg{
                    width: 682rem/$baseFontSize;
                    height: 290rem/$baseFontSize;
                    border-radius: 8px 8px 0 0;
                    background-position: center center;
                    background-size: cover;
                    position: relative;
                }
                .lqIcon{
                    width: 90rem/$baseFontSize;
                    height: 68rem/$baseFontSize;
                    position: absolute;
                    right: 12rem/$baseFontSize;
                    top: 16rem/$baseFontSize;
                }
                .productBottom{
                    padding: 28rem/$baseFontSize 30rem/$baseFontSize;
                    color: #000;
                    .lingquButton{
                        text-decoration: underline;
                    }
                }
                
            }
        }
        .product-list {
            margin-bottom: 40rem/$baseFontSize;
            border-top: 0.5px solid rgba(175, 175, 175, 0.25);
            box-shadow: 0px 0px 40px 6px rgba(175, 175, 175, 0.25);
            border-radius: 10px;
            .img-box {
                width: 100%;
                height: 336rem/$baseFontSize;
                position: relative;
                .backImg {
                    display: block;
                    width: 100%;
                    height: 100%;
                    background-position: -100px top;
                    border-radius: 10px 10px 0 0;
                    background-size: auto 100%;
                }
                .product-description{
                    position: absolute;
                    display: inline-block;
                    height: 50rem/$baseFontSize;
                    width: 150rem/$baseFontSize;
                    line-height: 50rem/$baseFontSize;
                    text-align: center;
                    background: #f7964e;
                    font-size: 24rem/$baseFontSize;
                    color: #fff;
                    top: 20rem/$baseFontSize;
                    right: 20rem/$baseFontSize;
                    border-radius: 5px;
                }
                .colorSpan{
                    background: #fff;
                }
            }
            .item-pbox {
                padding: 30rem/$baseFontSize 40rem/$baseFontSize;
                .p-title {
                    font-size: 40rem/$baseFontSize;
                    font-weight: 600;
                    line-height: 60rem/$baseFontSize;
                    color: #010101;
                    margin-bottom: 10rem/$baseFontSize;
                }
                .item-money {
                    color: #ff8f34;
                    font-size: 42rem/$baseFontSize;
                    height: 60rem/$baseFontSize;
                    width: 100%;
                    padding-top: 20rem/$baseFontSize;
                    .promotionFee {
                        display: inline-block;
                        width: 159rem/$baseFontSize;
                        height: 59rem/$baseFontSize;
                        font-size: 24rem/$baseFontSize;
                        line-height: 59rem/$baseFontSize;
                        color: #ff8f34;
                        border: 1px solid #ff8f34;
                        border-radius: 5px;
                        text-align: center;
                    }
                    .d-text{
                        font-size: 24rem/$baseFontSize;
                        line-height: 60rem/$baseFontSize;
                    }
                    .frtext {
                        font-weight: 600;
                    }
                }
            }
        }
        .product-feature {
            color: #929292;
            .feature-list {
                width: 100%;
                font-size: 24rem/$baseFontSize;
                line-height: 44rem/$baseFontSize;
                .iconLeaf {
                    height: 21rem/$baseFontSize;
                    width: 19rem/$baseFontSize;
                    display: inline-block;
                    vertical-align: middle;
                }
                span {
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .feature-list:nth-child(2n-1) {
                float: left;
            }
            .feature-list:nth-child(2n) {
                float: right;
                text-align: left;
            }
        }
    }
    .bottom {
        background: #fff;
        box-shadow: 0px 0px 15px 6px rgba(209, 209, 209, 0.25);
        text-align: center;
        width: 100%;
        height: 100rem/$baseFontSize;
        .iconBoxone {
            margin-right: 80rem/$baseFontSize;
        }
        .iconBoxtwo {
            margin-left: 80rem/$baseFontSize;
        }
      
        .iconBox {
            margin-top: -16rem/$baseFontSize;
            color: #d4d4d4;
            font-size: 22rem/$baseFontSize;
            .select {
                color: #19b39d;
                margin-top: -14px;
            }
            .noselect {
                margin-top: -14px;
            }
            .icon {
                border-radius: 50%;
                height: 100rem/$baseFontSize;
                width: 100rem/$baseFontSize;
                /*<!--box-shadow:1px -6px 13px -3px rgba(106,106,106,0.25);-->*/
                box-shadow: 2px -27px 20px -6px rgba(209, 209, 209, 0.25);
            }
        }
    }
    .border-grey{
        width: 100px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #f00;
        margin-left: 20px;
    }
    .contentBox{
        -webkit-box-flex:1;
        -webkit-flex:1;
        -ms-flex:1;
        flex:1;
        overflow-y: scroll;
        height:200px;
    }
    .flexCenter{
         display: flex;
        justify-content: center;
        width: 100%;
    }
    .flexAroud{
        display: flex;
        justify-content: space-around;
        width: 100%;

    }
    .nodata{
        margin: 20px auto;
        text-align: center;
        .nodataImg{
            height: 359rem/$baseFontSize;
            width: 488rem/$baseFontSize;
        }
    }
    
</style>
<template>
    <div class="container" v-if="showdata">
        <div class="contentBox">
            <div class="back">
                <div class="swiperBox">
                    <div class="swiper-inner" v-if="bannerList">
                        <!-- swiper -->
                        <swiper :options="swiperOption"  ref="mySwiper" v-if="!showImg">
                            <swiper-slide v-for="(item,index) in bannerList"  :key="item.id" :index="index">
                                <a  @click="goLink(item.linkUrl)">
                                    <img :src="item.imgUrl"/>
                                </a>
                            </swiper-slide>
                            <div class="swiper-pagination cursor"  slot="pagination"></div>
                        </swiper>
                        <div class="banner" v-if="showImg"  :style="{backgroundImage: 'url(' + gradeimgUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}">
                            <div class="bannerContent">
                                <!-- <img :src="gradeimgUrl"/> -->
                                <div class="bannerTop flex" >
                                    <img :src="logourl" :class="[levelNo == 'LV006'?'logoImg logoImg1':'logoImg']" />
                                    <div>
                                        <p  class="gradename font40 fontweight" :class='className'>{{hycentent}} <span v-if="concatData.length >1">·</span> <span v-if="concatData.length >1">享{{concatData.length}}大特权</span></p>
                                        <p class="userName font24" :class='className'>用户名：{{userName}}</p>
                                    </div>
                                </div>
                                <div class="bannerBottom flexAroud">
                                    <div class="bottomImg">
                                        <img class='gbicon' :src="gburl">
                                        <span class="font24  marginLeft10" :class='className'>贵宾专享</span>
                                    </div>
                                    <div class="bottomImg">
                                        <img class='tyicon' :src="tyurl">
                                        <span class="font24  marginLeft10" :class='className'>全国通用</span>
                                    </div>
                                    <div class="bottomImg">
                                        <img class='zxicon' :src="zxurl">
                                        <span class="font24  marginLeft10" :class='className'>甄选服务</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-box">
                <div class="productTitle">
                    <div class="titleBck"></div>
                    <span class="titleText">
                        我的权益
                    </span>
                </div>
                <div class="productBoxlist">
                    <div class="productBox" v-for="item in concatData" :key="item.productPlanNo"   v-if="item.goods && !nodata">
                        <div class="productImg"  :style="{backgroundImage: 'url(' + item.goods.imgUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}" @click="getDetail(item.goods)">
                            <img class='lqIcon' v-if="item.status == 1 && (item.totalTimes != item.useTimes)" src="../../../assets/image/nolq.png">
                             <img class='lqIcon' v-else src="../../../assets/image/ylq.png">
                        </div>
                        <div class='flexBetween productBottom'>
                            <div class="font24">{{item.productPlanName}}</div>
                            <div class="lingquButton colorec" v-if="item.status == 1 && (item.totalTimes > item.useTimes)" @click="getDetail(item.goods)">立即领取 剩余{{item.totalTimes-item.useTimes}}次</div>
                            <div class="lingquButton colorGreen" v-else-if="item.status == 1 && (item.totalTimes == item.useTimes)">已领取</div>
                            <div class="lingquButton colorGreen" v-else @click="goOrder()">已领取</div>
                        </div>
                    </div>
                    <div class="nodata" v-if="nodata">
                        <img class="nodataImg" src="../../../assets/image/noData.png">
                        <p class="colorBj">暂无权益商品</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class='flexAroud'>
                <div class="iconBox" @click="gohome()">
                    <img class='icon' src="../../../assets/image/noselectHome.png">
                    <p class="noselect">健康首页</p>
                </div>
               <div class="iconBox iconBoxthree" @click="goVideo()">
                    <img class='icon' src="../../../assets/image/noselectVideo.png">
                    <p class="noselect">健康视频</p>
                </div>
                <div class="iconBox" @click="gorquity()">
                    <img class='icon' src="../../../assets/image/selectquanyi.png">
                    <p class="select">我的权益</p>
                </div>
                <div class="iconBox" @click="goOrder()">
                    <img class='icon' src="../../../assets/image/noselectPerson.png">
                    <p class="noselect" v-if="showOrder">我的订单</p>
                    <p class="noselect" v-if="!showOrder">登录/注册</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import {Toast, MessageBox} from 'mint-ui';
    import Util from '../../../common/util'
    import Service from '../../../common/service'
    import Store from '../../../vuex/index'
    import Global from '../../../common/global'
    let wxConfig = Global.wxConfig
    export default {
        components: {
            swiper,
            swiperSlide,
        },
        data() {
            return {
                nodata: false,
                className:'',
                gburl: '',
                tyurl: '',
                zxurl: '',
                userName: '',
                hycentent: '',
                gradeimgUrl: '',
                logourl:'',
                showImg: false,
                showdata: true,
                showOrder: true,
                v:'ff',
                k:'33',
                item: {id:1},
                imageUrl: 'https://ifxj.oss-cn-shenzhen.aliyuncs.com/xuean/banner/H5%E7%AB%AFbanner.png',
                swiperOption: {
                   autoplay: {
                       delay: 4000,
                       stopOnLastSlide: false,
                       disableOnInteraction: false,
                   },
                   spaceBetween: 30,
                    initialSlide :0,//默认第1个
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    loop : true,
                    // effect : 'cube',//切换效果
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    }
                },
                bannerList: [],
                productList: {},
                concatData: [],//合并数据
                limit: 10,
                page: 1,
                size: 10,
                moreData: true,
                allLoaded: false,
                userInfo: {},
                isNodata: true,
                targetIndex: null,
                originIndex: null
            }
        },
        // beforeRouteEnter(to, from, next) {
        //     next()
        // },
        created() {
         
            
            // $('.bottom').scrollTop($('.help-gundongtiao')[0].scrollHeight);
            $('html, body').animate({scrollTop:0});
           
            if(this.getIsWxClient()){
                Util.localStorageUtil.clear('platform');
                Util.localStorageUtil.clear('customerNo');
                Util.localStorageUtil.clear('phone');
                Util.localStorageUtil.clear('channelType');
            }
            const timestamp = Util.localStorageUtil.get('timestamp');
            const encode_string = Util.localStorageUtil.get('encode_string');
            if(timestamp&&encode_string){
                this.wxLogin()//login
            }else{
                this.getLeval();
            }
           
            document.getElementsByTagName('title')[0].innerHTML = '昆仑健康商城';
        },

        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        methods: {
            resetImg(val){
                 switch (val) {
                    case 'LV001':
                         this.gburl =  require('../../../assets/image/ptgb.png');
                        this.tyurl = require('../../../assets/image/ptty.png');
                        this.zxurl = require('../../../assets/image/ptzx.png');
                        this.gradeimgUrl = require('../../../assets/image/ptback.png');
                        this.logourl = require('../../../assets/image/ptlogo.png');
                        this.hycentent = '普通会员';
                        this.className = 'colorPt';
                        break;
                    case "LV002":
                        this.gburl =  require('../../../assets/image/hz1gb.png');
                        this.tyurl = require('../../../assets/image/hz1ty.png');
                        this.zxurl = require('../../../assets/image/hz1zx.png');
                        this.gradeimgUrl = require('../../../assets/image/hz1back.png');
                        this.logourl = require('../../../assets/image/hz1logo.png');
                        this.hycentent = '黄金会员 ';
                        this.className = 'colorHz1'
                        break;
                    case "LV003":
                        this.gburl =  require('../../../assets/image/bjgb.png');
                        this.tyurl = require('../../../assets/image/bjty.png');
                        this.zxurl = require('../../../assets/image/bjzx.png');
                        this.gradeimgUrl = require('../../../assets/image/bjback.png');
                        this.logourl = require('../../../assets/image/bjlogo.png');
                        this.hycentent = '铂金会员 ';
                        this.className = 'colorBj'
                        break;
                    case "LV004":
                       this.gburl =  require('../../../assets/image/zsgb.png');
                        this.tyurl = require('../../../assets/image/zsty.png');
                        this.zxurl = require('../../../assets/image/zszx.png');
                        this.gradeimgUrl = require('../../../assets/image/zsback.png');
                        this.logourl = require('../../../assets/image/zslogo.png');
                        this.hycentent = '钻石会员  ';
                        this.className = 'colorZs'
                        break;
                    case "LV005":
                        this.gburl =  require('../../../assets/image/hzgb.png');
                        this.tyurl = require('../../../assets/image/hzty.png');
                        this.zxurl = require('../../../assets/image/hzfw.png');
                        this.gradeimgUrl = require('../../../assets/image/hzback.png');
                        this.logourl = require('../../../assets/image/hzlogo.png');
                        this.hycentent = '黑钻会员  ';
                        this.className = 'colorHz'
                        break;
                    case "LV006":
                        this.gburl =  require('../../../assets/image/svipgb.png');
                        this.tyurl = require('../../../assets/image/svipty.png');
                        this.zxurl = require('../../../assets/image/svipzx.png');
                        this.gradeimgUrl = require('../../../assets/image/svipback.png');
                        this.logourl = require('../../../assets/image/SVIPlogo.png');
                        this.hycentent = 'SVIP会员  ';
                        this.className = 'colorSvip'
                        break;
                    default:
                        this.statusTitle = '其他';
                        break
                }
            },
            gohome(){
                 this.$router.push({
                    name: 'home'
                })
            },
            getLeval(){
                var _this = this;
                Service.user().getlevel({
                }).then(response => {
                    if(response.errorCode == 0){
                        this.showdata = true;
                        this.levelNo = response.data.levelNo;
                        if(!this.levelNo){
                            this.gohome()
                        }else{
                            this.getrightsgoods()
                            this.showImg = true;
                             if(Util.localStorageUtil.get("loginInfo")){
                                this.loginInfo = Util.localStorageUtil.get("loginInfo");
                                this.userName = this.loginInfo.phone;
                            }
                            this.resetImg(this.levelNo)
                            // this.resetImg('LV002')
                        }
                    }
                }, err => {
                });
            },
            goDenglu(){
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
                    if(Global.env == 'dev' || Global.env == 'test'){
                        url = 'http://testm.kunlunhealth.com.cn/user/login?redirectUrl='+encodeURIComponent(locationHref);
                    }else{
                        url = 'https://m.kunlunhealth.com.cn/user/login?redirectUrl='+encodeURIComponent(locationHref);
                    }
                    window.location.href = url;
                }
            },
            islogin() {
                //调用接口获得数据
                Service.login().islogin({}).then(response => {
                    if(response.errorCode == 0){
                        if(response.data){
                            this.showOrder = true;
                        }else{
                            this.showOrder = false;
                        }
                    }
                }, err => {
                });
            },
            getIsWxClient () {
                var ua = navigator.userAgent.toLowerCase();
                if (ua.match(/MicroMessenger/i) == "micromessenger") {
                    return true;
                }
                return false;
            },
        
            goLink(url){
                if(url){
                    if(url.indexOf('http') >= 0 || url.indexOf('https') >= 0){
                        window.location.href = url
                    }else{
                        this.$router.push({'path':'/'+url});
                    }
                }
            },
            getrightsgoods() {
                var _this = this;
                Service.goods().getrightsgoods({
                }).then(response => {
                    if(response.errorCode == 0){
                        if (response.data.length != 0) {
                          this.concatData = response.data;
                          if(this.concatData.length != 0){
                              this.nodata = false;
                          }else{
                            this.nodata = true;
                          }
                        }
                    }
                }, err => {
                });
            },
            goVideo(){
                 this.$router.push({
                    name: 'videoList'
                })
            },
            goOrder() {
                if(this.showOrder){
                    if(this.$route.query.timestamp || this.$route.query.encode_string || this.$route.query.customparam){
                        this.$router.push({
                            name: 'orderlist'
                        })
                    }else{
                        this.$router.push({
                            name: 'orderlist',
                            query: this.$route.query
                        })
                    }

                }else{
                    this.goDenglu();
                }
            },
            getDetail(item) {
                console.log(item.id)
                if(this.$route.query.timestamp || this.$route.query.encode_string || this.$route.query.customparam){
                    this.$router.push({
                        name: 'detail',
                        params: {
                            productId: item.id
                        }
                    })
                }else{
                    this.$router.push({
                        name: 'detail',
                        params: {
                            productId: item.id
                        },
                        query: this.$route.query
                    })
                }


            },
            getUrlParms(name){
                var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if(r!=null)
                    return unescape(r[2]);
                return null;
            },
            wxLogin(){
                const timestamp = Util.localStorageUtil.get('timestamp');
                const encode_string = Util.localStorageUtil.get('encode_string');
                Service.login().wxlogin({
                    'encodeString': encodeURIComponent(encode_string),
                    'timestamp': timestamp
                }).then(response => {
                    Util.localStorageUtil.clear('timestamp');
                    Util.localStorageUtil.clear('encode_string')
                    if(response.errorCode == 0) {
                        Util.localStorageUtil.set('access_token', response.data.token);
                        this.loginInfo = response.data;
                        Util.localStorageUtil.set('loginInfo', response.data);
                        this.userName = response.data.phone;
                        this.showOrder = true;
                        this.getLeval();
                    }
                }, err => {
                    Util.localStorageUtil.clear('timestamp');
                    Util.localStorageUtil.clear('encode_string')
                })
            },
            isIos(){
                var u = navigator.userAgent;
                var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                    return isiOS;
            }
        },
        beforeMount() {
            this.currentPathName = this.$route.name;
            this.activeRoute = this.$route.matched[this.$route.matched.length - 1].path
        },
        mounted() {
        },
        destroyed() {
        },
        
    }
</script>


