<template>
  <div class="container" :class="{ error }">
    <input
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :error="error"
      type="text"
    />
    <template v-if="error">
      <Icon name="setting"></Icon>
      <span>{{error}}</span>
    </template>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  name: "G-input",
  components: {
    Icon,
  },
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      props: String,
    },
  },
};
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$font-size: 12px;
$box-shadow-color: rgb(0, 0, 0, 0.5);
$disabled-color: #aaa;
$red: #f1453d;
.container {
  font-size: $font-size;
  display: inline;
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 9px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: $disabled-color;
      color: $disabled-color;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
      &:focus {
        box-shadow: inset 0 1px 3px $red;
        outline: none;
      }
    }
  }
}
</style>
