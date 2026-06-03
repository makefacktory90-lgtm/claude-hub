export const PORTAL_PASSWORD = 'claude-rabota-0106-2106';

export const lessons = [
  {
    id: 'day-01',
    date: '1 июня',
    weekday: 'понедельник',
    title: 'Старт: браузер, app, extension, permissions',
    status: 'open',
    summary:
      'Ставим desktop app и расширение для Chrome, выдаём доступы и смотрим, как в Claude устроены chat, Cowork и Claude Code.',
    homework:
      'Установить app и extension, зайти в аккаунт, выдать разрешения и проверить, что Claude умеет читать и анализировать страницу в браузере.',
    lessonUrl: './lesson.html?id=day-01',
    portalChecklist: [
      'Claude открывается в браузере',
      'Desktop app установлен',
      'Расширение установлено',
      'Нужные permissions выданы'
    ],
    lessonPage: {
      heroTitle: 'Установка Claude и расширения',
      heroIntro:
        'Ставим desktop app и расширение для Chrome, выдаём доступы и смотрим, как Claude работает не только как чат, но и как инструмент для анализа страниц.',
      loomUrl: 'https://www.loom.com/share/204bb78ec6494d77a3c19fe1ccb963b4',
      loomEmbedUrl:
        'https://www.loom.com/embed/204bb78ec6494d77a3c19fe1ccb963b4?sid=7cfa4d98-0cb0-4998-b8cc-9fced8eb81c7',
      guideUrl: './lesson-01-guide.html',
      afterWatch: [
        'Установить desktop app Claude.',
        'Установить расширение для Chrome.',
        'Зайти в аккаунт в приложении и расширении.',
        'Выдать Claude доступ к странице.',
        'Проверить, что Claude умеет читать и анализировать открытый сайт.'
      ]
    }
  },
  {
    id: 'day-02',
    date: '2 июня',
    weekday: 'вторник',
    title: 'Какие задачи нести в chat, а какие в Cowork',
    status: 'open',
    summary:
      'Сегодня говорим про Claude Cowork, скиллы, коннекторы и плагины — и главное, как это все использовать не ради посмотреть, а в реальной работе и бизнес-задачах.',
    homework:
      'Найти один плагин или скилл, который может быть полезен именно вам; поставить или подключить; потестить на живой задаче; зафиксировать, что получилось.',
    lessonUrl: './lesson.html?id=day-02',
    portalChecklist: [
      'Понять разницу между Cowork, скиллами, коннекторами и плагинами',
      'Найти один инструмент под свою реальную задачу',
      'Подключить или поставить его',
      'Проверить на живой рабочей задаче'
    ],
    lessonPage: {
      heroTitle: 'Claude Cowork, скиллы, коннекторы и плагины',
      heroIntro:
        'Разбираем не витрину возможностей, а практику: что из этого реально помогает в работе, где подключать Cowork, как искать полезные скиллы и когда плагин или коннектор экономит время.',
      loomUrl: 'https://screen.studio/share/dMt41UhB',
      loomEmbedUrl: 'https://screen.studio/embed/dMt41UhB',
      afterWatch: [
        'Понять, когда достаточно обычного chat, а когда нужен Cowork.',
        'Посмотреть, какие скиллы и плагины подходят под ваши задачи.',
        'Найти один инструмент, который можно внедрить сразу.',
        'Подключить его и прогнать на реальной рабочей задаче.'
      ]
    }
  },
  {
    id: 'day-03',
    date: '3 июня',
    weekday: 'среда',
    title: 'Плагины, расширения и базовые усилители',
    status: 'open',
    summary:
      'Отвечаем на вопросы и еще раз спокойно разбираем расширение Claude, подключение Chrome к desktop app, голосовые инструменты и анализ сайта прямо внутри приложения.',
    homework:
      'Решить мини-задачу по работе через desktop app Claude или через расширение Claude.',
    lessonUrl: './lesson.html?id=day-03',
    portalChecklist: [
      'Еще раз разобраться, как работает расширение Claude',
      'Понять, где расширение подключается и как его не терять',
      'Посмотреть голосовые инструменты вместо ручного набора',
      'Проверить связку Chrome с desktop app и анализ сайта в приложении'
    ],
    lessonPage: {
      heroTitle: 'Ответы на вопросы и еще раз про расширение Claude',
      heroIntro:
        'В этом уроке добираем то, на чем у многих обычно начинается путаница: как работает расширение Claude, где оно подключается, как не терять связку с браузером и как использовать голосовые инструменты вместо ручного ввода.',
      loomUrl: 'https://screen.studio/share/iRhQHy6N',
      loomEmbedUrl: 'https://screen.studio/embed/iRhQHy6N',
      afterWatch: [
        'Еще раз спокойно разобрать расширение Claude.',
        'Понять, как подключить Google Chrome к desktop app.',
        'Посмотреть, как анализировать сайт прямо внутри desktop app Claude.',
        'Попробовать голосовой сценарий вместо ручного набора текста.'
      ]
    }
  },
  {
    id: 'day-04',
    date: '4 июня',
    weekday: 'четверг',
    title: 'Connectors: подключаем Claude к работе',
    status: 'locked',
    summary:
      'Подключаем внешние источники и смотрим, как Claude перестаёт быть изолированным окном.',
    homework: 'Откроется по ходу.'
  },
  {
    id: 'day-05',
    date: '5 июня',
    weekday: 'пятница',
    title: 'Бизнес-задачи: как Claude помогает в реальной работе',
    status: 'locked',
    summary:
      'Маркетинг, продажи, операционка, анализ, документы: смотрим, какие задачи сюда нести и как их раскладывать.',
    homework: 'Откроется по ходу.'
  },
  {
    id: 'day-06',
    date: '6 июня',
    weekday: 'суббота',
    title: 'Claude Code: первый рабочий заход',
    status: 'locked',
    summary:
      'Спокойно заходим в Claude Code и смотрим, где он полезен даже человеку не из разработки.',
    homework: 'Откроется по ходу.'
  },
  {
    id: 'day-07',
    date: '8 июня',
    weekday: 'понедельник',
    title: '8 июня',
    status: 'locked',
    summary: 'Откроется по ходу.',
    homework: 'Откроется по ходу.'
  },
  {
    id: 'day-08',
    date: '9 июня',
    weekday: 'вторник',
    title: '9 июня',
    status: 'locked',
    summary: 'Откроется по ходу.',
    homework: 'Откроется по ходу.'
  },
  {
    id: 'day-09',
    date: '10 июня',
    weekday: 'среда',
    title: '10 июня',
    status: 'locked',
    summary: 'Откроется по ходу.',
    homework: 'Откроется по ходу.'
  },
  {
    id: 'day-10',
    date: '11 июня',
    weekday: 'четверг',
    title: '11 июня',
    status: 'locked',
    summary: 'Откроется по ходу.',
    homework: 'Откроется по ходу.'
  },
  {
    id: 'day-11',
    date: '12 июня',
    weekday: 'пятница',
    title: '12 июня',
    status: 'locked',
    summary: 'Откроется по ходу.',
    homework: 'Откроется по ходу.'
  },
  {
    id: 'day-12',
    date: '13 июня',
    weekday: 'суббота',
    title: '13 июня',
    status: 'locked',
    summary: 'Откроется по ходу.',
    homework: 'Откроется по ходу.'
  },
  {
    id: 'day-13',
    date: '15 июня',
    weekday: 'понедельник',
    title: '15 июня',
    status: 'locked',
    summary: 'Откроется по ходу.',
    homework: 'Откроется по ходу.'
  },
  {
    id: 'day-14',
    date: '16 июня',
    weekday: 'вторник',
    title: '16 июня',
    status: 'locked',
    summary: 'Откроется по ходу.',
    homework: 'Откроется по ходу.'
  },
  {
    id: 'day-15',
    date: '17 июня',
    weekday: 'среда',
    title: '17 июня',
    status: 'locked',
    summary: 'Откроется по ходу.',
    homework: 'Откроется по ходу.'
  },
  {
    id: 'day-16',
    date: '18 июня',
    weekday: 'четверг',
    title: '18 июня',
    status: 'locked',
    summary: 'Откроется по ходу.',
    homework: 'Откроется по ходу.'
  },
  {
    id: 'day-17',
    date: '19 июня',
    weekday: 'пятница',
    title: '19 июня',
    status: 'locked',
    summary: 'Откроется по ходу.',
    homework: 'Откроется по ходу.'
  },
  {
    id: 'day-18',
    date: '20 июня',
    weekday: 'суббота',
    title: '20 июня',
    status: 'locked',
    summary: 'Откроется по ходу.',
    homework: 'Откроется по ходу.'
  }
];

export function getOpenLesson() {
  const openLessons = lessons.filter((lesson) => lesson.status === 'open');
  return openLessons.at(-1) ?? lessons[0];
}

export function getLessonById(id) {
  return lessons.find((lesson) => lesson.id === id);
}
