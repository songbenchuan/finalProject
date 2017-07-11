<template>
  <div>
    <div class="header-wrapper">
      <div class="header-image"></div>
      <span></span>
    </div>
    <div class="nav">
      <ul class="navul">
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/newproduct">新品</router-link>
        </li>
        <li>
          <router-link to="/homework">家务</router-link>
        </li>
        <li>
          <router-link to="/kitchen">下厨</router-link>
        </li>
        <li>
          <router-link to="/homecloth">家居服</router-link>
        </li>
        <li>
          <router-link to="/life">生活</router-link>
        </li>
        <li>
          <router-link to="/soft">软装</router-link>
        </li>
        <li>
          <router-link to="/bed">床品</router-link>
        </li>
        <li>
          <router-link to="/trip">工作和旅行</router-link>
        </li>
        <li>
          <router-link to="/know">了解LifeVC</router-link>
        </li>
      </ul>
    </div>
    <div class="swipper-container">
      <img src="./924590309cb749fabf810a832a402984_d1242x0.jpg" alt="">
    </div>
    <div class="img-wrapper img-wrapper1">
      <img src="./b6b9a0221e3b47b7a92b36201272f9e6_d1242x0.jpg" alt="">
    </div>
    <div class="img-wrapper img-wrapper2">
      <img src="./9518bc17021a40d28bffa8eb521f6878_d1242x0.jpg" alt="">
    </div>
    <div class="img-wrapper img-wrapper3">
      <img src="./c8d8ca2a7c6b468f95faefd8eb3959c1_d1242x0.jpg" alt="">
    </div>
    <div class="img-wrapper img-wrapper4">
      <img src="./7d75b0fe2e8244bdbad79f4b39f8b62f_d1242x0.jpg" alt="">
    </div>
    <div class="img-wrapper img-wrapper5">
      <img src="./3cea975b99f9458198e9ed706af9b391_d1242x0.jpg" alt="">
    </div>
    <div class="img-wrapper img-wrapper6">
      <img src="./fdbd35036c1c485b975a85ff7572708b_d1242x0.jpg" alt="">
    </div>
    <div class="img-wrapper img-wrapper7">
      <img src="./3da3d66f3c934a1285dd686cb28a1c90_d1242x0.jpg" alt="">
    </div>
  </div>
</template>

<script>

  export default {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .header-wrapper
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: auto;
    height: 4rem;
    .header-image
      height: 4rem;
      background-repeat no-repeat
      background-size 50% 50%
      background-position 50% 50%
      background-color: #89be48
      background-image url('./header.png')
    span
      width: 3.666666rem;
      height: 2.666666rem;
      position: absolute;
      top 0
      right: 0;
      background-repeat no-repeat
      background-image url("./headersearch.png")
      background-size: 45%
      background-position: 50%
  .nav
    position fixed
    top 4rem
    left 0
    right 0
    width: 100%;
    height: 4rem;
    background-color #fff
    overflow hidden
    z-index 100
    .navul
      width 800px
      height 4rem
      li
        float left
        width 80px
        text-align center
        border-bottom: 2px solid #ddd
        a
          display block
          font-size 1.35rem
          height 3.8rem
          line-height 3.8rem
          color #333
        .active
          border-bottom: 2px solid #80b532;
          color #80b532;
  .swipper-container
    width 100%
    height 250px
    margin-top 96px
    img
      width 100%
  .img-wrapper
    width 100%
    margin-bottom 1rem
  .img-wrapper1
    height 90px
    img
      width 100%
  .img-wrapper2
    height 150px
    img
      width 100%
  .img-wrapper3
    height 925px
    img
      width 100%
  .img-wrapper4
    height 238px
    img
      width 100%
  .img-wrapper5
    height 310px
    img
      width 100%
  .img-wrapper6
    height 100px
    img
      width 100%
  .img-wrapper7
    height 689px
    img
      width 100%
</style>
