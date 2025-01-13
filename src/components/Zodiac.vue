<template>
  <label class="wrapper">
    <img :src="data.image" alt="" />
    <span class="label">{{ data.label }}</span>
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
  props: ['data'],
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  cursor: pointer;
}

.label {
}
</style>
