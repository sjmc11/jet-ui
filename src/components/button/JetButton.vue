<template>
  <button @click="$emit('click')" :disabled="disabled" class="jet-btn" :class="`jet-btn-${theme}`">
    <slot name="default">{{text}}</slot>
  </button>
</template>

<script setup lang="ts">
import {defineComponent} from "vue";

defineComponent({
  name: "JetButton",
});
defineProps({
  text: { type: String, required: false },
  disabled: { type: Boolean, default: false },
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'md'
  },
  theme: {
    type: String as () => 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default',
    default: 'default'
  }
})
defineEmits(["click"]);
</script>

<style lang="scss" scoped>
  @import './JetButton.scss';
</style>
