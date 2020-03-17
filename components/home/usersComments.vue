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
  .content {
    padding: 100px 20px 100px;
    @include respond-to(lg) {
      padding: 100px 60px 100px;
    }
    position: relative;
    display: flex;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    @include respond-to(sm) {
      flex-direction: column-reverse;
    }
    .text {
      width: 40%;
      @include respond-to(sm) {
        width: 100%;
      }
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
        margin: 40px auto;
      }
      .form {
        padding: 0 50px;
        input,
        textarea {
          margin-top: 10px;
          padding: 10px;
          box-shadow: 0 0 8px #8e8e8e;
          max-height: 150px;
        }
        .part {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
          .box-rating {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
        .submit-form {
          border-radius: 50px;
          cursor: pointer;
          background-image: linear-gradient(to left, #fe7966, #ffda71);
          color: #fff;
        }
      }
    }
    .message-group {
      width: 60%;
      @include respond-to(sm) {
        width: 100%;
      }
      .ourteam-05 {
        display: flex;
        align-items: flex-start;

        padding: 0px 30px;
        margin: 0 0 30px;
        background-color: #ffffff;
        @include respond-to(sm) {
          flex-direction: column;
        }
        &.active {
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          padding: 40px 30px;
        }
        .pic {
          flex: 0 0 120px;
          margin-left: 30px;
          position: relative;
          width: 120px;
          img {
            border-radius: 50%;
          }
        }
        .rating {
          margin: 0 0 12px;
          line-height: 1;
        }
        .name {
          color: #333333;
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
<template>
  <div class="boxes">
    <div class="content">
      <div class="text">
        <h1 class="title">
          لورم ایپسوم متن
          <span>ساختگی</span>
        </h1>
        <div class="form">
          <div class="part">
            <div class="box-rating">
              <label for="name">نام و نام خانوادگی</label>
              <div class="rating">
                <v-icon
                  v-for="item in 5"
                  :key="item"
                  :color="active>item?'red':'gray'"
                  @mouseout="out"
                  @mouseover="over(item)"
                  @click="submitrate(item)"
                >star</v-icon>
                <input type="hidden" id="rating-count" name="rating" value="submitrating" />
              </div>
            </div>
            <input type="text" id="name" class="name" />
          </div>
          <div class="part">
            <label for="matn">توضیحات خود را وارد نمایید</label>
            <textarea name id="matn" cols="10" rows="10"></textarea>
          </div>
          <div class="part">
            <input type="submit" class="submit-form" value="ثبت بازخورد" />
          </div>
        </div>
      </div>
      <div class="message-group">
        <div class="ourteam-05">
          <div class="pic img-Lazy-warp">
            <img class="img-Lazy" src="~assets/img/message-img-01.jpg" />
          </div>
          <div class="edit-box">
            <div class="rating">
              <v-icon v-for="item in 5" :key="item" color="red">star</v-icon>
            </div>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
            <p class="mb-0">
              <span class="name">لورم ایپسوم</span> - متن ساختگی
            </p>
          </div>
        </div>
        <div class="ourteam-05 active">
          <div class="pic img-Lazy-warp">
            <img class="img-Lazy" src="~assets/img/message-img-02.jpg" />
          </div>
          <div class="edit-box">
            <div class="rating">
              <v-icon v-for="item in 5" :key="item" color="red">star</v-icon>
            </div>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
            <p class="mb-0">
              <span class="name">لورم ایپسوم</span> - متن ساختگی
            </p>
          </div>
        </div>
        <div class="ourteam-05">
          <div class="pic img-Lazy-warp">
            <img class="img-Lazy" src="~assets/img/message-img-03.jpg" />
          </div>
          <div class="edit-box">
            <div class="rating">
              <v-icon v-for="item in 5" :key="item" color="red">star</v-icon>
            </div>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
            <p class="mb-0">
              <span class="name">لورم ایپسوم</span> - متن ساختگی
            </p>
          </div>
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
  },
  data() {
    return {
      submit: false,
      submitrating: 0,
      active: 0
    }
  },
  methods: {
    out() {
      if (!this.submit) {
        this.active = 0
      } else {
        this.active = this.submitrating
      }
    },
    over(item) {
      this.active = item + 1
    },
    submitrate(item) {
      this.submit = true
      this.active = item + 1
      this.submitrating = this.active
    }
  }
})
</script>
