// images componnets
import aquarius from './images/aquarius.svg';
import aquariusColored from './images/aquarius_colored.svg';
import aries from './images/aries.svg';
import ariesColored from './images/aries_colored.svg';
import cancer from './images/cancer.svg';
import cancerColored from './images/cancer_colored.svg';
import capricorn from './images/capricorn.svg';
import capricornColored from './images/capricorn_colored.svg';
import gemini from './images/gemini.svg';
import geminiColored from './images/gemini_colored.svg';
import leo from './images/leo.svg';
import leoColored from './images/leo_colored.svg';
import libra from './images/libra.svg';
import libraColored from './images/libra_colored.svg';
import pisces from './images/pisces.svg';
import piscesColored from './images/pisces_colored.svg';
import sagittarius from './images/sagittarius.svg';
import sagittariusColored from './images/sagittarius_colored.svg';
import scorpio from './images/scorpio.svg';
import scorpioColored from './images/scorpio_colored.svg';
import taurus from './images/taurus.svg';
import taurusColored from './images/taurus_colored.svg';
import virgo from './images/virgo.svg';
import virgoColored from './images/virgo_colored.svg';

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
  {
    zodiacSign: zodiacSign.aquarius,
    label: 'Бандеролій',
    image: aquarius,
    imageColored: aquariusColored,
  },
  { zodiacSign: zodiacSign.aries, label: 'Бандеровен', image: aries, imageColored: ariesColored },
  { zodiacSign: zodiacSign.cancer, label: 'Бандерак', image: cancer, imageColored: cancerColored },
  {
    zodiacSign: zodiacSign.capricorn,
    label: 'Бандероріг',
    image: capricorn,
    imageColored: capricornColored,
  },
  { zodiacSign: zodiacSign.gemini, label: 'Бандерюки', image: gemini, imageColored: geminiColored },
  { zodiacSign: zodiacSign.leo, label: 'Бандеролев', image: leo, imageColored: leoColored },
  { zodiacSign: zodiacSign.libra, label: 'Бандерези', image: libra, imageColored: libraColored },
  { zodiacSign: zodiacSign.pisces, label: 'Бандериби', image: pisces, imageColored: piscesColored },
  {
    zodiacSign: zodiacSign.sagittarius,
    label: 'Бандерілець',
    image: sagittarius,
    imageColored: sagittariusColored,
  },
  {
    zodiacSign: zodiacSign.scorpio,
    label: 'Бандерпіон',
    image: scorpio,
    imageColored: scorpioColored,
  },
  { zodiacSign: zodiacSign.taurus, label: 'Бандерець', image: taurus, imageColored: taurusColored },
  { zodiacSign: zodiacSign.virgo, label: 'Бандеродіва', image: virgo, imageColored: virgoColored },
];

export const screens = {
  start: 'start',
  choose: 'choose',
  main: 'main',
};
