<template>
  <div>
    <div id="header-wrapper">
      <div id="header-content">
          <span>
            <label class="leftback-img" onclick="history.back()"></label>
          </span>
        <p>购物车</p>
      </div>
      <div id="header-login-wrap">
        <div class="header-login">
          <router-link to="/login" class="btn-login">登录</router-link>
          <span class="login-tip">你可以在登录后同步电脑与手机购物车中的商品</span>
        </div>
      </div>
      <div id="header-exchange-wrap">
        <div class="header-exchange">
          <input type="text" maxlength="15" placeholder="礼品兑换处，请输入兑换码" class="exch-ipt">
          <input type="button" value="兑换" class="exch-btn">
        </div>
      </div>
    </div>
    <div class="wrap-nodata">
      <div id="carts-img">
        <img id="c-img" src="./cart.png" alt="">
      </div>
      <p id="c-p">您的购物车还是空荡荡的</p>
      <div id="c-a">
        <router-link to="/">赶紧去逛逛</router-link>
      </div>
    </div>
    <div class="wrap-cart-assem">
      <div class="cart-assem-title">
        <p>Rico.S为你精心推荐</p>
      </div>
      <div class="cart-assem-list">
        <ul>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
          <li>
            <div class="cart-assem-item">
              <a href="#/item/23028">
                <img src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg">
              </a>
              <p class="text">自粘式缝隙贴(2卷装)</p>
              <p data-v-5cc9f28f="" class="text">￥19</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #header-wrapper
    position: fixed
    top 0
    left 0
    right 0
    background: #89be48;
    #header-content
      position: relative
      width 100%
      span
        position: absolute;
        left: 0;
        top: 0;
        width: 10%;
        height: 3.8rem;
        .leftback-img
          width: 1rem;
          height: 2.6rem;
          display: block;
          float: left;
          background: url('./1n7eflqm8pken3h2kv2mohtm2nr6k7gi.png') no-repeat;
          position: absolute;
          left: 30%;
          top: .6rem;
      p
        margin: 0 auto;
        line-height: 4rem;
        font-size: 2rem;
        text-align: center;
        color: #fff;
        width: 80%;
    #header-login-wrap
      width: 100%;
      height: 3rem;
      background-color: #f0fae6;
      margin: 0;
      padding: .8rem 0 .5rem;
      .header-login
        width: 74%;
        min-height: 2.8rem;
        display: table;
        overflow: hidden;
        margin: 0 auto;
        padding: 0 0 0 21%;
        position: relative;
        .btn-login
          width: 18%;
          height: 2.6rem;
          display: block;
          background: #fff;
          border: 1px solid #8bc146;
          text-align: center;
          font-size: 1.5rem;
          color: #88c13e;
          line-height: 2.5rem;
          margin: 0;
          position: absolute;
          left: 0;
          top: 0;
        .login-tip
          width: 100%;
          display: table-cell;
          text-align: left;
          vertical-align: middle;
          font-size: 1.4rem;
          color: #333;
          line-height: 1.5rem;
    #header-exchange-wrap
      width: 100%;
      height: 3.2rem;
      background-color: #fff;
      margin: 0;
      padding: .6rem 0 .5rem;
      border-bottom: 1px solid #f2f2f2;
      .header-exchange
        width: 93%;
        height: 3rem;
        overflow: hidden;
        margin: .1rem auto 0;
        padding: 0;
        position: relative;
        .exch-ipt
          padding-left: 10px;
          width: 80%;
          height: 2.8rem;
          line-height: 2.8rem;
          display: inline-block;
          border-radius: 0;
          border: 1px solid #e7e7e7;
          background: #fff;
          text-align: center;
          outline none
        .exch-btn
          width: 20%;
          height: 3rem;
          line-height: 3rem;
          display: inline-block;
          border-radius: 0;
          background: #fff;
          text-align: center;
          font-size: 1.6rem;
          color: #6fbd00;
          letter-spacing: .1rem;
          text-indent: .2rem;
          position: absolute;
          right: 0;
          top: 0;
          z-index: 3;
          border: 1px solid #6fbd00;
  .wrap-nodata
    margin-top 152px
    #carts-img
      margin: 0 auto;
      text-align: center;
      padding-left: 2rem;
      padding-top: 10px;
      box-sizing: border-box;
      #c-img
        vertical-align: middle;
        max-width: 160px;
    #c-p
      text-align: center;
      font-size: 1.8rem;
      color: rgb(102, 102, 102);
      line-height: 1.5em;
    #c-a
      text-align center
      a
        border: 1px solid rgb(137, 190, 72);
        padding: 0.5rem 1.5rem;
        display: inline-block;
        border-radius: 6px;
        font-size: 1.5rem;
        letter-spacing: 1px;
        margin-top: 6px;
        color: rgb(137, 190, 72);
  .wrap-cart-assem
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
    margin: 1rem auto 0;
    .cart-assem-title
      width: 94%;
      overflow: hidden;
      border-bottom: 1px solid #ccc;
      text-align: left;
      font-size: 1.6rem;
      color: #333;
      line-height: 2rem;
      margin: 0 auto;
      padding: .8rem 3%;
      p
        line-height: 1.5em;
    .cart-assem-list
      width: 100%;
      max-height: 12rem;
      overflow: hidden;
      margin: 0 auto;
      padding: 1.3rem 0;
      ul
        width: 2120px;
        li
          width: 8rem;
          overflow: hidden;
          display: inline-block;
          vertical-align: top;
          text-align: left;
          margin: 0 3px;
          .cart-assem-item
            overflow hidden
            a
              img
                width: 100%;
                overflow: hidden;
                display: block;
                vertical-align middle
            .text
              width: 100%;
              overflow: hidden;
              display: block;
              text-align: left;
              font-size: 1rem;
              color: #333;
              line-height: 2rem;
              font-weight: 400;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-break: keep-all;

</style>
