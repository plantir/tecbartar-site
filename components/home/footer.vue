<style lang="scss">
.middle {
  text-align: center;
  font-size: 30px;
  margin: 3rem 0;
  @include respond-to(md) {
    margin-bottom: 3rem;
  }
}
.description_holder {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @include respond-to(lg) {
    flex-wrap: nowrap;
  }
  margin: 1rem 0;
  padding: 0 3rem;
  .wrapper_description {
    width: 300px;
    height: 200px;
    text-align: center;
    div {
      text-align: center;
      img {
        width: 80px;
        height: 80px;
      }
    }
  }
}
.long_border {
  width: 75%;
  border: 1px solid #0175d2;
  margin: 2rem auto;
}
.copyright {
  text-align: center;
  margin: 2rem 0;
}
</style>
<template>
  <div>
    <div class="middle">حس رقابت در قالب سنجش</div>
    <div class="description_holder">
      <div class="wrapper_description">
        <div>
          <img src="~assets/img/clock_logo.png" alt />
        </div>
        <div>
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          سوالات جواب بده
        </div>
      </div>
      <div class="wrapper_description">
        <div>
          <img src="~assets/img/hand_logo.png" alt />
        </div>
        <div>
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          سوالات جواب بده
        </div>
      </div>
      <div class="wrapper_description">
        <div>
          <img src="~assets/img/clock_logo.png" alt />
        </div>
        <div>
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          سوالات جواب بده
        </div>
      </div>
      <div class="wrapper_description">
        <div>
          <img src="~assets/img/hand_logo.png" alt />
        </div>
        <div>
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          اگر دنبال رشته مناسب درسی هستی به سوالات جواب بده اگر دنبال رشته
          سوالات جواب بده
        </div>
      </div>
    </div>
    <div class="long_border"></div>
    <div class="copyright">
      <p>2011-2019 NERIS Analytics Limited &copy;</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
