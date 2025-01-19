<template>
  <div class="main-screen">
    <button class="btn-back" @click="handleBackClick">< Всі знаки</button>
    <CTabs activeItemKey="horoscope" class="tabs">
      <CTabContent class="tab-content">
        <CTabPanel itemKey="horoscope" class="tab-panel">
          <Header
            :image="firstSelectedZodiacSign.imageColored"
            :name="firstSelectedZodiacSign.label"
            :text="'Прогноз для знаку'"
          />
          <p v-html="firstSelectedZodiacSign.description" class="description"></p>
        </CTabPanel>
        <CTabPanel itemKey="compatibility" class="tab-panel">
          <Header
            :image="firstSelectedZodiacSign.imageColored"
            :name="firstSelectedZodiacSign.label"
            :text="'Сумісність для знаку'"
            :nameTextAlignLeft="showCompatibility"
          />
          <div v-if="secondSelectedZodiacSign && showCompatibility">
            <Header
              :image="secondSelectedZodiacSign.imageColored"
              :name="secondSelectedZodiacSign.label"
              :text="'зі знаком'"
              :nameTextAlignLeft="true"
            />
            <p v-html="compatibility" class="description"></p>
          </div>
          <div v-if="!showCompatibility" class="zodiac-container">
            <Zodiac
              v-for="item in zodiacData"
              :key="item.id"
              :data="item"
              v-model="store.secondSelectedZodiacSign"
            />
          </div>
          <button
            v-if="secondSelectedZodiacSign && !showCompatibility"
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
import { screens, zodiacData, COMPATIBILITY_VALUES, COMPATIBILITY_TABLE } from '@/constants';
import Zodiac from '../components/Zodiac.vue';
import Header from '../components/Header.vue';
import { CTabContent, CTabList, CTabPanel, CTabs, CTab } from '@coreui/vue';
import MoonIcon from '../images/moon.vue';
import HeartIcon from '../images/heart.vue';

export default {
  setup() {
    const store = useStore();
    const showCompatibility = ref(false);
    const firstSelectedZodiacSign = computed(() =>
      zodiacData.find((item) => item.id === store.firstSelectedZodiacSign)
    );
    const secondSelectedZodiacSign = computed(() =>
      zodiacData.find((item) => item.id === store.secondSelectedZodiacSign)
    );
    const compatibility = computed(() => {
      const compatibilityNumber =
        COMPATIBILITY_TABLE[store.firstSelectedZodiacSign][store.secondSelectedZodiacSign];
      return COMPATIBILITY_VALUES[compatibilityNumber];
    });

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
      firstSelectedZodiacSign,
      secondSelectedZodiacSign,
      zodiacData,
      showCompatibility,
      compatibility,
    };
  },
  components: {
    Header,
    Zodiac,
    CTabContent,
    CTabList,
    CTabPanel,
    CTabs,
    CTab,
    MoonIcon,
    HeartIcon,
  },
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
  padding-bottom: 20px !important;
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
