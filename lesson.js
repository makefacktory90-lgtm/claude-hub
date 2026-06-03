import { getLessonById } from './lessons-data.js';

const titleNode = document.getElementById('lesson-title');
const labelNode = document.getElementById('lesson-label');
const introNode = document.getElementById('lesson-intro');
const primaryAction = document.getElementById('lesson-primary-action');
const secondaryAction = document.getElementById('lesson-secondary-action');
const videoContainer = document.getElementById('lesson-video');
const afterWatchList = document.getElementById('lesson-after-watch');
const homeworkNode = document.getElementById('lesson-homework');
const lockedState = document.getElementById('lesson-locked');
const openState = document.getElementById('lesson-open');

function getRequestedLessonId() {
  const queryId = new URLSearchParams(window.location.search).get('id');

  if (queryId) {
    return queryId;
  }

  return document.body.dataset.lessonId ?? '';
}

function renderLinks(lessonPage) {
  if (lessonPage.loomUrl) {
    primaryAction.href = lessonPage.loomUrl;
    primaryAction.classList.remove('hidden');
  } else {
    primaryAction.classList.add('hidden');
  }

  if (lessonPage.guideUrl) {
    secondaryAction.href = lessonPage.guideUrl;
    secondaryAction.classList.remove('hidden');
  } else {
    secondaryAction.classList.add('hidden');
  }
}

function renderVideo(lessonPage) {
  if (lessonPage.loomEmbedUrl) {
    videoContainer.innerHTML = `
      <iframe
        src="${lessonPage.loomEmbedUrl}"
        frameborder="0"
        allowfullscreen
        class="w-full aspect-video"
      ></iframe>
    `;
    return;
  }

  videoContainer.innerHTML = `
    <div class="aspect-video flex items-center justify-center p-8 text-center text-zinc-500">
      Видео пока не добавлено.
    </div>
  `;
}

function renderOpenLesson(lesson) {
  const lessonPage = lesson.lessonPage ?? {};
  document.title = `Claude Hub — ${lesson.title}`;

  labelNode.textContent = `${lesson.date} · ${lesson.id.replace('day-', 'урок ')}`;
  titleNode.textContent = lessonPage.heroTitle ?? lesson.title;
  introNode.textContent = lessonPage.heroIntro ?? lesson.summary;
  homeworkNode.textContent = lesson.homework;

  afterWatchList.innerHTML = (lessonPage.afterWatch ?? [])
    .map((item) => `<li>${item}</li>`)
    .join('');

  renderLinks(lessonPage);
  renderVideo(lessonPage);

  lockedState.classList.add('hidden');
  openState.classList.remove('hidden');
}

function renderLockedLesson(lesson) {
  document.title = `Claude Hub — ${lesson.title}`;
  labelNode.textContent = `${lesson.date} · ${lesson.id.replace('day-', 'урок ')}`;
  titleNode.textContent = lesson.title;
  introNode.textContent = lesson.summary;
  afterWatchList.innerHTML = '<li>Материалы появятся после открытия урока.</li>';
  homeworkNode.textContent = lesson.homework;
  lockedState.classList.remove('hidden');
  openState.classList.add('hidden');
}

const lesson = getLessonById(getRequestedLessonId());

if (!lesson) {
  document.title = 'Claude Hub — урок не найден';
  labelNode.textContent = 'Claude Hub';
  titleNode.textContent = 'Урок не найден';
  introNode.textContent = 'Похоже, ссылка ведет в пустоту. Это уже не методология, это бардак.';
  afterWatchList.innerHTML = '<li>Проверь ссылку на урок.</li>';
  homeworkNode.textContent = 'Сначала найти нормальную ссылку.';
  lockedState.classList.remove('hidden');
  openState.classList.add('hidden');
} else if (lesson.status !== 'open') {
  renderLockedLesson(lesson);
} else {
  renderOpenLesson(lesson);
}
