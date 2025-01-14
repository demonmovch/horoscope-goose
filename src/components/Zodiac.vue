<template>
  <label class="wrapper">
    <input
      type="radio"
      :value="data.id"
      name="zodiac"
      class="visually-hidden"
      :checked="selected"
      @change="$emit('update:modelValue', $event.target.value)"
    />
    <img :src="image" alt="" />
    <span class="label">{{ data.label }}</span>
  </label>
</template>

<script>
import { computed } from 'vue';
import { useStore } from '@/stores/store';

export default {
  setup(props) {
    const store = useStore();
    const selected = computed(() => props.modelValue === props.data.id);
    const image = computed(() => (selected.value ? props.data.imageColored : props.data.image));

    return { store, image, selected };
  },
  props: ['data', 'modelValue'],
  emits: ['update:modelValue'],
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

img {
  width: 112px;
  height: 112px;
}
</style>
