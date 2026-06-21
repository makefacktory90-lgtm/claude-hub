import { getLessonById } from './lessons-data.js';

const titleNode = document.getElementById('lesson-title');
const labelNode = document.getElementById('lesson-label');
const introNode = document.getElementById('lesson-intro');
const primaryAction = document.getElementById('lesson-primary-action');
const secondaryAction = document.getElementById('lesson-secondary-action');
const videoContainer = document.getElementById('lesson-video');
const afterWatchList = document.getElementById('lesson-after-watch');
const afterWatchCard = document.getElementById('lesson-after-watch-card');
const homeworkNode = document.getElementById('lesson-homework');
const homeworkCard = document.getElementById('lesson-homework-card');
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
    primaryAction.textContent = 'Открыть видео';
    primaryAction.classList.remove('hidden');
  } else {
    primaryAction.classList.add('hidden');
  }

  const secondaryUrl = lessonPage.presentationUrl ?? lessonPage.guideUrl;
  const secondaryLabel = lessonPage.presentationUrl
    ? 'Открыть презентацию'
    : 'Открыть гайд';

  if (secondaryUrl) {
    secondaryAction.href = secondaryUrl;
    secondaryAction.textContent = secondaryLabel;
    secondaryAction.classList.remove('hidden');
  } else {
    secondaryAction.classList.add('hidden');
  }
}

function renderVideo(lessonPage) {
  const shareUrl = lessonPage.loomUrl ?? '';

  if (shareUrl.includes('screen.studio')) {
    videoContainer.innerHTML = `
      <div class="aspect-video flex flex-col items-center justify-center gap-4 p-8 text-center text-zinc-400 bg-zinc-950/70">
        <div class="text-xl font-semibold text-white">Открыть видеоурок</div>
        <a
          href="${shareUrl}"
          target="_blank"
          rel="noreferrer"
          class="inline-flex rounded-full bg-brand px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-bgMain hover:opacity-95 transition"
        >
          Открыть видео
        </a>
      </div>
    `;
    return;
  }

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
  const homeworkText = (lesson.homework ?? '').trim();
  const afterWatchItems = lessonPage.afterWatch ?? [];
  document.title = `Claude Hub — ${lesson.title}`;

  labelNode.textContent = `${lesson.date} · ${lesson.id.replace('day-', 'урок ')}`;
  titleNode.textContent = lessonPage.heroTitle ?? lesson.title;
  introNode.textContent = lessonPage.heroIntro ?? lesson.summary;
  homeworkNode.textContent = homeworkText;
  homeworkCard.classList.toggle('hidden', !homeworkText);

  afterWatchList.innerHTML = afterWatchItems
    .map((item) => `<li>${item}</li>`)
    .join('');
  afterWatchCard.classList.toggle('hidden', afterWatchItems.length === 0);

  renderLinks(lessonPage);
  renderVideo(lessonPage);

  lockedState.classList.add('hidden');
  openState.classList.remove('hidden');
}

function renderLockedLesson(lesson) {
  const homeworkText = (lesson.homework ?? '').trim();
  document.title = `Claude Hub — ${lesson.title}`;
  labelNode.textContent = `${lesson.date} · ${lesson.id.replace('day-', 'урок ')}`;
  titleNode.textContent = lesson.title;
  introNode.textContent = lesson.summary;
  afterWatchList.innerHTML = '<li>Материалы появятся после открытия урока.</li>';
  afterWatchCard.classList.remove('hidden');
  homeworkNode.textContent = homeworkText;
  homeworkCard.classList.toggle('hidden', !homeworkText);
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
  afterWatchCard.classList.remove('hidden');
  homeworkNode.textContent = 'Сначала найти нормальную ссылку.';
  homeworkCard.classList.remove('hidden');
  lockedState.classList.remove('hidden');
  openState.classList.add('hidden');
} else if (lesson.status !== 'open') {
  renderLockedLesson(lesson);
} else {
  renderOpenLesson(lesson);
}
