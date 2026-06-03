# Claude Hub lesson workflow

Весь список уроков теперь лежит в `lessons-data.js`.

Что менять для нового открытого урока:

1. Найти нужный объект `day-XX` в `lessons-data.js`.
2. Поставить `status: 'open'`.
3. Заполнить:
   - `title`
   - `summary`
   - `homework`
   - `portalChecklist`
   - `lessonPage.heroTitle`
   - `lessonPage.heroIntro`
   - `lessonPage.loomUrl`
   - `lessonPage.loomEmbedUrl`
   - `lessonPage.guideUrl` при наличии
   - `lessonUrl`
4. Если нужен отдельный текстовый гайд, сделать файл `lesson-XX-guide.html` и дать на него ссылку в `guideUrl`.

Шаблон ссылки на страницу урока:

- `./lesson.html?id=day-02`
- `./lesson.html?id=day-03`

Портал сам подтянет данные из `lessons-data.js`, поэтому больше не нужно руками править массив внутри `portal.html`.
