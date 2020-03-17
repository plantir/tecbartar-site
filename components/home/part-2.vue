<style lang="scss" scoped>
.boxes {
  display: table;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  position: relative;
  -webkit-transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
  -ms-transition: all ease 0.3s;
  -o-transition: all ease 0.3s;
  transition: all ease 0.3s;
  .background {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .under_menu_background {
      background-image: url(~assets/img/index_background2.png);
      position: absolute;
      transform: rotateY(180deg);
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      background-size: auto;
      background-repeat: no-repeat;
      background-position: 50% 100%;
    }
  }
  .content {
    padding: 100px 20px 0px;
    @include respond-to(lg) {
      padding: 100px 60px 0px;
    }
    @include respond-to(sm) {
      padding: 100px 0px 0px;
    }
    position: relative;
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
      width: 100%;
      .title {
        padding: 0.5rem;
        margin: 16px 0;
        color: #333;
        width: 100%;
        text-align: center;
        font-size: 48px !important;
        line-height: 1.2;
        span {
          color: $primary-color;
        }
      }
      p {
        text-align: center;
        width: 80%;
        color: #333;
        font-size: 16px;
        margin: 60px auto;
        @include respond-to(lg){
          width: 60%;
        }
      }
    }

    .level-boxes {
      align-items: center;
      justify-content: space-evenly;
      display: flex;
      @include respond-to(sm){
        flex-direction: column;
      }
      .box-lvl {
        width: 33%;
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        @include respond-to(sm){
          width: 100%;
        }
        img {
          margin-bottom: 60px;
          width: 100%;
        }
        .number {
          width: 104px;
          height: 91px;
          line-height: 108px;
          text-align: center;
          display: inline-block;
          font-size: 32px;
          color: #fff;
          margin-bottom: 18px;
          &.box1 {
            background-image: url(~assets/img/number-box-1.png);
          }
          &.box2 {
            background-image: url(~assets/img/number-box-2.png);
            line-height: 81px;
          }
          &.box3 {
            background-image: url(~assets/img/number-box-3.png);
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="boxes">
    <div class="background">
      <div class="under_menu_background"></div>
    </div>

    <div class="content">
      <div class="text">
        <h1 class="title">
          اگر دنبال رشته
          <span>مناسب</span>
        </h1>
        <p
          class="des"
        >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
      </div>
      <div class="level-boxes">
        <div class="box-lvl">
          <span class="number box1">01</span>
          <h6 class="title">High satisfaction level</h6>
          <p>Proin eleifend varius feugiat. Fusce risus augue, condimentum et odio vitae, lobortis auctor quam. Suspendisse porttitor nisi ante.</p>
        </div>
        <div class="box-lvl">
          <img src="~assets/img/lvl-box.png" alt />
          <span class="number box2">02</span>
          <h6 class="title">High satisfaction level</h6>
          <p>Proin eleifend varius feugiat. Fusce risus augue, condimentum et odio vitae, lobortis auctor quam. Suspendisse porttitor nisi ante.</p>
        </div>
        <div class="box-lvl">
          <span class="number box3">03</span>
          <h6 class="title">High satisfaction level</h6>
          <p>Proin eleifend varius feugiat. Fusce risus augue, condimentum et odio vitae, lobortis auctor quam. Suspendisse porttitor nisi ante.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import desktopMenu from './menu.vue'
import Vue from 'vue'
export default Vue.extend({
  components: {
    // desktopMenu
  }
})
</script>
