<template>
  <label class="wrapper">
    <input
      type="radio"
      :value="data.id"
      name="zodiac"
      class="visually-hidden"
      :checked="selected"
      @change="handleChange"
    />
    <img :src="image" alt="" />
    <span class="label">{{ data.label }}</span>
  </label>
</template>

<script>
import { computed } from 'vue';
import { useStore } from '@/stores/store';

export default {
  setup(props, context) {
    const store = useStore();
    const selected = computed(() => props.modelValue === props.data.id);
    const image = computed(() => (selected.value ? props.data.imageColored : props.data.image));

    function handleChange(event) {
      context.emit('update:modelValue', event.target.value);

      /* we call requestAnimationFrame() to scroll at the next repaint after button Продовжити is mounted */
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          document.documentElement.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          });
        });
      });
    }

    return { store, image, selected, handleChange };
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
