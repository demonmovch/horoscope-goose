<template>
  <StartScreenImage />
  <h1>Зодіакальний бандерогусь</h1>
  <button class="primary btn" @click="handleBtnClick">Продовжити</button>
</template>

<script>
import StartScreenImage from '../images/StartScreenImage.vue';
import { useStore } from '@/stores/store';
import { screens } from '@/constants';

export default {
  setup() {
    const store = useStore();

    function handleBtnClick() {
      store.selectedScreen = screens.choose;
    }

    return { handleBtnClick };
  },
  components: {
    StartScreenImage,
  },
};
</script>

<style scoped>
.btn {
  margin-top: 10px;
}
</style>
