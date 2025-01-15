<template>
  <main>
    <StartScreen v-if="isStartScreen" />
    <ChooseScreen v-if="isChooseScreen" />
    <MainScreen v-if="isMainScreen" />
  </main>
</template>

<script>
import { computed } from 'vue';
import StartScreen from './components/StartScreen.vue';
import ChooseScreen from '@/components/ChooseScreen.vue';
import MainScreen from '@/components/MainScreen.vue';
import { useStore } from '@/stores/store';
import { screens } from '@/constants';

export default {
  setup() {
    const store = useStore();
    const isStartScreen = computed(() => store.selectedScreen === screens.start);
    const isChooseScreen = computed(() => store.selectedScreen === screens.choose);
    const isMainScreen = computed(() => store.selectedScreen === screens.main);

    return { isStartScreen, isChooseScreen, isMainScreen };
  },
  components: { StartScreen, ChooseScreen, MainScreen },
};
</script>

<style scoped></style>
