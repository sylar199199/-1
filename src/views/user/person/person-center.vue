<template>
  <div class="container" v-if="showdata">
    <div class="contentBox">

    </div>
    <div class="bottom">
      <div class='flexAroud' v-if="haslevelNo" @click="goHome()">
        <div class="iconBox">
          <img class='icon' src="../../../assets/image/noselectHome.png">
          <p class="noselect">健康首页</p>
        </div>
        <div class="iconBox" @click="goVideo()">
          <img class='icon' src="../../../assets/image/noselectVideo.png">
          <p class="noselect">健康视频</p>
        </div>
        <div class="iconBox" v-if="levelNo && showOrder" @click="gorquity()">
          <img class='icon' src="../../../assets/image/noselectquanyi.png">
          <p class="noselect">我的权益</p>
        </div>
        <div class="iconBox" @click="goPersonCenter()">
          <img class='icon' src="../../../assets/image/selectPerson.png">
          <p class="select" v-if="showOrder">个人中心</p>
          <!--<p class="noselect" v-if="showOrder">我的订单</p>-->
          <p class="select" v-if="!showOrder">登录/注册</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Service from "../../../common/service";
  import Util from "../../../common/util";
  import Global from "../../../common/global";

  export default {
    name: "person-center",
    data() {
      return {
        showdata: true,
        haslevelNo: true,
        levelNo: true,
        showOrder: true,
      }
    },
    methods: {
      getLeval(){
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
            this.getLeval()
          }
        }, err => {
          Util.localStorageUtil.clear('timestamp');
          Util.localStorageUtil.clear('encode_string')
        })
      },
      goHome() {
        this.$router.push({
          name: 'home'
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
      goVideo() {
        this.$router.push({
          name: 'videoList'
        })
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
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '个人中心';
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
      }
    }
  }
</script>

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

    .contentBox {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      overflow-y: scroll;
      height: 200px;
    }
    .bottom {
      background: #fff;
      box-shadow: 0px 0px 15px 6px rgba(209, 209, 209, 0.25);
      text-align: center;
      width: 100%;
      height: 100rem/$baseFontSize;
      .flexAroud {
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
  }
</style>
