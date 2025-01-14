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
    id: zodiacSign.aquarius,
    label: 'Бандеролій',
    image: aquarius,
    imageColored: aquariusColored,
    description: `
		Водолії - особистості з найбільшим серцем та душею, але якщо хочете їх обдурити, це буде ваша остання ідея в житті. 
		<br>
		У Водоліїв чудово розвинена інтуіція та вміння бачити людей. Ви тільки ввійшли, а вони вже знають, які у вас дитячі травми і що ви за людина. 
		<br>
		“Не май сто друзів, а май одного Водолія”
		`,
  },
  {
    id: zodiacSign.aries,
    label: 'Бандеровен',
    image: aries,
    imageColored: ariesColored,
    description: `
		Овни - стихія полумʼя. По життю в них теж все палає. Не знають страху, відмови, поразки. Якщо щось задумали - хрін перепреш. 
		<br>
		Якщо Овен неправий, він правий. Якщо ви не погоджуєтеся з Овном,  погодитесь. Якщо хочете додати пікантності в своє життя - просто скажіть Овну, як йому жити. 
		<br>
		“Останнє слово завжди за нами”	
		`,
  },
  {
    id: zodiacSign.cancer,
    label: 'Бандерак',
    image: cancer,
    imageColored: cancerColored,
    description: `
		Раки - найчуттєвіші та найбільш емоційні люди, але вперті, тому ніколи з цим не погодяться. 
		<br>
		Drama Queen усіх знаків зодіаку. Але третє око Раків має найгострішу інтуїцію. Завдяки їхньому покерфейсу, ви ніколи не здогадаєтеся, що у них в голові: чи то поле з метеликами, чи то план нападу по чотирьох позиціях. 
		<br>
		“Маєте критику? Залиште її при собі”
		`,
  },
  {
    id: zodiacSign.capricorn,
    label: 'Бандероріг',
    image: capricorn,
    imageColored: capricornColored,
    description: `
		Козероги - цілеспрямовані, сильні особистості, які досягають цілей так легко, наче лускають насіннячко. 
		<br>	
		Якщо ви плануєте подорож із Козерогами, будьте готовими до детального аналізу кожного кроку, після якого перехочеться їхати. Думки в голові рухаються зі швидкістю машин у Форсажі.
		<br>
		“Сльози у Козерогів - це 8-е диво світу”
		`,
  },
  {
    id: zodiacSign.gemini,
    label: 'Бандерюки',
    image: gemini,
    imageColored: geminiColored,
    description: `
		Близнюки - авантюристи в стилі “пан або пропав”. Відпочинок - це пробігти 10 км,  попорати худобу і зробити якусь диверсію на расєї. 
		<br>
		Оптимісти, рішучі та впевнені в собі, завжди знайдуть пригоди на свою 5-ту точку. Настрій приблизно як березень:  сніг, дощ, град, сонце, цунамі. 
		<br>
		“Хто не ризикує, той не ми, бо ми завжди пʼємо шампанське”. 
		`,
  },
  {
    id: zodiacSign.leo,
    label: 'Бандеролев',
    image: leo,
    imageColored: leoColored,
    description: `
		Леви - найбільш яскраві та харизматичні особистості. Справжні королі, завжди досягають свого, щедрі, великодушні, але тільки з обраними.
		<br>
		Якщо б за гордість давали премію, статуетка була б у формі лева. 
		Леви люблять жартувати над собою, але вам над ними жартувати не радимо. 
		<br>
		“Є тільки дві точки зору - моя та хибна”
		`,
  },
  {
    id: zodiacSign.libra,
    label: 'Бандерези',
    image: libra,
    imageColored: libraColored,
    description: `
		Терези - з дитинства мають якийсь особливий шарм та привабливість, за що їх неможливо не любити. 
		<br>
		Живуть у темпі “5 пʼятниць на тиждень”. 5 настроїв на хвилину. 5 особистостей на день. Ніколи не знаєш, чого чекати від Терезів. Будь-яке рішення приймається 2-3 тижні. А потім ще 20 разів перевіряється.
		<br>
		“Сам не сплю і вам не дам”
		`,
  },
  {
    id: zodiacSign.pisces,
    label: 'Бандериби',
    image: pisces,
    imageColored: piscesColored,
    description: `
		Риби - це ті самі люди, до яких ви приходите ввечері з пляшечкою вина і душевними ранами. 
		<br>
		Гнучкі особистості, які найшвидше адаптуються до будь-яких змін. Треба переїхати? Піду спакую валізку. Треба вночі виїхати на допомогу другу? Піду візьму лопату. Відчуття справедливості гостріше за самурайський меч. 
		<br>
		“У вир з головою”
		`,
  },
  {
    id: zodiacSign.sagittarius,
    label: 'Бандерілець',
    image: sagittarius,
    imageColored: sagittariusColored,
    description: `
		Стрільці - найбільш енергійні та позитивні особистості, у яких хочеться знайти кнопку “Викл”, але її немає.
		<br>
		Життя в ритмі “щось робити, кудись їхати”. Будь-яку ситуацію можуть обернути на свою користь та на хвилю оптимізму. Вкрали гроші - можливість заробити нові. Розбив келих - на щастя. 
		<br>
		“Не будь як всі, будь original”
		`,
  },
  {
    id: zodiacSign.scorpio,
    label: 'Бандерпіон',
    image: scorpio,
    imageColored: scorpioColored,
    description: `
		Скорпіони - незалежні, самостійні, сталеві особистості, але з чуйною душею і добрим серцем, які ви ніколи не побачите. 
		<br>
		Дуже складна і глибока натура. Якщо Скорпіон обрав вас у друзі/партнери, то можете почуватися як “Оскар” на поличці у ДіКапріо. Якщо ваша думка йде всупереч їхній, то ви її зміните. 
		<br>
		“Я не злопамʼятний, але все памʼятаю”
		`,
  },
  {
    id: zodiacSign.taurus,
    label: 'Бандерець',
    image: taurus,
    imageColored: taurusColored,
    description: `
		Тельці - рогаті небожителі. Перш ніж прийняти рішення, Телець обдумає все разів зо триста. А потім все одно буде лише на 25% впевненим, що діє правильно. 
		<br>
		Стабільність, порядок, дисципліна для них - база. Якщо ви запрошуєте Тельця на побачення і не кажете куди, +- до 19:00 він зійде з розуму. 
		<br>
		“Мої принципи непохитні”
		`,
  },
  {
    id: zodiacSign.virgo,
    label: 'Бандеродіва',
    image: virgo,
    imageColored: virgoColored,
    description: `
		Діви - фанатичні перфекціоністи, які повільно, але впевнено досягають мети. 
		<br>
		Коли Діви прасують одяг, то прасують і шкарпетки, і панчохи, і шнурки від найків. Якщо, не приведи боже, ви дасте Діві чорну ручку із зеленим ковпачком, отримає панічну атаку. 
		<br>
		“Я що, багато прошу? Просто веди себе ідеально 24/7!”
		`,
  },
];

export const screens = {
  start: 'start',
  choose: 'choose',
  main: 'main',
};
