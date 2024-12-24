// images componnets
import aquarius from './images/aquarius.vue';
import aquariusColored from './images/aquarius_colored.vue';
import aries from './images/aries.vue';
import ariesColored from './images/aries_colored.vue';
import cancer from './images/cancer.vue';
import cancerColored from './images/cancer_colored.vue';
import capricorn from './images/capricorn.vue';
import capricornColored from './images/capricorn_colored.vue';
import gemini from './images/gemini.vue';
import geminiColored from './images/gemini_colored.vue';
import leo from './images/leo.vue';
import leoColored from './images/leo_colored.vue';
import libra from './images/libra.vue';
import libraColored from './images/libra_colored.vue';
import pisces from './images/pisces.vue';
import piscesColored from './images/pisces_colored.vue';
import sagittarius from './images/sagittarius.vue';
import sagittariusColored from './images/sagittarius_colored.vue';
import scorpio from './images/scorpio.vue';
import scorpioColored from './images/scorpio_colored.vue';
import taurus from './images/taurus.vue';
import taurusColored from './images/taurus_colored.vue';
import virgo from './images/virgo.vue';
import virgoColored from './images/virgo_colored.vue';

export const zodiacSign = {
  aquarius: 'aquarius',
  aries: 'aries',
  cancer: 'cancer',
  capricorn: 'capricorn',
  gemini: 'gemini',
  leo: 'leo',
  libra: 'libra',
  pisces: 'pisces',
  sagittarius: 'sagittarius',
  scorpio: 'scorpio',
  taurus: 'taurus',
  virgo: 'virgo',
};

export const zodiacData = [
  { zodiacSign: zodiacSign.aquarius, image: aquarius, imageColored: aquariusColored },
  { zodiacSign: zodiacSign.aries, image: aries, imageColored: ariesColored },
  { zodiacSign: zodiacSign.cancer, image: cancer, imageColored: cancerColored },
  { zodiacSign: zodiacSign.capricorn, image: capricorn, imageColored: capricornColored },
  { zodiacSign: zodiacSign.gemini, image: gemini, imageColored: geminiColored },
  { zodiacSign: zodiacSign.leo, image: leo, imageColored: leoColored },
  { zodiacSign: zodiacSign.libra, image: libra, imageColored: libraColored },
  { zodiacSign: zodiacSign.pisces, image: pisces, imageColored: piscesColored },
  { zodiacSign: zodiacSign.sagittarius, image: sagittarius, imageColored: sagittariusColored },
  { zodiacSign: zodiacSign.scorpio, image: scorpio, imageColored: scorpioColored },
  { zodiacSign: zodiacSign.taurus, image: taurus, imageColored: taurusColored },
  { zodiacSign: zodiacSign.virgo, image: virgo, imageColored: virgoColored },
];

export const screens = {
  start: 'start',
  choose: 'choose',
  main: 'main',
};
