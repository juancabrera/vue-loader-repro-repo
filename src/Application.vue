<template>
  <div class="my-app">
    <h1>vue-loader-repro-repo</h1>
    <my-cmp :name="name"></my-cmp>
    <div class="child">child element</div>
  </div>
</template>

<script>
import MyCmp from "./components/MyCmp.vue"

export default {
  components: {
    MyCmp,
  },
  data() {
    return {
      name: "Child component"
    }
  }
}
</script>

<style>
:root {
  --color-main: green;
}

.my-app {
  background: #eee;
  padding: 10px;

  & .child {
    color: var(--color-main);
  }
}
</style>
