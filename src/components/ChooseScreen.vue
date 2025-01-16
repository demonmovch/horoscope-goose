<template>
  <h1 class="heading">Обери свій знак зодіаку</h1>
  <div class="zodiac-container">
    <Zodiac
      v-for="item in zodiacData"
      :key="item.id"
      :data="item"
      v-model="store.firstSelectedZodiacSign"
    />
  </div>
  <button v-if="store.firstSelectedZodiacSign" class="primary btn" @click="handleBtnClick">
    Продовжити
  </button>
</template>

<script>
import { useStore } from '@/stores/store';
import { screens, zodiacData } from '@/constants';
import Zodiac from '../components/Zodiac.vue';

export default {
  setup() {
    const store = useStore();

    function handleBtnClick() {
      store.selectedScreen = screens.main;
    }

    return { store, handleBtnClick, zodiacData };
  },
  components: { Zodiac },
};
</script>

<style scoped lang="scss">
.heading {
  margin: 51px 0 40px;
}

.btn {
  margin: 11px auto 32px;
}
</style>
