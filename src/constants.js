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

export const screens = {
  start: 'start',
  choose: 'choose',
  main: 'main',
};

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
    id: zodiacSign.aquarius,
    label: 'Бандеролій',
    image: aquarius,
    imageColored: aquariusColored,
    description: `
		Водолії - особистості з найбільшим серцем та душею, але якщо хочете їх обдурити, це буде ваша остання ідея в житті. 
		<br><br>
		У Водоліїв чудово розвинена інтуіція та вміння бачити людей. Ви тільки ввійшли, а вони вже знають, які у вас дитячі травми і що ви за людина. 
		<br><br>
		<b>“Не май сто друзів, а май одного Водолія”</b>
		`,
  },
  {
    id: zodiacSign.aries,
    label: 'Бандеровен',
    image: aries,
    imageColored: ariesColored,
    description: `
		Овни - стихія полумʼя. По життю в них теж все палає. Не знають страху, відмови, поразки. Якщо щось задумали - хрін перепреш. 
		<br><br>
		Якщо Овен неправий, він правий. Якщо ви не погоджуєтеся з Овном,  погодитесь. Якщо хочете додати пікантності в своє життя - просто скажіть Овну, як йому жити. 
		<br><br>
		<b>“Останнє слово завжди за нами”</b>	
		`,
  },
  {
    id: zodiacSign.cancer,
    label: 'Бандерак',
    image: cancer,
    imageColored: cancerColored,
    description: `
		Раки - найчуттєвіші та найбільш емоційні люди, але вперті, тому ніколи з цим не погодяться. 
		<br><br>
		Drama Queen усіх знаків зодіаку. Але третє око Раків має найгострішу інтуїцію. Завдяки їхньому покерфейсу, ви ніколи не здогадаєтеся, що у них в голові: чи то поле з метеликами, чи то план нападу по чотирьох позиціях. 
		<br><br>
		<b>“Маєте критику? Залиште її при собі”</b>
		`,
  },
  {
    id: zodiacSign.capricorn,
    label: 'Бандероріг',
    image: capricorn,
    imageColored: capricornColored,
    description: `
		Козероги - цілеспрямовані, сильні особистості, які досягають цілей так легко, наче лускають насіннячко. 
		<br><br>
		Якщо ви плануєте подорож із Козерогами, будьте готовими до детального аналізу кожного кроку, після якого перехочеться їхати. Думки в голові рухаються зі швидкістю машин у Форсажі.
		<br><br>
		<b>“Сльози у Козерогів - це 8-е диво світу”</b>
		`,
  },
  {
    id: zodiacSign.gemini,
    label: 'Бандерюки',
    image: gemini,
    imageColored: geminiColored,
    description: `
		Близнюки - авантюристи в стилі “пан або пропав”. Відпочинок - це пробігти 10 км,  попорати худобу і зробити якусь диверсію на расєї. 
		<br><br>
		Оптимісти, рішучі та впевнені в собі, завжди знайдуть пригоди на свою 5-ту точку. Настрій приблизно як березень:  сніг, дощ, град, сонце, цунамі. 
		<br><br>
		<b>“Хто не ризикує, той не ми, бо ми завжди пʼємо шампанське”.</b> 
		`,
  },
  {
    id: zodiacSign.leo,
    label: 'Бандеролев',
    image: leo,
    imageColored: leoColored,
    description: `
		Леви - найбільш яскраві та харизматичні особистості. Справжні королі, завжди досягають свого, щедрі, великодушні, але тільки з обраними.
		<br><br>
		Якщо б за гордість давали премію, статуетка була б у формі лева. 
		Леви люблять жартувати над собою, але вам над ними жартувати не радимо. 
		<br><br>
		<b>“Є тільки дві точки зору - моя та хибна”</b>
		`,
  },
  {
    id: zodiacSign.libra,
    label: 'Бандерези',
    image: libra,
    imageColored: libraColored,
    description: `
		Терези - з дитинства мають якийсь особливий шарм та привабливість, за що їх неможливо не любити. 
		<br><br>
		Живуть у темпі “5 пʼятниць на тиждень”. 5 настроїв на хвилину. 5 особистостей на день. Ніколи не знаєш, чого чекати від Терезів. Будь-яке рішення приймається 2-3 тижні. А потім ще 20 разів перевіряється.
		<br><br>
		<b>“Сам не сплю і вам не дам”</b>
		`,
  },
  {
    id: zodiacSign.pisces,
    label: 'Бандериби',
    image: pisces,
    imageColored: piscesColored,
    description: `
		Риби - це ті самі люди, до яких ви приходите ввечері з пляшечкою вина і душевними ранами. 
		<br><br>
		Гнучкі особистості, які найшвидше адаптуються до будь-яких змін. Треба переїхати? Піду спакую валізку. Треба вночі виїхати на допомогу другу? Піду візьму лопату. Відчуття справедливості гостріше за самурайський меч. 
		<br><br>
		<b>“У вир з головою”</b>
		`,
  },
  {
    id: zodiacSign.sagittarius,
    label: 'Бандерілець',
    image: sagittarius,
    imageColored: sagittariusColored,
    description: `
		Стрільці - найбільш енергійні та позитивні особистості, у яких хочеться знайти кнопку “Викл”, але її немає.
		<br><br>
		Життя в ритмі “щось робити, кудись їхати”. Будь-яку ситуацію можуть обернути на свою користь та на хвилю оптимізму. Вкрали гроші - можливість заробити нові. Розбив келих - на щастя. 
		<br><br>
		<b>“Не будь як всі, будь original”</b>
		`,
  },
  {
    id: zodiacSign.scorpio,
    label: 'Бандерпіон',
    image: scorpio,
    imageColored: scorpioColored,
    description: `
		Скорпіони - незалежні, самостійні, сталеві особистості, але з чуйною душею і добрим серцем, які ви ніколи не побачите. 
		<br><br>
		Дуже складна і глибока натура. Якщо Скорпіон обрав вас у друзі/партнери, то можете почуватися як “Оскар” на поличці у ДіКапріо. Якщо ваша думка йде всупереч їхній, то ви її зміните. 
		<br><br>
		<b>“Я не злопамʼятний, але все памʼятаю”</b>
		`,
  },
  {
    id: zodiacSign.taurus,
    label: 'Бандерець',
    image: taurus,
    imageColored: taurusColored,
    description: `
		Тельці - рогаті небожителі. Перш ніж прийняти рішення, Телець обдумає все разів зо триста. А потім все одно буде лише на 25% впевненим, що діє правильно. 
		<br><br>
		Стабільність, порядок, дисципліна для них - база. Якщо ви запрошуєте Тельця на побачення і не кажете куди, +- до 19:00 він зійде з розуму. 
		<br><br>
		<b>“Мої принципи непохитні”</b>
		`,
  },
  {
    id: zodiacSign.virgo,
    label: 'Бандеродіва',
    image: virgo,
    imageColored: virgoColored,
    description: `
		Діви - фанатичні перфекціоністи, які повільно, але впевнено досягають мети. 
		<br><br>
		Коли Діви прасують одяг, то прасують і шкарпетки, і панчохи, і шнурки від найків. Якщо, не приведи боже, ви дасте Діві чорну ручку із зеленим ковпачком, отримає панічну атаку. 
		<br><br>
		<b>“Я що, багато прошу? Просто веди себе ідеально 24/7!”</b>
		`,
  },
];

