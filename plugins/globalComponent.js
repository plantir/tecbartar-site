import Vue from 'vue'
import appSelect from '@/components/global/form/select.vue'
import appDatePicker from '@/components/global/form/date-picker.vue'
import appRoomPicker from '@/components/global/form/room-picker.vue'
import vueCustomScrollbar from 'vue-custom-scrollbar'
Vue.component('vueCustomScrollbar', vueCustomScrollbar)
Vue.component('app-select', appSelect)
Vue.component('appDatePicker', appDatePicker)
Vue.component('appRoomPicker', appRoomPicker)
