<style rel="stylesheet/scss" lang="scss" scoped>
    $bgcolor: #D51E12;
    $fontColor: #fff;
    $bgtc: #ECECEC;
    $baseFontSize: 75;
    #tabBox{
        width: 100%;
        overflow:hidden;
        nav{
            padding: 0 20rem/$baseFontSize;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: middle;
            -ms-flex-align: middle;
            align-items: middle;
            overflow: auto;
        }
        p{
            text-align: center;
            font-size: 16px;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            padding: 10px;
            margin: 5px;
        }
        .active{
            color: #ffff00;
            background-color: #000000;
        }
    }
    .dataBox{
        flex: 1;
        padding-bottom: 40px;
        overflow-x: auto;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch; // 解决ios滑动不流畅的问题
        .treasureBox {
            padding: 15rem/$baseFontSize 40rem/$baseFontSize 15rem/$baseFontSize 25rem/$baseFontSize;
            background: #fff;
            margin-top: 2rem/$baseFontSize;
            display: flex;
            .imgUrlbox{
                height: 68rem/$baseFontSize;
                width: 119rem/$baseFontSize;
                border-radius: 5px;
                margin-right: 20rem/$baseFontSize;
            }
            .rightBox{
                position: relative;
               flex: 1;
                .title{
                    font-size: 24rem/$baseFontSize;
                    color: #666;
                    font-weight: 600;
                    line-height: 40rem/$baseFontSize;
                    width: 80%;
                }
                .viewIcon{
                    height: 25rem/$baseFontSize;
                    width: 25rem/$baseFontSize;
                    margin-right: 12rem/$baseFontSize;
                }
                .count{
                    position: absolute;
                    bottom: 0px;
                    right: 0;
                    color: #979797;
                    font-size: 24rem/$baseFontSize;
                    margin-top: -32rem/$baseFontSize;
                }
            }

        }
    }
    .headBox{
       height: 96rem/$baseFontSize;
    }
    .bottom {
        display: flex;
        justify-content: center;
        background: #fff;
        box-shadow: 0px 0px 15px 6px rgba(209, 209, 209, 0.25);
        text-align: center;
        /*position: fixed;*/
        /*bottom: 0;*/
        width: 100%;
        height: 100rem/$baseFontSize;
        /*z-index: 100;*/
        // padding: 0 100rem/$baseFontSize;
        .flexAroud{
            display: flex;
            justify-content: space-around;
            width: 100%;

        }
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
     .ly-tab-list{
        color: #979797!important;
        }
    .dialog{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: fixed;
        z-index: 1002;
    }
    .dialogContent{
        border-radius: 20rpx;
        background: #fff;
        position: absolute;
        width: 600rem/$baseFontSize;
        height: 330rem/$baseFontSize;
        left: 50%;
        margin-left: -320rem/$baseFontSize;
        margin-top: -165rem/$baseFontSize;
        top: 50%;
        border-radius: 5px;
        .infoBox{
            // text-align: center;
            margin: 40rem/$baseFontSize;
            p{
                 word-wrap: break-word;
                word-break:break-all;
            }
            .buttonsmall{
                height: 80rem/$baseFontSize;
                width: 200rem/$baseFontSize;
                background: #19b39d;
                text-align: center;
                color: #fff;
                line-height: 80rem/$baseFontSize;
                margin: 20rem/$baseFontSize auto;
                border-radius: 20rem/$baseFontSize;
            }
        }
    }
    .closeIcon{
        position: absolute;
        height: 40px;
        width: 40px;
        top: 50%;
        margin-top: 170rem/$baseFontSize;
        left: 50%;
        margin-left: -25px;
    }

    .itemcolor{
        color: #999;

    }
    .nodata{
        flex: 1;
        text-align: center;
        .sucessLogo {
            height: 160rem/$baseFontSize;
            width: 160rem/$baseFontSize;
            margin-top: 150rem/$baseFontSize;
        }
        .sucessTextBox {
            margin: 40rem/$baseFontSize 0;
            font-stretch: normal;
            .sucessTextone {
                color: #3d3d3d;;
                font-size: 32rem/$baseFontSize;
            }
            .sucessTexttwo {
                color: #929292;;
                font-size: 24rem/$baseFontSize;
                margin: 20rem/$baseFontSize 0;
            }
        }
    }

   *{
    -webkit-touch-callout:none;  /*系统默认菜单被禁用*/
    -webkit-user-select:none; /*webkit浏览器*/
    -khtml-user-select:none; /*早期浏览器*/
    -moz-user-select:none;/*火狐*/
    -ms-user-select:none; /*IE10*/
    user-select:none;
}
input {
     -webkit-user-select:auto; /*webkit浏览器*/
}
 .ly-tab-active-bar{
            bottom: 0!important;
        }
</style>
<template>
    <div style="height: 100vh;background:#f0f0f0;display: flex;flex-direction: column;">
        <div class="dialog" v-if="showDiolog">
            <div class="dialogContent">
                <div class="infoBox">
                    <p class="name">{{title}}</p>
                    <p class="font24" style="margin-top: 6px;">{{videoUrl}}</p>
                    <p class="font24 color97 buttonsmall" :data-clipboard-text="title+videoUrl" id="tags" @click="copy()">复制</p>
                </div>
            </div>
            <img class='closeIcon' @click="showDiolog=false" src="https://oss.ifxj.com/lanmao/health/closeShouquan.png">
        </div>
        <div class='headBox' v-if="items.length != 0">
            <ly-tab
            class="itemcolor"
                    v-model="selectindex"
                    :items="items"
                    @change="handleChange"
                    :options="options">
                </ly-tab>
        </div>
        <div v-if='isNodata' class="dataBox">
            <mt-loadmore  :bottom-method="loadBottom" bottomPullText="上拉加载更多" :auto-fill="false" ref="loadmore"
                            :bottom-all-loaded="allLoaded">
                <div v-for="item in concatData"  :data-clipboard-text="item.videoUrl+item.title" :id='"tags"+item.id' :key="item.id" v-tap="(e)=>goVideodetail(item.id)"
        v-longtap="(e)=>vueTouch(item)">
                    <div class="treasureBox flex">
                        <img class="imgUrlbox" v-if="item.imgUrl" :src='item.imgUrl'/>
                        <img class="imgUrlbox" v-if="!item.imgUrl" src='../../assets/image/videoUrl.jpg'/>

                        <div class="rightBox">
                            <div class="title">{{item.subtitle}}</div>
                             <div class='count'>
                                <img  class='viewIcon' src="../../assets/image/view.png">{{item.click}}
                             </div>
                        </div>
                    </div>
                </div>
            </mt-loadmore>
        </div>
        <div v-else class="nodata loginSucess">
            <img class='sucessLogo' src="../../assets/image/cover_play@2x.png">
            <div class="sucessTextBox">
                <p class="sucessText sucessTextone">暂无视频</p>
            </div>
        </div>

        <div class="bottom">
            <div class='flexAroud'  v-if="haslevelNo">
                 <div class="iconBox" @click="gohome()">
                    <img class='icon' src="../../assets/image/noselectHome.png">
                    <p class="noselect">健康首页</p>
                </div>
               <div class="iconBox">
                    <img class='icon' src="../../assets/image/selectVideo.png">
                    <p class="select">健康视频</p>
                </div>
              <!-- 关闭入口-->
               <!-- <div class="iconBox" v-if="levelNo && showOrder" @click="gorquity()">
                    <img class='icon' src="../../assets/image/noselectquanyi.png">
                    <p class="noselect">我的权益</p>
                </div>-->
                <div class="iconBox" @click="goOrder()">
                    <img class='icon' src="../../assets/image/noselectPerson.png">
                    <p class="noselect" v-if="showOrder">我的订单</p>
                    <p class="noselect" v-if="!showOrder">登录/注册</p>
                </div>
            </div>
           </div>
    </div>
</template>

<script>
    import {Loadmore, Toast,MessageBox} from 'mint-ui';
    import Util from '../../common/util'
    import Service from '../../common/service'
    import Global from "../../common/global";

    export default {
        name: "videoList",
         data() {
            return {
                haslevelNo: true,
                selectedId: '',
                title: '',
                videoUrl: '',
                showDiolog: false,
                timer: null,
                showOrder: false,
                selectindex: 0,
                items: [],
                options: {
                    activeColor: '#19b39d',
                    labelKey:'name'
                    // 可在这里指定labelKey为你数据里文字对应的字段
                },
                isNodata: true,
                active:0,
                concatData: [],//合并数据
                Data: [],//渲染数据
                moreData: true,
                page: 1,
                size: 10,
                hasMore: true,
                allLoaded: false
            }
        },
        created() {
            if(Util.getIsWxClient){
                Util.localStorageUtil.clear('platform');
                Util.localStorageUtil.clear('customerNo');
                Util.localStorageUtil.clear('phone');
                Util.localStorageUtil.clear('channelType');
            }
            const timestamp = Util.localStorageUtil.get('timestamp');
            const encode_string = Util.localStorageUtil.get('encode_string');
            if(timestamp&&encode_string){
                this.wxLogin()
            }else{
                this.getcategory()
                // this.orderList();
            }
            document.getElementsByTagName('title')[0].innerHTML = '视频列表';
        },
        mounted(){
          Global.goBack;
         },
         destroyed(){
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            getLeval(){
               /* var _this = this;
                Service.user().getlevel({
                }).then(response => {
                    if(response.errorCode == 0){
                        this.levelNo = response.data.levelNo;
                        this.haslevelNo = true;
                    }
                }, err => {
                });*/
            },
            gohome(){
                 this.$router.push({
                    name: 'home'
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
             islogin() {
                //调用接口获得数据
                Service.login().islogin({}).then(response => {
                    if(response.errorCode == 0){
                        if(response.data){
                            this.showOrder = true;
                              this.getLeval()
                        }else{
                            this.showOrder = false;
                              this.haslevelNo = true;
                        }
                        // alert(this.showOrder)
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
            copy(){
                var clipboard = new this.Clipboard('#tags')
                clipboard.on('success', e => {
                    Toast('复制成功');
                    // 释放内存
                    clipboard.destroy()
                })
                clipboard.on('error', e => {
                    // 不支持复制
                    Toast('该浏览器不支持自动复制')
                    // 释放内存
                    clipboard.destroy()
                })
                //  window.event? window.event.cancelBubble = true : e.stopPropagation();
            },
            vueTouch(item){
                var url = '';
                if(Global.env == 'dev' || Global.env == 'test'){
                    url =  'http://testjianfu.ifxj.com/service/videodetail/'+item.id;
                }else{
                    url =  'http://mall.kunlunhealth.com/service/videodetail/'+item.id;
                }
                this.title = item.title;
                this.videoUrl = url;
                this.showDiolog = true;
            },

            getcategory(){
                  Service.video().getcategory({}).then(response => {
                    if(response.errorCode == 0) {
                        var obj = {name: '全部',id: ''};
                        response.data.unshift(obj);
                         var data = response.data
                        this.items = data;
                          this.selectedId = '';
                          this.$nextTick(()=>{
                            $(".ly-tabbar").find(".ly-tab-item").each(function(i,item){
                                $(this).removeClass('fontweight')
                                if(i == 0){
                                    $(this).addClass('fontweight')
                                }
                            })
                          })
                            this.videoList();
                            this.islogin();


                    }
                }, err => {
                })
            },
            handleChange (item, index) {
                $(".ly-tabbar").find(".ly-tab-item").each(function(i,item){
                    $(this).removeClass('fontweight')
                    console.log(i,index)
                    if(i == index){
                        $(this).addClass('fontweight')
                    }
                })
                if(item){
                    this.selectindex = index;
                    this.selectedId = item.id;
                }
                 this.page = 1;
                 this.moreData = true;
                 this.allLoaded = false;
                this.videoList()
                // this.selectedId = item.id;
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
                        Util.localStorageUtil.set('access_token', response.data.token)
                        this.getcategory();
                        this.getLeval()
                    }
                }, err => {
                })
            },
            selctOrder(item,index){
                if(this.tabIndex == index){

                }else{
                    this.tabIndex = index;
                    this.concatData = [];
                    if(index == 0){
                        this.status = '';
                    }else{
                        this.status = this.tabIndex;
                    }
                    this.page = 1;
                    this.orderList()
                    for(var i =0;i< this.tabData.length;i++){
                        this.tabData[i].isSelect = false;
                    }
                    item.isSelect = true;
                    this.$forceUpdate();
                }

            },
            toShangcheng() {
                this.$router.push({'name': 'home',  query: this.$route.query})
            },
            goVideodetail(id) {

                this.$router.push({name: 'videodetail', params: {videoId: id}});

            },
              gorquity(){
                 if(this.showOrder){
                    this.$router.push({
                            name: 'equity',
                            query: this.$route.query
                        })
                }else{
                    this.goDenglu();
                }
            },
            loadBottom() {
                this.page++;
                if (this.moreData) {
                    this.videoList()
                } else {
                    Toast('没有更多数据了');
                }
                this.$refs.loadmore.onBottomLoaded();
            },
            videoList() {
                //调用接口获得数据
                Service.video().videoList({
                    page: this.page,
                    size: this.size,
                    categoryId: this.selectedId,
                    endTime: '',
                    startTime: '',
                    status: '0',
                    title: ''
                }).then(response => {
                    if(response.errorCode == 0){
                        if (response.data.records.length == 0 && this.page == 1) {
                            this.isNodata = false;
                        }
                        if (response.data.records.length != 0) {
                            this.isNodata = true;
                            this.orderDate = response.data.records;
                            for (var i = 0; i < this.orderDate.length; i++) {
                                if(this.orderDate[i].click>10000){
                                    this.orderDate[i].click = "1w+"
                                }
                                if(this.orderDate[i].title.length > 22){
                                    this.orderDate[i].subtitle = this.orderDate[i].title.substring(0,22)+'...'
                                }else{
                                    this.orderDate[i].subtitle = this.orderDate[i].title
                                }
                            }
                            if(this.page == 1){
                                this.concatData = [];
                            }
                            this.$nextTick(() => {
                                for (var i = 0; i < this.orderDate.length; i++) {
                                    this.concatData.push(this.orderDate[i]);
                                }
                            })
                        }
                        if (response.data.records.length < this.size) {
                            this.moreData = false;
                            this.allLoaded = true;
                        }
                    }
                }, err => {
                });
            },
            timetrans(d,type) {
                var getSeconds = '', getMinutes = '', getHours = '',getDate = '',getMonth = '';
                getMonth = (d.getMonth()+1) < 10 ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
                getDate = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
                getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
                var newTime = d.getFullYear() + '-' + getMonth + '-' + getDate;
                return newTime
            },
        }
    }
</script>


