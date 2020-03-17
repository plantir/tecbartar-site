<style lang="scss" scoped>
section {
  position: relative;
  width: 100%;
}
</style>
<template>
  <section>
    <part1 />
    <part2 />
    <part3 />
    <part4 />
    <part5 />
    <part6 />
    <usersComments />
    <part8 />
    <contactus />
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import part1 from '~/components/home/part-1.vue'
import part2 from '~/components/home/part-2.vue'
import part3 from '~/components/home/part-3.vue'
import part4 from '~/components/home/part-4.vue'
import part5 from '~/components/home/part-5.vue'
import part6 from '~/components/home/part-6.vue'
import usersComments from '~/components/home/usersComments.vue'
import part8 from '~/components/home/part-8.vue'
import contactus from '~/components/home/contactus.vue'
export default Vue.extend({
  components: {
    part1,
    part2,
    part3,
    part4,
    part5,
    part6,
    usersComments,
    part8,
    contactus,
  },
  mounted() {}
})
</script>