export const COMPATIBILITY_VALUES = {
  1: 'Абсолютно несумісні.<br> Зірочки кажуть, що стосунки приреченні, адже ви надто різні.<br> Але, можливо, ви як той інь-янь: хоч і зовсім різні, але одне без одного ніяк? Тут уже залежить від вас, тож маєте почуття - спробуйте',
  2: 'Погана сумісність.<br> Ми любимо американські гірки - девіз ваших стосунків.<br> Ваш шлях у стосунках, якщо і буде, то м’яко кажучи, тернистим. Але якщо є почуття, коли це когось зупиняло?',
  3: 'Нейтральна сумісність.<br> Або пан, або пропав.<br> Для таких стосунків головне пройти перевірку часом. Ви як оливки: почнете любити одне одного, тільки коли обидва подорослішаєте',
  4: 'Хороша сумісність.<br> Такі стосунки завжди починаються з фрази: “Божеее, яке кончене”, коли вас бісить в людині все, але тягне одне до одного, наче магнітом. І в голові каша. Але далі одне без одного вже неможливо',
  5: 'Ідеальна сумісність.<br> Тут рівень Love Is - обійнявшись, дивитись, як палають куполи кремля.<br> Зазвичай такі стосунки починаються з довгої френдзони, а в один момент переростають у найміцніше кохання і родину',
};

