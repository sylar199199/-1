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
    height: 292rem/$baseFontSize;
    /*background: url("../../assets/image/homeBac.png") no-repeat center center;*/
    background-size: 100% 100%;
    @media screen and (min-width: 768px) {
      .swiper-inner {
        width: 100%;
        position: absolute;
        /*<!--bottom: 24rem/$baseFontSize;-->*/
        .swiper-slide {
          text-align: center;
          background-size: cover;
          background-color: rgba(255, 255, 255, 0);
          height: 292rem/$baseFontSize;
          width: 100%;

          img {
            height: 292rem/$baseFontSize;
            width: 100%;
          }
        }

        .banner {
          height: 292rem/$baseFontSize;
          width: 100%;

          img {
            height: 292rem/$baseFontSize;
            width: 100%;
          }
        }
      }
    }
    @media screen and (max-width: 767px) {
      .swiper-inner {
        width: 100%;
        position: absolute;
        /*<!--bottom: 24rem/$baseFontSize;-->*/
        .swiper-slide {
          text-align: center;
          background-size: cover;
          background-color: rgba(255, 255, 255, 0);
          height: 292rem/$baseFontSize;
          width: 100%;

          img {
            height: 292rem/$baseFontSize;
            width: 100%;
          }
        }

        .banner {
          height: 292rem/$baseFontSize;
          width: 100%;

          img {
            height: 292rem/$baseFontSize;
            width: 100%;
          }
        }
      }

    }

  }

  .product-box {
    .productTitle {
      padding: 38rem/$baseFontSize 0;
      text-align: center;
      color: #1d1d1d;

      .titleText {
        color: #1d1d1d;
        font-size: 30rem/$baseFontSize;
        height: 30rem/$baseFontSize;
        background: -webkit-linear-gradient(#fff 74%, #19b39d 26%); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#fff 74%, #19b39d 26%); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#fff 74%, #19b39d 26%); /* Firefox 3.6 - 15 */
        background: linear-gradient(#fff 74%, #19b39d 26%); /* 标准的语法 */
      }
    }

    .firstProduct {
      padding: 0 30rem/$baseFontSize;
      display: flex;

      .leftImg {
        height: 231rem/$baseFontSize;
        width: 50%;
        background-size: cover;
        position: relative;
        background-position: -145rem/$baseFontSize center;

        .redBac {
          background: url('../../assets/image/backSpecial.png') no-repeat center center;
          width: 100%;
          background-size: cover;
          height: 78rem/$baseFontSize;
          position: absolute;
          bottom: 0;

          .redPriceBox {
            display: flex;
            justify-content: space-between;
            padding: 28rem/$baseFontSize 15rem/$baseFontSize 0;

            .priceBox {
              .tejia {
                color: #fff;
                font-size: 36rem/$baseFontSize;
              }

              .yuanjia {
                margin-left: 3px;
                color: #c4c4c4;
                font-size: 22rem/$baseFontSize;
                text-decoration: line-through;
              }
            }

            .spanText {
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

      .rightText {
        width: 50%;
        margin-left: 15px;

        .rightTitle {
          color: #1d1d1d;
          font-size: 28rem/$baseFontSize;
          line-height: 30rem/$baseFontSize;
        }

        .rightTextdescrible {
          margin-top: 5px;
          color: #979797;
          font-size: 24rem/$baseFontSize;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 6; /* 可以显示的行数，超出部分用...表示*/
          -webkit-box-orient: vertical;
        }
      }
    }

    .describleBac {
      background: url('../../assets/image/backdescrible.png') no-repeat center center;
      width: 100%;
      height: 70rem/$baseFontSize;
      margin-top: 35rem/$baseFontSize;
      background-size: cover;
    }

    .productBoxlist {
      display: flex;
      flex-wrap: wrap;
      padding: 35rem/$baseFontSize 30rem/$baseFontSize;
      justify-content: space-between;

      .productBox {
        width: 330rem/$baseFontSize;
        padding-bottom: 35rem/$baseFontSize;

        .productImg {
          width: 330rem/$baseFontSize;
          height: 212rem/$baseFontSize;
          border-radius: 8px;
          background-position: center center;
          background-size: cover;
        }

        .productBoxTitle {
          color: #1d1d1d;
          font-size: 26rem/$baseFontSize;
          padding-top: 20rem/$baseFontSize;
        }

        .productBoxPrice {
          padding-top: 16rem/$baseFontSize;

          .tejia {
            color: #d80000;
            font-size: 32rem/$baseFontSize;
          }

          .yuanjia {
            margin-left: 3px;
            color: #979797;
            font-size: 24rem/$baseFontSize;
            text-decoration: line-through;
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

        .product-description {
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

        .colorSpan {
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

          .d-text {
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

  .border-grey {
    width: 100px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #f00;
    margin-left: 20px;
  }

  .contentBox {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow-y: scroll;
    height: 200px;
  }

  .flexCenter {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .flexAroud {
    display: flex;
    justify-content: space-around;
    width: 100%;

  }
</style>
<template>
  <div class="container" v-if="showdata">
    <div class="contentBox">
      <div class="back">
        <div class="swiperBox">
          <div class="swiper-inner" v-if="bannerList">
            <!-- swiper -->
            <swiper :options="swiperOption" ref="mySwiper" v-if="bannerList.length>1">
              <swiper-slide v-for="(item,index) in bannerList" :key="item.id">
                <a @click="goLink(item.linkUrl)">
                  <img :src="item.imgUrl"/>
                </a>
              </swiper-slide>
              <div class="swiper-pagination cursor" slot="pagination"></div>
            </swiper>
            <div class="banner" v-for="(item,index) in bannerList" v-if="bannerList.length == 1" :key="item.id">
              <a @click="goLink(item.linkUrl)">
                <img :src="item.imgUrl"/>
              </a>
            </div>

          </div>
        </div>
      </div>
      <div class="product-box">
        <div class="productTitle">
                <span class="titleText"> 为您推荐
                </span>
        </div>
        <div class="firstProduct" @click="getDetail(productList)">
          <div class="leftImg"
               :style="{backgroundImage: 'url(' + productList.imgUrl + ')',backgroundRepeat: 'no-repeat'}">
            <div class="redBac">
              <div class="redPriceBox">
                <div class="priceBox" v-if="productList.skuList">
                  <span class="tejia"
                        v-if="productList.skuList.length != 0">¥{{productList.skuList[0].sellPrice}}</span>
                  <span class="yuanjia"
                        v-if="productList.skuList.length != 0">¥{{productList.skuList[0].marketPrice}}</span>
                </div>
                <div class="spanText">特惠</div>
              </div>
            </div>
          </div>
          <div class="rightText">
            <p class="rightTitle">{{productList.name}}</p>
            <p class="rightTextdescrible">{{productList.summary}}</p>
          </div>
        </div>
        <div class="describleBac"></div>
        <div class="productBoxlist">
          <div class="productBox" v-for="item in concatData" @click="getDetail(item)" :key="item.id">
            <div class="productImg"
                 :style="{backgroundImage: 'url(' + item.imgUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}"></div>
            <div class="productBoxTitle">{{item.name}}</div>
            <div class="productBoxPrice">
              <span class="tejia" v-if="item.skuList.length != 0">¥{{item.skuList[0].sellPrice}}</span>
              <span class="yuanjia" v-if="item.skuList.length != 0">¥{{item.skuList[0].marketPrice}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class='flexAroud' v-if="haslevelNo">
        <div class="iconBox">
          <img class='icon' src="../../assets/image/selectHome.png">
          <p class="select">健康首页</p>
        </div>
        <div class="iconBox" @click="goVideo()">
          <img class='icon' src="../../assets/image/noselectVideo.png">
          <p class="noselect">健康视频</p>
        </div>
        <div class="iconBox" v-if="levelNo && showOrder" @click="gorquity()">
          <img class='icon' src="../../assets/image/noselectquanyi.png">
          <p class="noselect">我的权益</p>
        </div>
        <div class="iconBox" @click="goPersonCenter()">
          <img class='icon' src="../../assets/image/noselectPerson.png">
          <p class="noselect" v-if="showOrder">个人中心</p>
          <!--<p class="noselect" v-if="showOrder">我的订单</p>-->
          <p class="noselect" v-if="!showOrder">登录/注册</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import {Toast, MessageBox} from 'mint-ui';
  import Util from '../../common/util'
  import Service from '../../common/service'
  import Store from '../../vuex/index'
  import Global from '../../common/global'

  let wxConfig = Global.wxConfig
  export default {
    components: {
      swiper,
      swiperSlide,
    },
    data() {
      return {
        showdata: true,
        showOrder: true,
        v: 'ff',
        k: '33',
        item: {id: 1},
        imageUrl: 'https://ifxj.oss-cn-shenzhen.aliyuncs.com/xuean/banner/H5%E7%AB%AFbanner.png',
        swiperOption: {
          autoplay: {
            delay: 4000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          initialSlide: 0,//默认第1个
          slidesPerView: 'auto',
          centeredSlides: true,
          loop: true,
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
        loginInfo: {},
        isNodata: true,
        targetIndex: null,
        originIndex: null,
        levelNo: true,
        haslevelNo: true,
      }
    },
    // beforeRouteEnter(to, from, next) {
    //     next()
    // },
    created() {
      // $('.bottom').scrollTop($('.help-gundongtiao')[0].scrollHeight);
      $('html, body').animate({scrollTop: 0});
      this.loginInfo = Util.localStorageUtil.get("loginInfo")
      if (Util.getIsWxClient) {
        Util.localStorageUtil.clear('platform');
        Util.localStorageUtil.clear('customerNo');
        Util.localStorageUtil.clear('phone');
        Util.localStorageUtil.clear('channelType');
      }
      const timestamp = Util.localStorageUtil.get('timestamp');
      const encode_string = Util.localStorageUtil.get('encode_string');
      if (timestamp && encode_string) {
        this.wxLogin()//login
      } else {
        this.getBannerList();
      }
      // if(Util.localStorageUtil.get('platform') && Util.localStorageUtil.get('customerNo') && Util.localStorageUtil.get('phone')){//app
      //     if(this.$route.query.hmCustomerNo && this.$route.query.mobile && this.$route.query.platform){
      //         if(Util.localStorageUtil.get('customerNo') != this.$route.query.hmCustomerNo){
      //             Util.localStorageUtil.set('customerNo',this.$route.query.hmCustomerNo);
      //             Util.localStorageUtil.set('phone',this.$route.query.mobile);
      //             Util.localStorageUtil.set('platform',this.$route.query.platform);
      //         }
      //     }
      //     this.getLogin();
      // }else{
      //     if(this.$route.query.hmCustomerNo && this.$route.query.mobile && this.$route.query.platform){
      //         Util.localStorageUtil.set('customerNo',this.$route.query.hmCustomerNo);
      //         Util.localStorageUtil.set('phone',this.$route.query.mobile);
      //         Util.localStorageUtil.set('platform',this.$route.query.platform);
      //         this.getLogin();
      //     }else{
      //         const timestamp = Util.localStorageUtil.get('timestamp');
      //         const encode_string = Util.localStorageUtil.get('encode_string');
      //         if(timestamp&&encode_string){
      //             this.wxLogin()//login
      //         }else{
      //             this.getBannerList();
      //         }
      //     }
      // }
      document.getElementsByTagName('title')[0].innerHTML = '昆仑健康商城';
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
      goDenglu() {
        var url = '', locationHref = window.location.href;
        if (Util.localStorageUtil.get('channelType')) {
          var loginObject = {
            callBackURL: locationHref
          };
          if (this.isiOS) {
            webkit.messageHandlers.gotoNative.postMessage({"pageName": "HealthMall-Login", "parameter": loginObject})
          } else if (this.isAndroid) {
            HostApp.gotoNative("HealthMall-Login", loginObject)
          }
        } else {
          if (Global.env == 'dev' || Global.env == 'test') {
            url = 'http://testm.kunlunhealth.com.cn/user/login?redirectUrl=' + encodeURIComponent(locationHref);
          } else {
            url = 'https://m.kunlunhealth.com.cn/user/login?redirectUrl=' + encodeURIComponent(locationHref);
          }
          window.location.href = url;
        }
      },
      islogin() {
        //调用接口获得数据
        Service.login().islogin({}).then(response => {
          if (response.errorCode == 0) {
            if (response.data) {
              this.showOrder = true;
              this.getLeval()
            } else {
              this.showOrder = false;
              this.haslevelNo = true;
            }
          }
        }, err => {
        });
      },
      goLink(url) {
        if (url) {
          if (url.indexOf('http') >= 0 || url.indexOf('https') >= 0) {
            window.location.href = url
          } else {
            this.$router.push({'path': '/' + url});
          }
        }
      },
      getBannerList() {
        var _this = this;
        Service.banner().getBanner({}, 1).then(response => {
          this.showdata = true;
          // if(!Util.localStorageUtil.get('channelType')){
          this.islogin()//islogin
          // }
          this.getProductList();//rec

          var bannerList = response.data;
          _this.bannerList = bannerList;
        }, err => {
        })
      },
      getLeval() {
       /* var _this = this;
        Service.user().getlevel({}).then(response => {
          if (response.errorCode == 0) {
            console.log(response.data)
            this.levelNo = response.data.levelNo;
            this.haslevelNo = true;

          }
        }, err => {
        });*/
      },
      getProductList() {
        var _this = this;
        Service.goods().getGoods({}, 1).then(response => {
          if (response.errorCode == 0) {
            if (response.data.length != 0) {
              this.isNodata = true;
              this.productList = response.data[0];
              this.$nextTick(() => {
                for (var i = 0; i < response.data.length; i++) {
                  if (i != 0) {
                    this.concatData.push(response.data[i]);
                  }
                }
              })
            }
          }
        }, err => {
        });
      },
      goVideo() {
        this.$router.push({
          name: 'videoList'
        })
      },
      gorquity() {
        if (this.showOrder) {
          this.$router.push({
            name: 'equity',
            query: this.$route.query
          })
        } else {
          this.goDenglu();
        }
      },
      goPersonCenter() {
        if (this.showOrder) {
          if (this.$route.query.timestamp || this.$route.query.encode_string || this.$route.query.customparam) {
            this.$router.push({
              name: 'person-center'
            })
          } else {
            this.$router.push({
              name: 'person-center',
              query: this.$route.query
            })
          }

        } else {
          this.goDenglu();
        }
      },
      /*    goOrder() {
        if (this.showOrder) {
          if (this.$route.query.timestamp || this.$route.query.encode_string || this.$route.query.customparam) {
            this.$router.push({
              name: 'orderlist'
            })
          } else {
            this.$router.push({
              name: 'orderlist',
              query: this.$route.query
            })
          }

        } else {
          this.goDenglu();
        }
      },*/
      getDetail(item) {
        if (this.$route.query.timestamp || this.$route.query.encode_string || this.$route.query.customparam) {
          if (item.collectionChannel === 2) {
            window.location.href = `http://${Global.clientInfo.fxjTwoLevel}/product/detail/${item.id}`;
          } else {
            this.$router.push({
              name: 'detail',
              params: {
                productId: item.id
              }
            })
          }
        } else {
          if (item.collectionChannel === 2) {
            window.location.href = `http://${Global.clientInfo.fxjTwoLevel}/product/detail/${item.id}`;
          } else {
            // window.location.href ='http://192.168.8.192:8085/product/detail/9'
            this.$router.push({
              name: 'detail',
              params: {
                productId: item.id
              },
              query: this.$route.query
            })
          }
        }


      },
      getUrlParms(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
          return unescape(r[2]);
        return null;
      },
      wxLogin() {
        const timestamp = Util.localStorageUtil.get('timestamp');
        const encode_string = Util.localStorageUtil.get('encode_string');
        Service.login().wxlogin({
          'encodeString': encodeURIComponent(encode_string),
          'timestamp': timestamp
        }).then(response => {
          Util.localStorageUtil.clear('timestamp');
          Util.localStorageUtil.clear('encode_string')
          if (response.errorCode == 0) {
            Util.localStorageUtil.set('access_token', response.data.token);
            Util.localStorageUtil.set('loginInfo', response.data);
            this.showOrder = true;
            this.getBannerList();
            this.getLeval()
          }
        }, err => {
          Util.localStorageUtil.clear('timestamp');
          Util.localStorageUtil.clear('encode_string')
        })
      },
    },
    beforeMount() {
      this.currentPathName = this.$route.name;
      this.activeRoute = this.$route.matched[this.$route.matched.length - 1].path
    },
    mounted() {
      Global.goBack;
    },
    destroyed() {
    },

  }
</script>


