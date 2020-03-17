<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 80px;
  z-index: 1;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  img {
    max-height: 60px;
  }

}
</style>
<template>
  <div>
    <header>
      <div class="menu">
        <v-icon color="#000" @click.stop="drawer = !drawer">menu</v-icon>
      </div>
      <div>
        <img src="~assets/img/logo.png" alt />
      </div>
      <div>
        <v-icon color="#000">search</v-icon>
      </div>
    </header>
    <v-navigation-drawer v-model="drawer" full absolute right temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>صفحه‌اصلی</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>سوالات متداول</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>درباره ما</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>تماس با ما</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      drawer: false
    }
  }
})
</script>
