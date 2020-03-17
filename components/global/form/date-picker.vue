<style lang="scss">
.app-date-picker {
  display: flex;
  .v-menu {
    border-radius: 10px;
  }
  .input-wrapper {
    background: #fff;
    display: inline-flex;
    padding: 0 16px;
    height: 50px;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #eee;
    position: relative;
    cursor: pointer;
    .first:after {
      content: '';
      width: 1px;
      height: 100%;
      position: absolute;
      background: #e1e1e1;
      top: 0;
      left: calc(50% + 16px);
    }

    label {
      cursor: pointer;
      color: #a4a4a4;
      font-size: 12px;
      margin-left: 4px;
    }
    .value {
      min-width: 100px;
      display: inline-flex;
      font-weight: 600;
    }
    .la-angle-down {
      font-size: 14px;
      color: $red-color;
    }
  }
  .date-picker-wrapper {
    position: relative;
    margin: auto;
    width: 870px;
    height: 300px;
    direction: ltr;
    background: #fff;
  }
  .prepend-icon {
    max-height: 20px;
  }
}
</style>
<template>
  <div class="app-date-picker">
    <div>
      <v-menu
        v-model="menu"
        :open-on-click="false"
        transition="slide-y-transition"
        nudge-bottom="60"
        bottom
        left
        attach
      >
        <template v-slot:activator="{ on }">
          <div v-on="on" class="input-wrapper">
            <div @click="openCalendar('start')" class="first">
              <v-icon class="prepend-icon" v-if="icon">{{ icon }}</v-icon>
              <label>تاریخ ورود</label>
              <div class="value">
                <span v-if="start">{{ start | persianDate | persianDigit }}</span>
              </div>
            </div>
            <div @click="openCalendar('end')" class="second">
              <v-icon class="prepend-icon" v-if="icon">{{ icon }}</v-icon>
              <label>تاریخ خروج</label>
              <div class="value">
                <span v-if="end">{{ end | persianDate | persianDigit }}</span>
              </div>
            </div>
          </div>
        </template>
        <div>
          <div class="date-picker-wrapper">
            <a @click="onClick(moment())">now</a>
            <a @click="onClick(moment().add(7, 'days'))">next week</a>
          </div>
        </div>
      </v-menu>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment-jalaali'
export default Vue.extend({
  props: {
    icon: {
      type: String,
      default: '$calendar'
    },
    value: {
      type: Array,
      required: true,
      default: []
    }
  },
  watch: {},
  data() {
    return {
      moment: moment,
      settings: {
        suppressScrollX: true
      },
      active: <string>'',
      menu: false,
      start: <any>this.value[0],
      end: <any>this.value[1]
    }
  },

  methods: {
    openCalendar(index) {
      if (this.menu) {
        this.menu = false
      }
      setTimeout(() => {
        this.menu = true
      }, 100)
      this.active = index
    },
    onClick(date) {
      this[this.active] = date
      this.$emit('input', [this.start, this.end])
      console.log(date)
    }
  }
})
</script>
