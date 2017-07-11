<template>
  <div class="app">
    <router-view></router-view>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/home">
          <i class="iconfont icon-shouye"></i>
          <p>首页</p>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/all">
          <i class="iconfont icon-category"></i>
          <p>全部产品</p>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/stroll">
          <i class="iconfont icon-compass"></i>
          <p>闲逛</p>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/cart">
          <i class="iconfont icon-gouwuche"></i>
          <p>购物车</p>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/usercenter">
          <i class="iconfont icon-account"></i>
          <p>用户中心</p>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>

  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    background-color: #eee;
  .tab
    position :fixed
    bottom:0
    left :0
    width :100%
    height :55px
    box-sizing :border-box
    padding-top :8px
    display :flex
    background: #f8f8f8
    box-shadow: inset 1px 2px 1px -1px #e3e3e3      //1px
    z-index 100
    .tab-item
      width:20%
      text-align :center
      .iconfont
        display :inline-block
        font-size 23px
        color :none
        margin-bottom 0.5rem
      p
        font-size :1.1rem
      .active
        color :green

</style>

