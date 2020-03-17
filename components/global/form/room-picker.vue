<style lang="scss">
.app-room-picker {
  .v-menu {
    border-radius: 10px;
  }
  .select-wrapper {
    background: #fff;
    display: inline-flex;
    padding: 0 16px;
    height: 50px;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #eee;
    cursor: pointer;
    label {
      cursor: pointer;
      color: #a4a4a4;
      font-size: 12px;
      margin-left: 4px;
    }
    .value {
      min-width: 200px;
      display: inline-flex;
      font-weight: 600;
    }
    .la-angle-down {
      font-size: 14px;
      color: $red-color;
    }
  }
  .room-list {
    position: relative;
    margin: auto;
    min-height: 200px;
    background: #fff;
    padding: 20px;
    .room-item {
      padding: 20px 0;
      + .room-item {
        // margin-top: 20px;
        border-top: 1px solid #e1e1e1;
      }
    }
    .pasenger {
      display: flex;
      justify-content: space-between;
      align-items: center;
      + .pasenger {
        margin-top: 24px;
      }
      .pasenger-title {
        min-width: 70px;
        display: inline-block;
        font-size: 1rem;
        font-weight: 600;
      }
      .v-btn {
        border-radius: 4px;
      }
    }
    .add-room {
      border-top: 1px solid #e1e1e1;
      padding-top: 20px;
      margin-top: 20px;
    }
  }
  .prepend-icon {
    max-height: 20px;
  }
  .chevron {
    &.is_open {
      transform: rotate(180deg);
    }
    path {
      fill: $red-color;
    }
  }
  .child-age {
    margin-top: 16px;
    > div {
      + div {
        margin-top: 8px;
      }
    }
    .v-input__control {
      min-height: 24px;
      width: 120px;
      .v-select__selection {
        font-size: 12px;
      }
      .v-input__slot {
        box-shadow: none !important;
        border: 1px solid #e1e1e1;
      }
    }
    .v-select {
      input {
        padding: 2px 0;
      }
    }
  }
}
</style>
<template>
  <div class="app-room-picker">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      transition="slide-y-transition"
      nudge-bottom="60"
      bottom
      attach
    >
      <template v-slot:activator="{ on }">
        <div v-on="on" class="select-wrapper">
          <div>
            <v-icon class="prepend-icon" v-if="icon">{{ icon }}</v-icon>
            <label v-if="label">{{ label }}</label>
            <div class="value">
              <span>
                {{ model_human_readable | persianDigit }}
              </span>
            </div>
            <v-icon class="chevron" :class="{ is_open: menu }"
              >$chevron_down</v-icon
            >
          </div>
        </div>
      </template>
      <div>
        <div class="room-list">
          <div
            class="room-item"
            :ripple="{ class: `pink--text` }"
            v-for="(item, i) in model"
            :key="i"
          >
            <v-layout class="item-header mb-6" justify-space-between>
              <span class="title red--text text--darken-1">
                اتاق {{ (i + 1) | numToPersian }}
              </span>
              <v-icon
                v-if="model.length > 1"
                @click="remove_room(i)"
                color="red darken-1"
                >la-trash</v-icon
              >
            </v-layout>
            <div class="pasenger adult">
              <div>
                <span class="pasenger-title">بزرگ سال</span>
                <span class="body-1 grey--text">(۱۲ سال به بالا)</span>
              </div>
              <div>
                <v-btn color="red darken-1" outlined icon small
                  ><v-icon @click="increase(item, 'CountAdult')" size="small"
                    >la-plus</v-icon
                  ></v-btn
                >
                <span class="title mx-2">{{
                  item.CountAdult | persianDigit
                }}</span>
                <v-btn color="red darken-1" outlined icon small>
                  <v-icon @click="decrease(item, 'CountAdult')" size="small"
                    >la-minus</v-icon
                  ></v-btn
                >
              </div>
            </div>
            <div class="pasenger child">
              <div>
                <span class="pasenger-title">کودک</span>
                <span class="body-1 grey--text">(۰ تا ۱۲ سال)</span>
              </div>
              <div>
                <v-btn color="red darken-1" outlined icon small
                  ><v-icon @click="increase(item, 'child')" size="small"
                    >la-plus</v-icon
                  ></v-btn
                >
                <span class="title mx-2">{{
                  item.Child.Age.length | persianDigit
                }}</span>
                <v-btn color="red darken-1" outlined icon small>
                  <v-icon @click="decrease(item, 'child')" size="small"
                    >la-minus</v-icon
                  ></v-btn
                >
              </div>
            </div>
            <div class="child-age">
              <div v-for="(age, index) in item.Child.Age" :key="index">
                <v-layout row wrap justify-space-between align-center>
                  <span
                    >سن کودک
                    {{ (index + 1) | numToPersian | persianDigit }}</span
                  >
                  <div>
                    <v-select
                      :items="ages"
                      solo
                      hide-details
                      v-model="item.Child.Age[index]"
                    ></v-select>
                  </div>
                </v-layout>
              </div>
            </div>
          </div>
          <div class="add-room">
            <v-btn @click="add_room" color="red darken-1" outlined block
              >اضافه کردن اتاق</v-btn
            >
          </div>
        </div>
      </div>
    </v-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { sumBy } from 'lodash-es'
