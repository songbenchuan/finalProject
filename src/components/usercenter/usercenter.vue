<template>
    <div class="count-wrapper">
      <div class="header">
        <p class="header-center">账户中心</p>
        <span class="header-right">设置</span>
      </div>
      <div class="user-wrapper">
        <div class="nolog">
          <span class="state">您还未登录</span>
          <div class="entry">
            <router-link to="/login" class="font-large">登录</router-link>
            <span class="split"></span>
            <router-link to="/register" class="font-large">注册</router-link>
          </div>
        </div>
      </div>
      <div class="dashboard-order">
        <ul>
          <li>
            <a href="">
              <span class="item-icon icon1"></span>
              <span class="item-title">待支付</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="item-icon icon2"></span>
              <span class="item-title">待发货</span>
            </a>
          </li>
          <li class="lastborder">
            <a href="">
              <span class="item-icon icon3"></span>
              <span class="item-title">待收货</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">
              <span class="item-icon icon4"></span>
              <span class="item-title">待评论</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="item-icon icon5"></span>
              <span class="item-title">回复</span>
            </a>
          </li>
          <li  class="lastborder">
            <a href="">
              <span class="item-icon icon6"></span>
              <span class="item-title">退换货</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="dashboard">
        <ul>
          <li>
            <a href="">
              <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_list_cm.png" alt="">
              <span class="item-title">我的订单</span>
              <span class="arr-r"></span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">
              <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_coupon_cm.png" alt="">
              <span class="item-title">我的优惠券</span>
              <span class="arr-r"></span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_pig_cm.png" alt="">
              <span class="item-title">现金积分</span>
              <span class="arr-r"></span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_invoice.png" alt="">
              <span class="item-title">关于发票</span>
              <span class="arr-r"></span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">
              <img src="http://i.lifevccdn.com/upload/centermenuimg/i_gear_cm.png" alt="">
              <span class="item-title">密码和登录信息</span>
              <span class="arr-r"></span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="http://i.lifevccdn.com/upload/centermenuimg/i_dialoguebubble3_cm.png" alt="">
              <span class="item-title">老会员建议</span>
              <span class="arr-r"></span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="http://i.lifevccdn.com/upload/centermenuimg/i_customerservice_cm.png" alt="">
              <span class="item-title">客户服务</span>
              <span class="arr-r"></span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="http://i.lifevccdn.com/upload/centermenuimg/ic_currentnode_cm.png" alt="">
              <span class="item-title">地址管理</span>
              <span class="arr-r"></span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="http://i.lifevccdn.com/upload/centermenuimg/sms_cm.png" alt="">
              <span class="item-title">手机验证</span>
              <span class="arr-r"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .count-wrapper
    padding-bottom 4.5rem
    .header
      position fixed
      top 0
      left 0
      right 0
      background: #89be48;
      color: #fff;
      .header-center
        line-height: 4rem;
        font-size: 2rem;
        text-align: center;
      .header-right
        position: absolute;
        right: 2%;
        top: 0;
        font-size: 1.8rem;
        line-height: 4rem;
        margin-right: 2%;
    .user-wrapper
      width: 100%;
      height: 9rem;
      background-image: url(http://i1.lifevccdn.com/images/h5/core/background.png);
      background-size: 100% 100%;
      background-repeat no-repeat
      margin-top: 4rem;
      .nolog
        width: 100%;
        overflow: hidden;
        text-align: center;
        margin: 0 auto;
        padding: .5rem 0 0;
        .state
          text-align: center;
          font-size: 1.6rem;
          line-height: 3rem;
          display: block;
          color: #222;
        .entry
          display: inline-block;
          color: #009c42;
          padding: 0 10px;
          height: 3rem;
          background: hsla(0,0%,100%,.4);
          border: 1px solid #009c42;
          border-radius: 1.5rem;
          margin: .5rem auto 0;
          text-align: center;
          font-size: 1.6rem;
          line-height: 3rem;
          .font-large
            display: inline-block;
            color: #009c42;
            padding: 0 10px;
          .split
            width: 1px;
            height: 1.2rem;
            display: inline-block;
            border-left: 1px solid #009c42;
    .dashboard-order
      width: 100%;
      overflow: hidden;
      background-color: #fff;
      border-top: 1px solid #eee;
      margin: 0 auto;
      ul
        width: 100%;
        height: 5rem;
        overflow: hidden;
        border-bottom: 1px solid #eee;
        margin: 0;
        padding: 0;
        .lastborder
          border 0
        li
          width: 33%;
          height: 2.5rem;
          float: left;
          border-right: 1px solid #dedede;
          line-height: 2rem;
          margin: 1.5rem 0 0;
          padding: 0;

          a
            display: block;
            text-align: center;
            color: #585858;
            text-decoration: none;
            .item-icon
              display: inline-block;
              height: 3rem;
              width: 3.5rem;
              background-repeat: no-repeat;
              background-size: 99% 120%;
              background-position: -5px -7px;
            .icon1
              background-image: url('./k8kxnt3m85ucvotrascci1j66ewqbq16.png');
            .icon2
              background-position: 2px -7px;
              background-image: url('./11dt7b4flzvj708dm22bo5chcoat3vp9.png');
            .icon3
              width: 3.7rem;
              background-position: -2px -7px;
              background-image: url('./mrlgjo4rj6oum4g17h304a24hrzizefn.png');
            .icon4
              background-position: -6px -7px;
              background-image: url('./30mv1b9zz0io9jk0ao2bb6g1fg2glbtl.png');
            .icon5
              background-position: -6px -4px;
              background-image: url('./b290nq8ttv836sj43yet4dohml9xmq9n.png');
            .icon6
              background-position: -6px -7px;
              background-image: url('./7i3ag38y5fwxy31s0d07p4quybil3gqh.png');
            .item-title
              display: inline-block;
              vertical-align: 56%;
              font-size: 1.2rem;
              color: #585858;
              line-height: 2.5rem;
    .dashboard
      ul
        margin-bottom 1rem
        li
          width: 100%;
          height: 5rem;
          overflow: hidden;
          background-color: #fff;
          border-bottom: 1px solid #eee;
          border-top: 1px solid #eee;
          margin: -1px auto 0;
          a
            width: 100%;
            height: 5rem;
            display: block;
            img
              width: 2.5rem;
              overflow: hidden;
              display: inline-block;
              float: left;
              margin: 1.3rem 1.1rem 0;
              vertical-align middle
            .item-title
              display: inline-block;
              line-height: 5rem;
              text-decoration: none;
              float: left;
              vertical-align: 0;
              font-size: 1.4rem;
              color: #585858;
            .arr-r
              width: 10px;
              height: 10px;
              display: inline-block;
              float: right;
              border-right: 2px solid #bbb;
              border-top: 2px solid #bbb;
              margin: 25px 10px 0 0;
              transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              -moz-transform: rotate(45deg);
              -webkit-transform: rotate(45deg);
              -o-transform: rotate(45deg);
</style>
