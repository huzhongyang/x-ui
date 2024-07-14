<script setup lang="ts">
defineOptions({
  name: 'XButton'
})

function clickHandler() {
  console.log('click')
}
</script>

<template>
<div>
  <button @click="clickHandler">this is a button</button>
</div>
</template>
