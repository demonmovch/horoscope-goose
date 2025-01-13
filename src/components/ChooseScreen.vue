<template>
  <h1 class="heading">Обери свій знак зодіаку</h1>
  <div class="zodiac-container">
    <Zodiac v-for="item in zodiacData" :data="item" />
  </div>
  <button class="primary btn" @click="handleBtnClick">Продовжити</button>
</template>

<script>
import { useStore } from '@/stores/store';
import { zodiacData } from '@/constants';
import Zodiac from '../components/Zodiac.vue';

export default {
  setup() {
    const store = useStore();

    function handleBtnClick() {}

    return { handleBtnClick, zodiacData };
  },
  components: { Zodiac },
};
</script>

<style scoped lang="scss">
.heading {
  margin: 51px 0 40px;
}

.btn {
  margin-top: 32px;
}
</style>
