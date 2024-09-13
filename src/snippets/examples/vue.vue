<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <button @click="incrementCount" aria-live="polite">Count: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const title = ref("Vue.js App");
const count = ref(0);

const incrementCount = () => {
  count.value++;
};

onMounted(() => {
  console.log("Component mounted");
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
}
</style>