export default Vue.extend({
  props: {
    label: {
      type: String,
      default: 'تعداد مسافر'
    },
    icon: {
      type: String,
      default: '$user'
    },
    value: {
      required: true,
      type: Array,
      default: [
        {
          CountAdult: '2',
          Child: { Age: [] }
        }
      ]
    },
    loading: {
      type: Boolean
    }
  },
  watch: {},
  filters: {
    numToPersian: function(value) {
      switch (value) {
        case 1:
          return 'اول'
          break
        case 2:
          return 'دوم'
          break
        case 3:
          return 'سوم'
          break
        case 4:
          return 'چهارم'
          break
        case 5:
          return 'پنجم'
          break
        default:
          return `${value} ام`
          break
      }
    }
  },
  data() {
    return {
      settings: {
        suppressScrollX: true
      },
      menu: false,
      model: <any>[...this.value],
      loader: <any>null,
      ages: [
        { text: '۰ تا ۱ سال', value: 0 },
        { text: '۱ تا ۲ سال', value: 1 },
        { text: '۲ تا ۳ سال', value: 2 },
        { text: '۳ تا ۴ سال', value: 3 },
        { text: '۴ تا ۵ سال', value: 4 },
        { text: '۵ تا ۶ سال', value: 5 },
        { text: '۶ تا ۷ سال', value: 6 },
        { text: '۷ تا ۸ سال', value: 7 },
        { text: '۸ تا ۹ سال', value: 8 },
        { text: '۹ تا ۱۰ سال', value: 9 },
        { text: '۱۰ تا ۱۱ سال', value: 10 },
        { text: '۱۱ تا ۱۲ سال', value: 11 }
      ]
    }
  },
  beforeMount() {
    if (!this.value || !this.value.length) {
      this.model = [
        {
          CountAdult: 2,
          Child: { Age: [] }
        }
      ]
    }
  },
  methods: {
    add_room() {
      if (this.model.length > 3) {
        return
      }
      this.model.push({
        CountAdult: 1,
        Child: { Age: [] }
      })
    },
    remove_room(index) {
      this.model.splice(index, 1)
    },
    increase(item, type) {
      if (type == 'CountAdult') {
        item[type]++
      } else {
        item.Child.Age.push(1)
      }
      // console.log(value)
    },
    decrease(item, type) {
      if (type == 'CountAdult') {
        if (item[type] < 2) {
          item[type] = 1
        } else {
          item[type]--
        }
      } else {
        item.Child.Age.pop()
      }
    }
  },
  computed: {
    model_human_readable() {
      let adult_count = sumBy(this.model, 'CountAdult')
      let child_count = sumBy(this.model, function(item) {
        return item.Child.Age.length
      })
      console.log(child_count)
      let str = ''
      str += `${this.model.length} اتاق`
      if (adult_count > 0) {
        str += ` ، ${adult_count} بزرگ سال`
      }
      if (child_count > 0) {
        str += ` ، ${child_count} کودک`
      }
      return str
    }
  }
})
</script>
