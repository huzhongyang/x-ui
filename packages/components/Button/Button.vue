<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'XButton',
})

const btnText = ref('Add one +1')

function clickHandler() {
  const [text, count] = btnText.value.split('+')
  btnText.value = `${text}+${Number(count) + 1}`
}
</script>

<template>
  <div>
    <button @click="clickHandler">
      {{ btnText }}
    </button>
  </div>
</template>
