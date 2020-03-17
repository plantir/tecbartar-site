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
      background-image: url(~assets/img/index_background.png);
      position: absolute;
      transform: rotateY(180deg);
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 60%;
    }
  }
  .content {
    padding: 140px 20px 100px;
    position: relative;
    display: flex;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include respond-to(lg) {
      padding: 140px 60px 100px;
    }
    @include respond-to(sm) {
      flex-direction: column;
    }
    .title {
      padding: 0.5rem;
      margin: 16px 0;
      color: #fff;
      width: 100%;
      text-align: right;
      font-size: 48px !important;
      line-height: 1.2;
    }
    .text {
      width: 40%;
      @include respond-to(sm) {
        width: 100%;
      }
      .form {
        width: 300px;
        direction: ltr;
        line-height: 50px;
        position: relative;
        border-radius: 50px;
        overflow: hidden;
        @include respond-to(sm){
          width: 100%;
        }
        input.email-adress {
          width: 80%;
          padding-left: 10px;
          padding-right: 30px;
          background: #fff;
        }
        input.submit {
          width: 30%;
          background: #1abc9c;
          border-radius: 50px;
          position: absolute;
          cursor: pointer;
          z-index: 2;
          right: 0px;
        }
      }
      p {
        text-align: right;
        color: #fff;
        font-size: 16px;
        margin: 40px 0;
      }
    }
    .img {
      @include respond-to(sm) {
        width: 100%;
      }
      img {
        width: 100%;
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
        <h1 class="title">اگر دنبال رشته مناسب درسی هستی</h1>
        <p
          class="des"
        >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
        <div class="form">
          <input
            type="email"
            placeholder="لطفا ایمیل خود را وارد نمایید"
            required
            class="email-adress"
          />
          <input type="submit" class="submit" />
        </div>
      </div>
      <div class="img">
        <img src="~assets/img/left-side-pic-01.png" alt />
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
