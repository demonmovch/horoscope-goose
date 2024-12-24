<template>
  <label>
    {{ zodiacSign }}
  </label>
</template>

<script>
import { useStore } from '@/stores/store';

export default {
  setup(props) {
    const store = useStore();

    return {};
  },
  components: {},
  props: ['zodiacSign'],
};
</script>

<style scoped></style>
