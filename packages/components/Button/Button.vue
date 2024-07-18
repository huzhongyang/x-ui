<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonInstance, ButtonProps } from './types.ts'

defineOptions({
  name: 'XButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
})

const _ref = ref<HTMLButtonElement>()

defineExpose<ButtonInstance>({
  ref: _ref,
})
</script>

<template>
  <component
    :is="props.tag"
    ref="_ref"
    :type="tag === 'button' ? nativeType : void 0"
    class="x-button"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`x-button--${type}`]: type,
      [`x-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
  >
    <slot />
  </component>
</template>

<style scoped>
@import './style.scss';
</style>
