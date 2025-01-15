<template>
  <div class="main-screen">
    <button class="btn" @click="handleBackClick">< Всі знаки</button>
    <CTabs activeItemKey="horoscope" class="tabs">
      <CTabContent class="tab-content">
        <CTabPanel itemKey="horoscope"><p class="description" v-html="description"></p></CTabPanel>
        <CTabPanel itemKey="compatibility"> Profile tab content </CTabPanel>
      </CTabContent>
      <CTabList variant="tabs" class="tabs-list">
        <CTab itemKey="horoscope" class="tab"><MoonIcon />Гороскоп</CTab>
        <CTab itemKey="compatibility" class="tab"><HeartIcon />Сумісність</CTab>
      </CTabList>
    </CTabs>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from '@/stores/store';
import { screens } from '@/constants';
import { CTabContent, CTabList, CTabPanel, CTabs, CTab } from '@coreui/vue';
import MoonIcon from '../images/moon.vue';
import HeartIcon from '../images/heart.vue';
import { zodiacData } from '@/constants';

export default {
  setup() {
    const store = useStore();
    const description = computed(
      () => zodiacData.find((item) => item.id === store.firstSelectedZodiacSign).description
    );

    function handleBackClick() {
      store.selectedScreen = screens.choose;
    }

    return { handleBackClick, description };
  },
  components: { CTabContent, CTabList, CTabPanel, CTabs, CTab, MoonIcon, HeartIcon },
};
</script>

<style scoped lang="scss">
.main-screen {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
}

.tabs {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex-grow: 1;
}

.tabs-list {
  display: flex;
  margin-top: auto;
  border-top: 2px solid #f0f2f8 !important;
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

  &.active {
    color: #007aff !important;
  }

  svg {
    margin-bottom: 7px;
  }
}

.tab-content {
}

.btn {
  margin: 32px 0 45px;
  padding: 0 !important;
  color: #007aff;

  &:active {
    color: #007aff !important;
    background-color: transparent !important;
  }
}

.description {
  font-size: 16px;
  line-height: 24px;
  color: #3e3e3e;
}
</style>
