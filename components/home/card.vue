<style lang="scss" scoped>
.boxes_holder {
  margin-top: 100px;
  height: auto;
  @include respond-to(md) {
    height: 476px;
    margin-top: 200px;
    background-image: url(~assets/img/shape_index.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-bottom: 4rem;
  }
  .wrapper_boxes {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    @include respond-to(md) {
      flex-wrap: nowrap;
    }
    .boxes {
      position: relative;
      border-radius: 20px;
      margin: 2rem;
      padding: 1.5rem;
      height: 400px;
      background-color: #fff;
      @include respond-to(md) {
        margin: 1rem;
      }
      @include respond-to(1200) {
        margin: 2rem;
      }
      @include respond-to(xl) {
        margin: 5rem 4rem 4rem 2rem;
      }
      .logo_box {
        width: 100%;
        display: flex;
        justify-content: center;
        img {
          height: 150px;
          width: 150px;
        }
      }
      h3 {
        font-weight: 600;
        padding: 0.7rem 1rem 0.7rem 0;
        font-size: 20px;
        color: #5d5d5d;
      }
      .border {
        border-bottom: 1px solid #0886e8;
        width: 80%;
        margin: 0 auto;
      }
      ul {
        padding: 1rem;
        .check:before {
          font-family: 'material icons';
          content: '\e86c';
          vertical-align: middle;
          border-radius: 50%;
          border: 1px solid $light-blue;
          height: 50px;
          width: 50px;
          margin-left: 0.5rem;
          color: $dark-blue;
        }
        li {
          padding: 0.5rem 0;
          > div {
            border-radius: 50%;
            border: 2px solid $light-blue;
            height: 15px;
            width: 15px;
            margin-left: 0.5rem;
            vertical-align: middle;
            display: inline-block;
          }
        }
      }
      .shopping {
        position: absolute;
        bottom: -20px;
        right: 16%;
        padding: 0.5rem;
        color: #fff;
        width: 170px;
        border-radius: 50px;
        background-image: linear-gradient(to left, #14bcd5, #0788d1);
        display: flex;
        span:first-child {
          font-weight: 500;
          font-size: 20px;
          text-align: center;
          width: 80%;
        }
        span:last-child {
          background-color: #0175d3;
          border-radius: 50%;
          padding: 0.5rem;
          .v-icon {
            color: #fff;
            font-size: 25px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="boxes_holder">
    <div class="wrapper_boxes">
      <div class="boxes" v-for="item in 3" :key="item">
        <div class="logo_box">
          <img src="~assets/img/logo_box.png" alt />
        </div>
        <h3>بسته شماره یک</h3>
        <div class="border"></div>
        <div class="radio">
          <ul>
            <li>
              <v-icon color="primary">la-check-circle</v-icon>
              <span>بسته شامل موارد فوق میباشد</span>
            </li>
            <li>
              <v-icon>la-circle</v-icon>
              <span>بسته شامل موارد فوق میباشد</span>
            </li>
            <li>
              <v-icon>la-circle</v-icon>
              <span>بسته شامل موارد فوق میباشد</span>
            </li>
          </ul>
        </div>
        <div class="shopping">
          <span>خرید</span>
          <span>
            <v-icon>shopping_basket</v-icon>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
