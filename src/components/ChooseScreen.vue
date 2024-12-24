<template>
  <h1 class="heading">Обери свій знак зодіаку</h1>
  <Zodiac v-for="item in zodiacData" :zodiacSign="item.zodiacSign" />
</template>

<script>
import { useStore } from '@/stores/store';
import { zodiacData } from '@/constants';
import Zodiac from '../components/Zodiac.vue';

export default {
  setup() {
    const store = useStore();

    return { zodiacData };
  },
  components: { Zodiac },
};
</script>

<style scoped>
.heading {
  margin-top: 51px;
}
</style>
