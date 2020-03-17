<style lang="scss">
.app-select {
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
    input {
      font-weight: 600;
      min-width: 100px;
    }
    .la-angle-down {
      font-size: 14px;
      color: $red-color;
    }
  }
  .scroll-area {
    position: relative;
    margin: auto;
    max-height: 400px;
    direction: ltr;
    .ps__rail-y {
      right: auto;
      left: 0;
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
  .v-list {
    direction: rtl;
    padding: 0;
  }
  .v-list-item {
    &:hover {
      background: #fff4f3;
    }
  }
}
</style>
<template>
  <div class="app-select">
    <v-menu
      v-model="menu"
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
            <input type="text" @input="onSearch" v-model="model.text" />
            <v-icon class="chevron" :class="{ is_open: menu }"
              >$chevron_down</v-icon
            >
          </div>
        </div>
      </template>
      <div>
        <vue-custom-scrollbar class="scroll-area" :settings="settings">
          <div ref="listwrapper">
            <v-list>
              <v-list-item
                :ripple="{ class: `pink--text` }"
                v-for="(item, i) in items"
                :key="i"
                @click="selectItem(item)"
              >
                <v-list-item-title>
                  <span>
                    {{ item.text }}
                  </span>
                  <span v-if="item.subText" class="caption grey--text"
                    >( {{ item.subText }} )</span
                  >
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </vue-custom-scrollbar>
      </div>
    </v-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: {
      type: String
    },
    icon: {
      type: String
    },
    items: {
      type: Array,
      required: true
    },
    value: {
      required: true
    },
    loading: {
      type: Boolean
    }
  },
  watch: {
    loading: function(val) {
      if (val) {
        this.loader = this.$loader.show('.ps.scroll-area')
      } else {
        this.loader.hide()
      }
    },
    menu: function(val) {
      if (val) {
        if (this.loading) {
          setTimeout(() => {
            this.loader = this.$loader.show('.ps.scroll-area')
          }, 100)
        }
      } else {
        this.loader && this.loader.hide()
        this.model = { ...this.value }
        this.$emit('hide')
      }
    }
  },
  data() {
    return {
      settings: {
        suppressScrollX: true
      },
      menu: false,
      model: <any>{ ...this.value },
      loader: <any>null
    }
  },
  mounted() {
    // this.$loader.show(this.$refs.listwrapper)
  },
  methods: {
    selectItem(item) {
      this.model = item
      this.$emit('input', this.model)
    },
    onSearch(event) {
      this.menu = true
      this.$emit('search', this.model.text)
    }
  }
})
</script>