export const COMPATIBILITY_TABLE = {
  [zodiacSign.aries]: {
    [zodiacSign.aries]: 3,
    [zodiacSign.taurus]: 2,
    [zodiacSign.gemini]: 4,
    [zodiacSign.cancer]: 2,
    [zodiacSign.leo]: 5,
    [zodiacSign.virgo]: 1,
    [zodiacSign.libra]: 3,
    [zodiacSign.scorpio]: 2,
    [zodiacSign.sagittarius]: 5,
    [zodiacSign.capricorn]: 2,
    [zodiacSign.aquarius]: 4,
    [zodiacSign.pisces]: 1,
  },
  [zodiacSign.taurus]: {
    [zodiacSign.aries]: 2,
    [zodiacSign.taurus]: 3,
    [zodiacSign.gemini]: 1,
    [zodiacSign.cancer]: 4,
    [zodiacSign.leo]: 1,
    [zodiacSign.virgo]: 5,
    [zodiacSign.libra]: 2,
    [zodiacSign.scorpio]: 3,
    [zodiacSign.sagittarius]: 4,
    [zodiacSign.capricorn]: 5,
    [zodiacSign.aquarius]: 1,
    [zodiacSign.pisces]: 4,
  },
  [zodiacSign.gemini]: {
    [zodiacSign.aries]: 4,
    [zodiacSign.taurus]: 1,
    [zodiacSign.gemini]: 3,
    [zodiacSign.cancer]: 2,
    [zodiacSign.leo]: 4,
    [zodiacSign.virgo]: 1,
    [zodiacSign.libra]: 5,
    [zodiacSign.scorpio]: 2,
    [zodiacSign.sagittarius]: 3,
    [zodiacSign.capricorn]: 4,
    [zodiacSign.aquarius]: 5,
    [zodiacSign.pisces]: 1,
  },
  [zodiacSign.cancer]: {
    [zodiacSign.aries]: 1,
    [zodiacSign.taurus]: 4,
    [zodiacSign.gemini]: 2,
    [zodiacSign.cancer]: 3,
    [zodiacSign.leo]: 1,
    [zodiacSign.virgo]: 4,
    [zodiacSign.libra]: 4,
    [zodiacSign.scorpio]: 5,
    [zodiacSign.sagittarius]: 2,
    [zodiacSign.capricorn]: 3,
    [zodiacSign.aquarius]: 1,
    [zodiacSign.pisces]: 5,
  },
  [zodiacSign.leo]: {
    [zodiacSign.aries]: 5,
    [zodiacSign.taurus]: 1,
    [zodiacSign.gemini]: 4,
    [zodiacSign.cancer]: 1,
    [zodiacSign.leo]: 3,
    [zodiacSign.virgo]: 2,
    [zodiacSign.libra]: 4,
    [zodiacSign.scorpio]: 4,
    [zodiacSign.sagittarius]: 5,
    [zodiacSign.capricorn]: 2,
    [zodiacSign.aquarius]: 3,
    [zodiacSign.pisces]: 1,
  },
  [zodiacSign.virgo]: {
    [zodiacSign.aries]: 1,
    [zodiacSign.taurus]: 5,
    [zodiacSign.gemini]: 1,
    [zodiacSign.cancer]: 4,
    [zodiacSign.leo]: 2,
    [zodiacSign.virgo]: 3,
    [zodiacSign.libra]: 2,
    [zodiacSign.scorpio]: 4,
    [zodiacSign.sagittarius]: 4,
    [zodiacSign.capricorn]: 5,
    [zodiacSign.aquarius]: 2,
    [zodiacSign.pisces]: 3,
  },
  [zodiacSign.libra]: {
    [zodiacSign.aries]: 3,
    [zodiacSign.taurus]: 2,
    [zodiacSign.gemini]: 5,
    [zodiacSign.cancer]: 4,
    [zodiacSign.leo]: 4,
    [zodiacSign.virgo]: 1,
    [zodiacSign.libra]: 3,
    [zodiacSign.scorpio]: 2,
    [zodiacSign.sagittarius]: 4,
    [zodiacSign.capricorn]: 5,
    [zodiacSign.aquarius]: 2,
    [zodiacSign.pisces]: 5,
  },
  [zodiacSign.scorpio]: {
    [zodiacSign.aries]: 2,
    [zodiacSign.taurus]: 3,
    [zodiacSign.gemini]: 2,
    [zodiacSign.cancer]: 5,
    [zodiacSign.leo]: 2,
    [zodiacSign.virgo]: 4,
    [zodiacSign.libra]: 2,
    [zodiacSign.scorpio]: 3,
    [zodiacSign.sagittarius]: 1,
    [zodiacSign.capricorn]: 4,
    [zodiacSign.aquarius]: 1,
    [zodiacSign.pisces]: 5,
  },
  [zodiacSign.sagittarius]: {
    [zodiacSign.aries]: 5,
    [zodiacSign.taurus]: 1,
    [zodiacSign.gemini]: 3,
    [zodiacSign.cancer]: 1,
    [zodiacSign.leo]: 5,
    [zodiacSign.virgo]: 1,
    [zodiacSign.libra]: 4,
    [zodiacSign.scorpio]: 1,
    [zodiacSign.sagittarius]: 3,
    [zodiacSign.capricorn]: 1,
    [zodiacSign.aquarius]: 4,
    [zodiacSign.pisces]: 1,
  },
  [zodiacSign.capricorn]: {
    [zodiacSign.aries]: 2,
    [zodiacSign.taurus]: 5,
    [zodiacSign.gemini]: 1,
    [zodiacSign.cancer]: 3,
    [zodiacSign.leo]: 1,
    [zodiacSign.virgo]: 5,
    [zodiacSign.libra]: 2,
    [zodiacSign.scorpio]: 4,
    [zodiacSign.sagittarius]: 1,
    [zodiacSign.capricorn]: 3,
    [zodiacSign.aquarius]: 1,
    [zodiacSign.pisces]: 4,
  },
  [zodiacSign.aquarius]: {
    [zodiacSign.aries]: 4,
    [zodiacSign.taurus]: 1,
    [zodiacSign.gemini]: 5,
    [zodiacSign.cancer]: 1,
    [zodiacSign.leo]: 3,
    [zodiacSign.virgo]: 2,
    [zodiacSign.libra]: 5,
    [zodiacSign.scorpio]: 1,
    [zodiacSign.sagittarius]: 4,
    [zodiacSign.capricorn]: 1,
    [zodiacSign.aquarius]: 1,
    [zodiacSign.pisces]: 1,
  },
  [zodiacSign.pisces]: {
    [zodiacSign.aries]: 2,
    [zodiacSign.taurus]: 4,
    [zodiacSign.gemini]: 1,
    [zodiacSign.cancer]: 5,
    [zodiacSign.leo]: 1,
    [zodiacSign.virgo]: 3,
    [zodiacSign.libra]: 2,
    [zodiacSign.scorpio]: 5,
    [zodiacSign.sagittarius]: 1,
    [zodiacSign.capricorn]: 4,
    [zodiacSign.aquarius]: 1,
    [zodiacSign.pisces]: 3,
  },
};
