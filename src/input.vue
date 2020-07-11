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
      <icon name="error" class="error-icon"></icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>
<script>
import icon from "./icon";
export default {
  name: "G-input",
  components: {
    icon,
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
  display: inline-flex;
  align-items: center;
  // > * {
  //   margin-right: 0.5em;
  //   &:last-child {
  //     margin-right: 0;
  //   }
  // }
  > :not(:last-child) {
    margin-right: 0.5em;
  }
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
    .error-icon {
      fill: $red;
    }
    .error-message {
      color: $red;
    }
  }
}
</style>
