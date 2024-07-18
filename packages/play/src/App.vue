<script setup lang="ts">
import XButton from '@x-ui/components/Button/Button.vue'
</script>

<template>
  <h1>Button</h1>
  <XButton type="primary">
    按钮
  </XButton>
  <XButton type="primary" size="small">
    按钮
  </XButton>
  <XButton type="primary" size="default">
    按钮
  </XButton>
  <XButton type="primary" size="large">
    按钮
  </XButton>
  <br>
  <XButton type="primary" plain>
    按钮
  </XButton>
  <XButton type="primary" plain size="small">
    按钮
  </XButton>
  <XButton type="primary" plain size="default">
    按钮
  </XButton>
  <XButton type="primary" plain size="large">
    按钮
  </XButton>
  <br>
  <XButton type="danger" round>
    按钮
  </XButton>
  <XButton type="danger" round size="small">
    按钮
  </XButton>
  <XButton type="danger" round size="default">
    按钮
  </XButton>
  <XButton type="danger" round size="large">
    按钮
  </XButton>
  <br>
  <XButton type="info" circle>
    按钮
  </XButton>
  <XButton type="info" circle size="small">
    按钮
  </XButton>
  <XButton type="info" circle size="default">
    x
  </XButton>
  <XButton type="info" circle size="large">
    x
  </XButton>
  <br>
  <XButton type="success" disabled>
    按钮
  </XButton>
  <XButton type="success" disabled size="small">
    按钮
  </XButton>
  <XButton type="success" disabled size="default">
    按钮
  </XButton>
  <XButton type="success" disabled size="large">
    按钮
  </XButton>
  <br>
  <XButton
    type="warning"
    tag="a"
    href="https://github.com/element-plus/element-plus"
    target="_blank"
    rel="noopener noreferrer"
  >
    a
  </XButton>
  <br>
  <input autofocus>
</template>
