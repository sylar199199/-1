<style rel="stylesheet/scss" lang="scss" scoped>
    $bgcolor: #D51E12;
    $fontColor: #fff;
    $bgtc: #ECECEC;
    $baseFontSize: 75;
    .tabBox{
        position: fixed;
        width: 100%;
        background: #fff;
        height: 90rem/$baseFontSize;
        line-height: 90rem/$baseFontSize;
        top: 0;
        z-index: 100;
        .fixedBox{
            padding: 0 56rem/$baseFontSize;
            display: flex;
            justify-content: space-between;
            .tabTitle{
                position: relative;
            }
            .orderCount{
                position: absolute;
                top: 6px;
                left: 36px;
                display: inline-block;
                border: 1px solid #d41c19;
                border-radius: 50%;
                height: 30rem/$baseFontSize;
                min-width:30rem/$baseFontSize;
                line-height: 30rem/$baseFontSize;
                text-align: center;
                padding: 1px 2px;
                font-size: 12px;
            }
            .orderCountmore{
                position: absolute;
                top: 6px;
                height: 30rem/$baseFontSize;
                min-width:42rem/$baseFontSize;
                line-height: 30rem/$baseFontSize;
                text-align: center;
                right: -30px;
                display: inline-block;
                border: 1px solid #d41c19;
                border-radius: 15rem/$baseFontSize;
                padding: 1px;
            }
            .selecttabTitle{
                position: relative;
                .lineBox{
                    width: 15px;
                    height: 6rem/$baseFontSize;
                    background-color: #19b39d;
                    border-radius: 3rem/$baseFontSize;
                    bottom: 0;
                    /*left: 50%;*/
                    margin: -6rem/$baseFontSize auto;
                }
            }
        }
    }
    .dataBox{
        margin-top: 90rem/$baseFontSize;
        padding-bottom: 80px;
        overflow-x: auto;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch; // 解决ios滑动不流畅的问题
        height: 100vh;
        .treasureBox {
            background: #fff;
            margin-top: 16rem/$baseFontSize;
            .treasureTop {
                padding: 15px;
                background: #fff;
                border-radius: 10px 10px 0 0;
                border-top: 1px solid rgba(209, 209, 209, 0.25);
                .applayMouth {
                    display: inline-block;
                    vertical-align: middle;
                }
                .orderIcon {
                    height: 34rem/$baseFontSize;
                    width: 30rem/$baseFontSize;
                    display: inline-block;
                    vertical-align: middle;
                    padding-right: 8px;
                }
                .applayTotal {
                    font-size: 24rem/$baseFontSize;
                    font-weight: 600;
                }
                .finish {
                    color: #19b39d;
                }
                .fail {
                    color: #ed5050;
                }
                .black {
                    color: #929292;
                }
            }
            .failYuanyin {
                background: #fff;
                padding: 0 15px 15px;
                .failText {
                    background: #FFF1F1;
                    color: #ed5050;
                    padding: 15px;
                    line-height: 20px;
                    font-size: 24rem/$baseFontSize;
                    border-radius: 5px;
                }
            }
            .titleBoxone {
                border-radius: 0 0 10px 10px;
            }
            .popImgBox{
                padding: 36rem/$baseFontSize 30rem/$baseFontSize;
                display: flex;
                position: relative;
                background: #fff;
                margin-top: 16rem/$baseFontSize;
                .popImg{
                    min-width: 220rem/$baseFontSize;
                    max-width: 220rem/$baseFontSize;
                    width: 220rem/$baseFontSize;
                    height: 148rem/$baseFontSize;
                    border-radius: 8px;
                    background-size: cover;
                    background-position: center center;
                    position: relative;
                    .mark{
                        background: #19b39d;
                        color: #fff;
                        display: inline-block;
                        padding: 2px 4px;
                        border-radius: 8px 0px 0px 0;
                        font-size: 12px;
                        position:absolute;
                        // top: 6px;
                    }
                }
                .popGuigeTitle{
                    margin-left: 12rem/$baseFontSize;
                    .popprice{
                        display: flex;
                        justify-content: space-between;
                        .productName{
                            margin-right: 12px;
                            font-size: 24rem/$baseFontSize;
                        }
                    }
                    .kucun{
                        display: flex;
                        justify-content: space-between;
                        .productDes{
                            color:#979797;
                            font-size: 22rem/$baseFontSize;
                            margin-top: 10rem/$baseFontSize;

                        }
                        .shuliang{
                            color:#979797;
                            font-size: 22rem/$baseFontSize;
                            margin-top: 3px;
                            padding-left: 16px;
                            display:inline-block;
                            min-width: 40rem/$baseFontSize;
                        }
                    }
                    .yixuan{
                        position: absolute;
                        color:#d80000;
                        font-size: 32rem/$baseFontSize;
                        bottom: 36rem/$baseFontSize;
                    }

                }
            }
            .treasureBottom {
                padding: 0 30rem/$baseFontSize 30rem/$baseFontSize;
                .guigeCount{
                    margin-top: 3px;
                    margin-right: 4px;
                }
                .appleyMoney {
                    line-height: 54rem/$baseFontSize;
                    font-size: 24rem/$baseFontSize;
                    color: #19b39d;
                    display: inline-block;
                    border: 1px solid #19b39d;
                    width: 137rem/$baseFontSize;
                    height: 54rem/$baseFontSize;
                    text-align: center;
                    border-radius: 5px;
                    font-weight: 600;
                }
            }
        }

    }
    .loginSucess {
        text-align: center;
        .sucessLogo {
            height: 260rem/$baseFontSize;
            width: 260rem/$baseFontSize;
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
        .goGuanzhu {
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            top: 920rem/$baseFontSize;
        }
        .lijiguanzhu {
            background: #0abf9b;
            color: #fff;
            top: 809rem/$baseFontSize;
        }
        .code {
            margin-top: 8px;
            .fxjCode {
                height: 152px;
                width: 152px;
            }
            .introduce {
                font-size: 24rem/$baseFontSize;
                color: #929292;
                margin-top: 6px;
            }

        }
    }
</style>
<template>
    <div style="min-height: 100vh;background:#f0f0f0;">
        <form method="post"  class="cgForm"  :action="formData != null ? httpUrl: ''">
        </form>
        <div class="tabBox">
            <div class="fixedBox">
                <div @click="selctOrder(item,index)" :class="item.isSelect?'selecttabTitle font26 color2c':'tabTitle font26 color97' " v-for="(item,index) in tabData">
                    {{item.name}}
                    <div class="lineBox" v-if="item.isSelect"></div>
                    <span :class="item.count>1000?'orderCountmore font22 colord4':'orderCount font22 colord4'" v-if="item.count>=10000 ">999+</span>

                    <span :class="item.count>1000?'orderCountmore font22 colord4':'orderCount font22 colord4'" v-if="item.count>0 && item.count<10000 ">{{item.count}}</span>
                </div>
            </div>
        </div>
        <div v-if='isNodata' class="dataBox">
            <mt-loadmore :bottom-method="loadBottom" bottomPullText="上拉加载更多" :auto-fill="false" ref="loadmore"
                         :bottom-all-loaded="allLoaded">
                <div v-for="item in concatData" @click="goOrderdetail(item.id)">
                    <div class="treasureBox">
                        <div class="borderBox">
                            <div class="flexBetween treasureTop">
                                <div>
                                    <span class="applayMouth color97 font24">订单号: {{item.orderNo}}</span>
                                </div>
                                <div v-if="!item.afs">
                                    <span class="applayTotal colord8" v-if="item.status == 1">待支付</span>
                                    <span class="applayTotal colord8" v-if="item.status == 2">待发货</span>
                                    <span class="applayTotal colord8" v-if="item.status == 3">待收货</span>
                                    <span class="applayTotal colord8" v-if="item.status == 4 && item.planActivateNowFlag != '01'">交易成功</span>
                                     <span class="applayTotal colord8" v-if="item.status == 4 && item.planActivateNowFlag == '01'">待激活</span>
                                    <span class="applayTotal  color2c" v-if="item.status == 5">已激活</span>
                                    <span class="applayTotal colord8" v-if="item.status == 6">交易关闭</span>
                                    <span class="applayTotal color2c" v-if="item.status == 7">交易完成</span>
                                </div>
                                <div v-if="item.afs">
                                    <span class="applayTotal colord8" v-if="item.afs.status == 1">退货中</span>
                                    <span class="applayTotal colord8" v-if="item.afs.status == 2">拒绝退货</span>
                                    <span class="applayTotal color2c" v-if="item.afs.status == 3">同意退货</span>
                                    <span class="applayTotal colord8" v-if="item.afs.status == 4">退款中</span>
                                    <span class="applayTotal  colord8" v-if="item.afs.status == 5">拒绝退款</span>
                                    <span class="applayTotal color2c" v-if="item.afs.status == 6">已退款</span>
                                </div>
                            </div>
                            <div class="popImgBox">
                                <div class="popImg" :style="{backgroundImage: 'url(' + item.goodsImgUrl + ')',backgroundRepeat: 'no-repeat'}">
                                    <div class="mark" v-if="item.orderType == '02'">
                                        权益
                                    </div>
                                </div>
                                <div class="popGuigeTitle">
                                    <p class="popprice">
                                        <span class="productName color1d">{{item.goodsName}}</span>
                                        <span class="price color1e" v-if="item.orderType == '01'">¥{{item.goodsPrice}}</span>
                                    </p>
                                    <p class="kucun">
                                        <span class="productDes color1d">{{item.planName}}</span>
                                         <span class="shuliang">x 1</span>
                                    </p>
                                </div>
                            </div>
                            <div class="clear treasureBottom" v-if="item.orderType == '01'">
                                <span class="orderMoney colord8 font32 fr" @click.stop='goPay(item.payOrderNo,item.id,item.productId)'>¥{{item.goodsPrice}}</span>
                                <span class=" font24 color1e guigeCount fr">共1件   应付总额:</span>
                            </div>
                            <div class="clear treasureBottom" v-if="item.status == 1">
                                <span class="smallButton fr" @click.stop='goPay(item.id,item.goodsPrice, item)'>去支付</span>
                                <span class="smallgreyButton fr" style="margin-right: 10px;"  @click.stop='cancleOrder(item.id)'>取消订单</span>
                            </div>
                            <div class="clear treasureBottom" v-else-if="(item.status == 4) || (item.status == 2)|| (item.status == 5)|| (item.status == 7)">
                                <span class="smallButton fr" style="margin-left: 10px;" v-if="(item.status == 4) && (item.planActivateNowFlag == '01')"  @click.stop='goUse(item)'>去使用</span>
                                <span class="smallButton fr" @click.stop="goProductDes(item.goodsId)" v-if="item.usageInstructionsFlag == 1">使用说明</span>
                            </div>
                            <div class="clear treasureBottom" v-else-if="item.status == 3">
                                 <span class="smallgreyButton fr" @click.stop='goLogistics(item.id)'>查看物流</span>
                                  <span class="smallButton fr"  @click.stop="goProductDes(item.goodsId)" v-if="item.usageInstructionsFlag == 1">使用说明</span>
                            </div>
                            <div class="clear treasureBottom" v-else-if="item.status == 6">
                                <span class="smallgreyButton fr" @click.stop='deleteOrder(item.id)'>删除订单</span>
                            </div>
                        </div>
                    </div>
                </div>
            </mt-loadmore>
        </div>
        <div v-else class="nodata loginSucess">
            <img class='sucessLogo' src="../../../assets/image/noIcon.png">
            <div class="sucessTextBox">
                <p class="sucessText sucessTextone">您还没有任何订单</p>
            </div>
            <div class="goGuanzhu smallButton" @click="toShangcheng">去看看</div>
        </div>
    </div>
</template>

<script>
    import {Loadmore, Toast,MessageBox} from 'mint-ui';
    import Util from '../../../common/util'
    import Service from '../../../common/service'
    import Global from "../../../common/global";

    export default {
        name: "orderlist",
        data() {
            return {
                imageUrl: 'https://oss.xueantong.cn/xuean/product/1.png',
                count: '2',
                hasMore: true,
                tabData:[
                    {name: '全部'},
                    {name: '待付款'},
                    {name: '待发货'},
                    {name: '待收货'},
                    {name: '待激活'}
                ],
                isNodata: true,
                page: 1,
                size: 10,
                allLoaded: false,
                lastId: '',
                concatData: [],//合并数据
                Data: [],//渲染数据
                orderDate: [],
                moreData: true,
                tabIndex: 0,
                status: '',
                orderCount: null,
                formData: {},
                httpUrl: '',
            }
        },
        created() {
            //测试环境
            if(Global.env == 'dev' || Global.env == 'test'){
                this.httpUrl = 'https://s3test.kunlunhealth.com.cn/s3-modules-gateway/embed/gateway.action';
            }else{
                this.httpUrl = 'https://s3.kunlunhealth.com.cn/s3-modules-gateway/embed/gateway.action';
            }
            if(this.getIsWxClient()){
                Util.localStorageUtil.clear('platform');
                Util.localStorageUtil.clear('customerNo');
                Util.localStorageUtil.clear('phone');
                Util.localStorageUtil.clear('channelType');
            }
            const timestamp = Util.localStorageUtil.get('timestamp');
            const encode_string = Util.localStorageUtil.get('encode_string');
            if(timestamp&&encode_string){
                this.getLogin()
            }else{
                this.orderList();
            }
            document.getElementsByTagName('title')[0].innerHTML = '订单管理';
            for(var i =0;i< this.tabData.length;i++){
                this.tabData[i].isSelect = false;
                this.tabData[0].isSelect = true;
            }
        },
      mounted() {
        Global.goBack;
      },
        methods: {
             goProductDes(goodsId){
                this.$router.push({'name': 'productdescription',params: {goodsId: goodsId}})
            },
            getIsWxClient() {
                var ua = navigator.userAgent.toLowerCase();
                if (ua.match(/MicroMessenger/i) == "micromessenger") {
                    return true;
                }
                return false;
            },
            getLogin(){
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
                        this.orderList();
                    }
                }, err => {
                })
            },
            deleteOrder(id){
                Service.order().deleteOrder({},id).then(response => {
                    if (response.errorCode == 0) {
                        Toast('删除成功');
                        this.page = 1;
                        this.orderList()
                        this.getorderstats()
                    }
                })
            },
            getorderstats(){
                Service.order().orderstats({}).then(response => {
                    if (response.errorCode == 0) {
                        this.orderCount = response.data;
                        for(var i = 0;i<this.tabData.length;i++){
                            if(i == 0){
                                this.tabData[i].count = null
                            }
                            if(i == 1){
                                this.tabData[i].count = response.data.unpaidCount
                            }
                            if(i == 2){
                                this.tabData[i].count = response.data.unshippedCount
                            }
                            if(i == 3){
                                this.tabData[i].count = response.data.unreceivedCount
                            }
                            if(i == 4){
                                this.tabData[i].count = response.data.unusedCount
                            }
                        }
                        this.$forceUpdate()

                    }
                })
            },
            cancleOrder(id){
                MessageBox.confirm('确定要取消订单吗?').then(action => {
                    Service.order().closeOrder({},id).then(response => {
                        if (response.errorCode == 0) {
                            Toast('操作成功');
                            this.page = 1;
                            this.orderList()
                            this.getorderstats()
                        }
                    })
                });
            },
            goLogistics(id){
                this.$router.push({
                    name: 'logistics',
                    params:{orderid: id},
                })
            },
            goUse(item){//去使用
                if(item.planActivateNowFlag == '01' && Util.localStorageUtil.get('channelType')){
                    Service.user().getuserInfo({}).then(response => {
                        if (response.errorCode == 0) {
                            var customerNo = response.data.customerNo
                            MessageBox.confirm('服务卡激活后无法申请退款处理，您现在激活服务卡吗?','温馨提示').then(action => {
                                var callBackURL = '';
                                if (Global.env == 'dev' || Global.env == 'test') {
                                    callBackURL = 'http://testjianfu.ifxj.com/user/order/orderlist';
                                } else {
                                    callBackURL = 'http://mall.kunlunhealth.com/user/order/orderlist';
                                }
                                // iOS
                                var jsonObject = {
                                    cardNo: item.card.cardNumber,
                                    cardPwd: item.card.password,
                                    hmCustomerNo: customerNo,
                                    callBackURL: callBackURL
                                }
                                // var platform = Util.localStorageUtil.get('platform');
                                if (this.isiOS) {
                                    webkit.messageHandlers.gotoNative.postMessage({"pageName": "HealthMall-Active", "parameter":jsonObject})
                                }
                                if (this.isAndroid) {
                                    // 安卓
                                    HostApp.gotoNative("HealthMall-Active", jsonObject)
                                }
                            });
                        }
                    })
                }else{
                    MessageBox.confirm('服务卡激活后无法申请退款处理，您现在激活服务卡吗?','温馨提示').then(action => {
                        this.$router.push({'name': 'productdescription',params: {goodsId: item.goodsId}})
                    });

                }
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
            goOrderdetail(id) {
                this.$router.push({name: 'orderDetail', params: {orderId: id}});
            },
            loadBottom() {
                this.page++;
                if (this.moreData) {
                    this.orderList()
                } else {
                    Toast('没有更多数据了');
                }
                this.$refs.loadmore.onBottomLoaded();
            },
            orderList() {
                //调用接口获得数据
                Service.order().getOrderList({
                    page: this.page,
                    size: this.size,
                    status: this.status,
                }).then(response => {
                    // Toast({
                    //     message: JSON.stringify(response),
                    //     duration: 30000,
                    // });
                    if(response.errorCode == 0){
                        this.getorderstats();
                        if (response.data.records.length == 0 && this.page == 1) {
                            this.isNodata = false;
                        }
                        if (response.data.records.length != 0) {
                            this.isNodata = true;
                            this.orderDate = response.data.records;
                            for (var i = 0; i < this.orderDate.length; i++) {
                                this.orderDate[i].createDate = this.timetrans(new Date(parseInt(this.orderDate[i].createDate)));
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
                },);
            },
            timetrans(d,type) {
                var getSeconds = '', getMinutes = '', getHours = '',getDate = '',getMonth = '';
                getMonth = (d.getMonth()+1) < 10 ? '0' + (d.getMonth()+1) : (d.getMonth()+1);
                getDate = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
                getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
                var newTime = d.getFullYear() + '-' + getMonth + '-' + getDate;
                return newTime
            },
            getIsWxClient () {
                var ua = navigator.userAgent.toLowerCase();
                if (ua.match(/MicroMessenger/i) == "micromessenger") {
                    return true;
                }
                return false;
            },
            goPay(orderId,goodsPrice, item) {//直接跳转到去支付页面
               // 分享家商品 去分享家收银台
              if (item.collectionChannel === 2) {
                let newItem = {
                  amount: item.amount,
                  goodsName: item.goodsName,
                  orderNo: item.orderNo,
                  paymentDeadline: item.paymentDeadline,
                  id: item.id
                }
                let itemArr = []
                itemArr.push(newItem)
                let queryData = JSON.stringify(itemArr)
                window.location.href = `http://${Global.clientInfo.fxjTwoLevel}/product/cashier?queryData=${queryData}`;
                return;
              }
              var arrId = [];
                arrId.push(orderId);
                var url = '',platform = '';
                if(Global.env == 'dev' || Global.env == 'test'){
                    url =  'http://testjianfu.ifxj.com/pay/result';
                }else{
                    url =  'http://mall.kunlunhealth.com/pay/result';
                }
                if(this.getIsWxClient()){
                    platform = 2;
                }else{
                    platform = 1;
                }
                Service.order().payOrders3({orderIds: arrId,returnUrl: url,platform: platform}).then(response => {
                    if (response.errorCode == 0) {
                        this.formData = response.data;
                        this.$nextTick(()=> {
                            var str = '';
                            for (let p in this.formData) {
                                str += '<input type="hidden" value="' + this.formData[p] + '" name="' + p + '">';
                            }
                            $(".cgForm").append($(str))
                            $(".cgForm").attr('action', this.httpUrl);
                            $('.cgForm').get(0).submit()
                        })
                    }else{
                    }
                })
            }
        }
    }
</script>


