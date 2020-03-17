<style lang="scss" scoped>
.route-wrapper {
  min-height: calc(100vh - 302px - 80px);
}
</style>
<template>
  <v-app dark>
    <Header v-if="$device.isDesktop" />
    <HeaderMobile v-else />
    <nuxt class="route-wrapper" />
    <Footer />
  </v-app>
</template>
<script lang="ts">
import Footer from '@/components/base/footer.desktop.vue'
import Header from '@/components/base/header.desktop.vue'
import HeaderMobile from '@/components/base/header.mobile.vue'
import Vue from 'vue'
export default Vue.extend({
  components: {
    Footer,
    Header,
    HeaderMobile
  }
})
</script>
