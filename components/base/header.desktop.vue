<style lang="scss">
#nav-header {
  color: #4570ab;
  width: 100%;
  padding: 0 3rem;
  position: absolute;
  top: 0;
  height: 96px;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.active {
    background-color: #fff;
    position: fixed;
    height: 80px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    .menuItems {
      ul {
        a {
          color: #333;
        }
      }
    }
  }
  .logo {
    display: block;
    height: 90%;
    @include respond-to(lg) {
      img {
        height: 100%;
      }
    }
  }
  .menuItems {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      a {
        display: inline-flex;
        padding: 10px 20px;
        color: #fff;
        font-weight: 500;
        border-radius: 26px;
        min-width: 100px;
        justify-content: center;
        align-items: center;
        line-height: 33px;
        cursor: pointer;
        &:hover,
        &.nuxt-link-exact-active {
          background: $primary-color;
          color: #fff;
        }
      }
    }
  }
  .left-panel {
    .buy-btn {
      background-image: linear-gradient(to left, #fe7966, #ffda71);
      color: #fff;
      font-size: 18px;
      padding: 10px 30px;
      height: auto;
      border-radius: 50px;
    }
  }

  .active {
    color: purple;
  }
}
</style>

<template>
  <div id="nav-header" class="menu" :class="{active:scrolled,unactive:!scrolled}">
    <div class="logo">
      <img src="~assets/img/logo.png" alt />
    </div>
    <div class="menuItems">
      <ul>
        <a href="/">صفحه اصلی</a>
        <a href="faq">سوالات متداول</a>
        <a href="/aboutus">درباره ما</a>
        <a href="/contactus">تماس با ما</a>
      </ul>
    </div>
    <div class="left-panel">
      <v-btn class="buy-btn">خرید</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      scrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    }
  }
})
</script>
