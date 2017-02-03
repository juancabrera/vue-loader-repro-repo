<template>
  <div>
    <p>Hello from {{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ["name"],
  replace: false,
}
</script>
