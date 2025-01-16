<template>
  <div class="main-screen">
    <button class="btn-back" @click="handleBackClick">< Всі знаки</button>
    <div class="current-zodiac-sign">
      <img :src="selectedZodiacSign.imageColored" alt="" />
      <div class="current-zodiac-sign__text">
        <p class="current-zodiac-sign__heading">Прогноз для знаку</p>
        <p class="current-zodiac-sign__sign-name">{{ selectedZodiacSign.label }}</p>
      </div>
    </div>
    <CTabs activeItemKey="horoscope" class="tabs">
      <CTabContent class="tab-content">
        <CTabPanel itemKey="horoscope" class="tab-panel">
          <p class="description" v-html="selectedZodiacSign.description"></p>
        </CTabPanel>
        <CTabPanel itemKey="compatibility" class="tab-panel">
          <div v-if="!showCompatibility" class="zodiac-container">
            <Zodiac
              v-for="item in restOfZodiacs"
              :key="item.id"
              :data="item"
              v-model="store.secondSelectedZodiacSign"
            />
          </div>
          <button
            v-if="store.secondSelectedZodiacSign && !showCompatibility"
            class="primary btn"
            @click="handleContinueClick"
          >
            Продовжити
          </button>
        </CTabPanel>
      </CTabContent>
      <CTabList variant="tabs" class="tabs-list">
        <CTab itemKey="horoscope" class="tab"><MoonIcon />Гороскоп</CTab>
        <CTab itemKey="compatibility" class="tab"><HeartIcon />Сумісність</CTab>
      </CTabList>
    </CTabs>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from '@/stores/store';
import { screens, zodiacData } from '@/constants';
import Zodiac from '../components/Zodiac.vue';
import { CTabContent, CTabList, CTabPanel, CTabs, CTab } from '@coreui/vue';
import MoonIcon from '../images/moon.vue';
import HeartIcon from '../images/heart.vue';

export default {
  setup() {
    const store = useStore();
    const showCompatibility = ref(false);
    const selectedZodiacSign = computed(() =>
      zodiacData.find((item) => item.id === store.firstSelectedZodiacSign)
    );
    const restOfZodiacs = computed(() =>
      zodiacData.filter((item) => item.id !== store.firstSelectedZodiacSign)
    );

    function handleBackClick() {
      store.selectedScreen = screens.choose;
    }

    function handleContinueClick() {
      showCompatibility.value = true;
    }

    return {
      store,
      handleBackClick,
      handleContinueClick,
      selectedZodiacSign,
      restOfZodiacs,
      showCompatibility,
    };
  },
  components: { Zodiac, CTabContent, CTabList, CTabPanel, CTabs, CTab, MoonIcon, HeartIcon },
};
</script>

<style scoped lang="scss">
.main-screen {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.tabs {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex-grow: 1;
}

.tabs-list {
  display: flex;
  margin-top: 50px;
  border-top: 2px solid #ccc !important;
  border-bottom: none !important;
  border-left: none !important;
  border-right: none !important;
}

.tab {
  color: #999999 !important;
  font-size: 16px !important;
  line-height: 12px !important;
  padding-top: 7px !important;
  display: flex !important;
  align-items: center !important;
  flex-direction: column !important;
  flex-grow: 0.5 !important;
  border: none !important;
  background: none !important;

  &.active {
    color: #007aff !important;
  }

  svg {
    margin-bottom: 7px;
  }
}

.btn {
  &-back {
    margin: 32px 0 45px;
    padding: 0 !important;
    color: #007aff;

    &:active {
      color: #007aff !important;
      background-color: transparent !important;
    }
  }
}

.description {
  font-size: 16px;
  line-height: 24px;
  color: #3e3e3e;
}
</style>
