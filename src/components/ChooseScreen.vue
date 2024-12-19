<template>
  <h1 class="heading">Обери свій знак зодіаку</h1>
</template>

<script>
import { useStore } from '@/stores/store';

export default {
  setup() {
    const store = useStore();
  },
  components: {},
};
</script>

<style scoped>
.heading {
  margin-top: 51px;
}
</style>
