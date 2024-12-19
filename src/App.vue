<template>
  <main>
    <StartScreen v-if="isStartScreen" />
    <ChooseScreen v-if="isChooseScreen" />
  </main>
</template>

<script>
import { computed } from 'vue';
import StartScreen from './components/StartScreen.vue';
import ChooseScreen from '@/components/ChooseScreen.vue';
import { useStore } from '@/stores/store';
import { screens } from '@/constants';

export default {
  setup() {
    const store = useStore();
    const isStartScreen = computed(() => store.selectedScreen === screens.start);
    const isChooseScreen = computed(() => store.selectedScreen === screens.choose);

    return { isStartScreen, isChooseScreen };
  },
  components: {
    StartScreen,
    ChooseScreen,
  },
};
</script>

<style scoped></style>
