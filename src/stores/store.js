import { defineStore } from 'pinia';
import { screens } from '../constants';

const { start } = screens;

const store = {
  state: () => ({
    selectedScreen: start,
    firstSelectedZodiacSign: null,
    secondSelectedZodiacSign: null,
  }),
};

export const useStore = defineStore('store', store);
