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
      background-image: url(~assets/img/contactus-back.png);
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
    padding: 100px 20px 220px;
    @include respond-to(lg) {
      padding: 100px 60px 220px;
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
      width: 50%;
      background: #fff;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      @include respond-to(sm) {
        width: 100%;
      }
      .title {
        padding: 0.5rem;
        margin: 16px 0;
        color: #333;
        width: 100%;
        text-align: center;
        font-size: 30px !important;
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
        .part-2 {
          display: flex;
          margin-bottom: 20px;
          justify-content: space-between;
          div {
            flex: 0 0 48%;
            display: flex;
            flex-direction: column;
            input {
              width: 100%;
            }
          }
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
      width: 50%;
      padding: 0 50px;
      color: #fff;
      @include respond-to(sm) {
        width: 100%;
        padding: 0;
      }
      .iconbox-20 {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        .icon {
          width: 64px;
          height: 64px;
          text-align: center;
          background-color: #1abc9c;
          border-radius: 50%;
          font-size: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 20px;
        }
      }
      .phone {
        direction: ltr;
        display: inline-block;
      }
      .saas2-footer-info {
        border-right: 2px solid #ffffff;
        padding-right: 21px;
        margin: 50px 0;
        font-size: 18px;
      }
      .saas2-footer-info2 {
        .title {
          font-size: 18px;
          margin-bottom: 10px;
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
          لورم ایپسوم متن
          <span>ساختگی</span>
        </h1>
        <div class="form">
          <div class="part-2">
            <div>
              <label for="name">نام و نام خانوادگی</label>
              <input type="text" id="name" class="name" />
            </div>
            <div>
              <label for="name">ایمیل</label>
              <input type="email" id="email" class="email" />
            </div>
          </div>
          <div class="part">
            <label for="matn">موضوع</label>
            <input type="text" id="mozoe" />
          </div>
          <div class="part">
            <label for="matn">توضیحات</label>
            <textarea name id="matn" cols="10" rows="10"></textarea>
          </div>
          <div class="part">
            <input type="submit" class="submit-form" value="ثبت بازخورد" />
          </div>
        </div>
      </div>
      <div class="message-group">
        <div class="iconbox-20">
          <div class="icon">
            <v-icon color="#fff">phone</v-icon>
          </div>
          <div class="cont">
            <h4 class="title">Are You Ready Now?</h4>
            <h4 class="subtitle">Contact Us</h4>
          </div>
        </div>
        <p
          style="opacity: 0.7;"
        >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        <div class="saas2-footer-info">
          <p>
            تلفن همراه:
            <span class="color-accent phone">+98 912 111 11 11</span>
          </p>
          <p>ایمیل: test@gmail.com</p>
          <p>آدرس: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
        <div class="saas2-footer-info2">
          <h6 class="title">ساعات پاسخگویی</h6>
          <p>شنبه تا چهارشنبه: 8:00am-5:30pm</p>
          <p>پنجشنبه: 10:00am-2:00pm</p>
          <p>جمعه: close</p>
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
