<template>
  <div class="container">
    <img :src="props.image" alt="" />
    <div class="text">
      <p class="heading">{{ props.text }}</p>
      <p :class="nameClasses">{{ props.name }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  setup(props) {
    const nameClasses = computed(() => ['name', { 'text-align-left': props.nameTextAlignLeft }]);

    return { props, nameClasses };
  },
  props: ['name', 'text', 'image', 'nameTextAlignLeft'],
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  margin-bottom: 22px;
}

.text {
  margin-left: 14px;
}

.heading,
.name {
  font-size: 16px;
}

.heading {
  line-height: 20px;
  color: #3e3e3e;
}

.name {
  text-align: center;
  font-weight: 700;
  line-height: 24px;
  color: #000;

  &.text-align-left {
    text-align: left !important;
  }
}
</style>
