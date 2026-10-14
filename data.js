/* ─── Новости ─── */
const news = [
  {
    date: "12 мая 2026",
    tag: "кино",
    title: "Вышел трейлер нового сериала о Гарри Поттере",
    text: "Warner Bros. показала первый тизер — премьера намечена на конец года."
  },
  {
    date: "10 мая 2026",
    tag: "книги",
    title: "Найдена неизданная повесть Толкина",
    text: "Черновик обнаружили в архиве Оксфорда. Издательство обещает публикацию."
  },
  {
    date: "8 мая 2026",
    tag: "кино",
    title: "«Дюна 3» получила дату премьеры",
    text: "Продолжение выйдет в 2027 году, съёмки начнутся осенью."
  },
  {
    date: "5 мая 2026",
    tag: "книги",
    title: "Нобелевская премия по литературе — объявлен шорт-лист",
    text: "В список вошли авторы из Японии, Нигерии и Норвегии."
  }
];

/* ─── Рекомендации ─── */
const recommendations = [
  /* 🎥 ФИЛЬМЫ */
  {
    title: "Душа", type: "movie",
    tags: { energy: "tired", mood: "calm", goal: "distract", length: "short", company: "alone" },
    desc: "Тёплый мультфильм о смысле жизни и маленьких радостях."
  },
  {
    title: "Вперёд", type: "movie",
    tags: { energy: "tired", mood: "happy", goal: "distract", length: "short", company: "together" },
    desc: "Два брата-эльфа отправляются в путь, чтобы вернуть магию."
  },
  {
    title: "Гарри Поттер и философский камень", type: "movie",
    tags: { energy: "energetic", mood: "happy", goal: "adventure", length: "long", company: "together" },
    desc: "Начало магической саги — мальчик узнаёт, что он волшебник."
  },
  {
    title: "Властелин колец: Братство Кольца", type: "movie",
    tags: { energy: "energetic", mood: "happy", goal: "adventure", length: "long", company: "together" },
    desc: "Эпическое путешествие через Средиземье, чтобы уничтожить Кольцо."
  },
  {
    title: "До встречи с тобой", type: "movie",
    tags: { energy: "normal", mood: "sad", goal: "think", length: "long", company: "alone" },
    desc: "Светлая и грустная история о выборе и любви."
  },
  {
    title: "1+1", type: "movie",
    tags: { energy: "normal", mood: "happy", goal: "think", length: "long", company: "together" },
    desc: "История дружбы богатого аристократа и его помощника. Смешно и по-доброму."
  },
  {
    title: "Побег из Шоушенка", type: "movie",
    tags: { energy: "normal", mood: "sad", goal: "think", length: "long", company: "alone" },
    desc: "Классика о надежде и свободе. Один из лучших фильмов всех времён."
  },
  {
    title: "Форрест Гамп", type: "movie",
    tags: { energy: "normal", mood: "happy", goal: "think", length: "long", company: "alone" },
    desc: "Жизнь простого человека на фоне истории США. Трогательно и мудро."
  },
  {
    title: "Интерстеллар", type: "movie",
    tags: { energy: "energetic", mood: "anxious", goal: "think", length: "long", company: "alone" },
    desc: "Космическая одиссея о любви, времени и выживании человечества."
  },
  {
    title: "Начало", type: "movie",
    tags: { energy: "energetic", mood: "anxious", goal: "think", length: "long", company: "alone" },
    desc: "Фильм про сны внутри снов. Сложный, но захватывающий."
  },
  {
    title: "Тайна Коко", type: "movie",
    tags: { energy: "tired", mood: "sad", goal: "distract", length: "short", company: "together" },
    desc: "Мальчик попадает в мир мёртвых и находит свою семью. Очень трогательно."
  },
  {
    title: "Как приручить дракона", type: "movie",
    tags: { energy: "normal", mood: "happy", goal: "adventure", length: "short", company: "together" },
    desc: "Мальчик и дракон становятся друзьями. Приключения и добро."
  },
  {
    title: "Мстители", type: "movie",
    tags: { energy: "energetic", mood: "happy", goal: "adventure", length: "long", company: "together" },
    desc: "Супергерои объединяются, чтобы спасти мир. Зрелищно и весело."
  },
  {
    title: "Брат", type: "movie",
    tags: { energy: "normal", mood: "sad", goal: "think", length: "long", company: "alone" },
    desc: "Культовый фильм Балабанова о поколении 90-х."
  },
  {
    title: "Такси", type: "movie",
    tags: { energy: "energetic", mood: "happy", goal: "distract", length: "short", company: "together" },
    desc: "Безумные гонки по Марселю и море юмора от Люка Бессона."
  },
  {
    title: "Отель Гранд Будапешт", type: "movie",
    tags: { energy: "normal", mood: "happy", goal: "distract", length: "short", company: "together" },
    desc: "Визуально идеальная комедия Уэса Андерсона. Как картинка в движении."
  },
  {
    title: "Ла-Ла Ленд", type: "movie",
    tags: { energy: "normal", mood: "sad", goal: "think", length: "long", company: "alone" },
    desc: "Мюзикл о мечтах, любви и том, что не всегда всё сбывается."
  },
  {
    title: "Амели", type: "movie",
    tags: { energy: "tired", mood: "calm", goal: "distract", length: "long", company: "alone" },
    desc: "Парижская сказка о девочке, которая тайно делает людей счастливыми."
  },
  {
    title: "Парк юрского периода", type: "movie",
    tags: { energy: "energetic", mood: "anxious", goal: "adventure", length: "long", company: "together" },
    desc: "Динозавры вырываются на свободу. Классика приключений Спилберга."
  },
  {
    title: "Один дома", type: "movie",
    tags: { energy: "tired", mood: "happy", goal: "distract", length: "short", company: "together" },
    desc: "Мальчик остаётся один дома и защищает его от грабителей. Новогодняя классика."
  },
  {
    title: "Трудности перевода", type: "movie",
    tags: { energy: "tired", mood: "sad", goal: "think", length: "long", company: "alone" },
    desc: "Двое одиноких людей встречаются в Токио. Тихое и красивое кино."
  },

  /* 📚 КНИГИ */
  {
    title: "Хоббит", type: "book",
    tags: { energy: "energetic", mood: "happy", goal: "adventure", length: "long", company: "alone" },
    desc: "Бильбо Бэггинс отправляется в путешествие с гномами за сокровищами."
  },
  {
    title: "Гарри Поттер и философский камень", type: "book",
    tags: { energy: "energetic", mood: "happy", goal: "adventure", length: "long", company: "together" },
    desc: "Первая книга о мальчике, который выжил. Магия начинается здесь."
  },
  {
    title: "Поллианна", type: "book",
    tags: { energy: "normal", mood: "sad", goal: "distract", length: "long", company: "alone" },
    desc: "Девочка, которая учит радоваться всему. Поднимает настроение."
  },
  {
    title: "Тоня Глиммердал", type: "book",
    tags: { energy: "tired", mood: "happy", goal: "distract", length: "short", company: "alone" },
    desc: "Весёлая и добрая история о девочке из Норвегии."
  },
  {
    title: "Мальчик в полосатой пижаме", type: "book",
    tags: { energy: "normal", mood: "sad", goal: "think", length: "short", company: "alone" },
    desc: "Короткая, но очень сильная книга о дружбе и войне."
  },
  {
    title: "Три товарища", type: "book",
    tags: { energy: "normal", mood: "sad", goal: "think", length: "long", company: "alone" },
    desc: "Роман Ремарка о дружбе и любви в тяжёлые времена."
  },
  {
    title: "Маленький принц", type: "book",
    tags: { energy: "tired", mood: "calm", goal: "think", length: "short", company: "alone" },
    desc: "Философская сказка о главном. Читается за вечер."
  },
  {
    title: "Дюна", type: "book",
    tags: { energy: "energetic", mood: "anxious", goal: "adventure", length: "long", company: "alone" },
    desc: "Фантастическая сага о пустынной планете и судьбе Пола Атрейдеса."
  },
  {
    title: "1984", type: "book",
    tags: { energy: "normal", mood: "anxious", goal: "think", length: "long", company: "alone" },
    desc: "Роман-антиутопия Оруэлла о мире тотального контроля."
  },
  {
    title: "Метро 2033", type: "book",
    tags: { energy: "energetic", mood: "anxious", goal: "adventure", length: "long", company: "alone" },
    desc: "Постапокалипсис в московском метро. Напряжённо и атмосферно."
  },
  {
    title: "Дневник слабака", type: "book",
    tags: { energy: "tired", mood: "happy", goal: "distract", length: "short", company: "alone" },
    desc: "Смешные записки школьника о его «нелёгкой» жизни."
  },
  {
    title: "Убийство в «Восточном экспрессе»", type: "book",
    tags: { energy: "normal", mood: "anxious", goal: "distract", length: "short", company: "alone" },
    desc: "Классический детектив Агаты Кристи с Эркюлем Пуаро."
  }
];
/* ─── История кино ─── */
const history = [
  {
    year: "1895",
    title: "Рождение кино",
    text: "Братья Люмьер показали первый фильм «Прибытие поезда» в Париже. Кино стало публичным развлечением."
  },
  {
    year: "1927",
    title: "Звуковое кино",
    text: "Вышел «Певец джаза» — первый фильм со синхронным звуком. Немое кино уходит в прошлое."
  },
  {
    year: "1930-е",
    title: "Золотой век Голливуда",
    text: "Цветное кино, мюзиклы, «Унесённые ветром». Студии становятся фабриками грёз."
  },
  {
    year: "1950-е",
    title: "Новые волны",
    text: "Французская новая волна, итальянский неореализм. Режиссёры становятся авторами."
  },
  {
    year: "1977",
    title: "Эра блокбастеров",
    text: "«Звёздные войны» и «Челюсти» меняют индустрию. Кино становится глобальным событием."
  },
  {
    year: "1990-е",
    title: "Цифровая революция",
    text: "«Парк юрского периода» и «Матрица» показывают силу компьютерной графики."
  },
  {
    year: "2009",
    title: "Эра стриминга и 3D",
    text: "«Аватар» задаёт стандарт 3D. Netflix и онлайн-платформы меняют способ просмотра."
  },
  {
    year: "2020-е",
    title: "Кино сегодня",
    text: "Стриминг, нейросети, короткие форматы. Кино продолжает меняться, но остаётся искусством."
  }
];
