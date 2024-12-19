import { defineStore } from 'pinia';
import { screens } from '../constants';

const { start } = screens;

export const useStore = defineStore('store', {
  state: () => ({
    selectedScreen: start,
    firstSelectedZodiacSign: null,
    secondSelectedZodiacSign: null,
  }),
});
