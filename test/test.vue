<script>
// eslint-disable-next-line import/first
// eslint-disable-next-line no-duplicate-imports
// import { ref } from 'vue'
export default {
  name: 'Play',
}
</script>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('text')
const html = ref('<span>html</span>')

</script>

<template>
  <div class="test">TEST</div>
  <div v-text="text" />
  <div v-html="html" />
  <div class="1122">nih</div>
</template>

<style scoped>
.test {
  color: green;
}
</style>
