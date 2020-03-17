<style lang="scss" scoped>
svg {
  width: 20px;
  height: 20px;
  &.chevron {
    width: 13px;
    height: 13px;
  }
}
</style>
<template>
  <div>
    <!-- {{ name }} -->
    <component :is="name"></component>
  </div>
</template>
<script>
import User from '~/assets/svg/user.svg?inline'
import ChevronDown from '~/assets/svg/chevron_down.svg?inline'
import Location from '~/assets/svg/location.svg?inline'
import Calendar from '~/assets/svg/calendar.svg?inline'
export default {
  props: {
    name: String
  },

  components: {
    User,
    ChevronDown,
    Location,
    Calendar
  }
  // async mounted() {
  //   let svg = await fetch('/svg/user.svg').then(r => r.text())
  //   this.$el.innerHTML = svg
  // }
}
</script>
