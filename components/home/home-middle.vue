<style lang="scss">
.long_border {
  width: 75%;
  border: 1px solid #0175d2;
  margin: 2rem auto;
}
.center_logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #065fd6;
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 35px;
    width: 35px;
  }
}
.middle_text {
  text-align: center;
  > div {
    padding: 1rem 0;
  }
  .start {
    margin: 1rem auto;
    padding: 1rem;
    color: #fff;
    width: 200px;
    border-radius: 50px;
    @include orange-gradient;
    // background-image: linear-gradient(to left, #fe7966, #ffda71);
    display: flex;
    align-items: center;
    span:first-child {
      font-weight: 500;
      font-size: 20px;
      text-align: center;
      width: 80%;
    }
    span:last-child {
      background-color: #fe4445;
      border-radius: 50%;
      padding: 0.5rem;
      .v-icon {
        color: #fff;
        font-size: 25px;
      }
    }
  }
}
.middle_shape {
  display: none;
  position: relative;
  @include respond-to(md) {
    display: block;
    height: 350px;
    background-image: url(~assets/img/middle_shape.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  @include respond-to(1200) {
    height: 436px;
  }
  @include respond-to(lg) {
    height: 540px;
  }
  @include respond-to(xl) {
    height: 700px;
  }
  // .vertical_border {
  //   width: 0;
  //   border: 1px solid #0175d2;
  //   position: absolute;
  //   bottom: 0;
  //   right: 50%;
  //   @include respond-to(md) {
  //     height: 80px;
  //   }
  //   @include respond-to(1200) {
  //     height: 100px;
  //   }
  //   @include respond-to(1400) {
  //     height: 120px;
  //   }
  //   @include respond-to(1600) {
  //     height: 100px;
  //   }
  //   @include respond-to(xl) {
  //     height: 150px;
  //   }
  // }
  > div {
    width: 50%;
    h1 {
      position: absolute;
      top: 30%;
      right: 15%;
      color: #10abd4;
    }
    p {
      position: absolute;
      top: 38%;
      right: 20%;
      font-size: 14px;
      font-weight: 500;
      color: #dc4d46;
      @include respond-to(md) {
        top: 40%;
        font-size: 14px;
      }
      @include respond-to(xl) {
        top: 38%;
        right: 18%;
        font-size: 20px;
      }
    }
  }
}
</style>

<template>
  <div>
    <div class="long_border"></div>
    <div class="center_logo">
      <img src="~assets/img/center_logo.png" alt />
    </div>
    <div class="middle_text">
      <div class="title">
        <h1>اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده</h1>
      </div>
      <div>
        <p>
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده
          سوالات جواب بده
        </p>
      </div>
      <div class="start">
        <span>شروع</span>
        <span>
          <v-icon>keyboard_arrow_left</v-icon>
        </span>
      </div>
    </div>
    <div class="middle_shape">
      <div>
        <h1>اگر دنبال رشته مناسب جواب بده</h1>
        <p>
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          <br />اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          <br />به سوالات جواب بده
        </p>
      </div>
      <!-- <div class="vertical_border"></div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
