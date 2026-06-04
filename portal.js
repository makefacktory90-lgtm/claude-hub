import { PORTAL_PASSWORD, getOpenLesson, lessons } from './lessons-data.js';

const app = document.getElementById('app');
const gate = document.getElementById('gate');
const gateForm = document.getElementById('gate-form');
const gateError = document.getElementById('gate-error');
const passwordInput = document.getElementById('password');
const lessonsGrid = document.getElementById('lessons-grid');
const lockButton = document.getElementById('lock-button');

const currentLessonTitle = document.getElementById('current-lesson-title');
const currentLessonSummary = document.getElementById('current-lesson-summary');
const currentLessonChecklist = document.getElementById('current-lesson-checklist');
const currentLessonAnchor = document.getElementById('current-lesson-anchor');
const currentOpenLesson = getOpenLesson();

function unlockPortal() {
  gate.classList.add('hidden');
  app.classList.remove('opacity-0', 'pointer-events-none');
  sessionStorage.setItem('claudeHubPortalUnlocked', 'true');
}

function lockPortal() {
  sessionStorage.removeItem('claudeHubPortalUnlocked');
  gate.classList.remove('hidden');
  app.classList.add('opacity-0', 'pointer-events-none');
  passwordInput.value = '';
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderCurrentLesson(lesson) {
  currentLessonTitle.textContent = `${lesson.date} — ${lesson.title}`;
  currentLessonSummary.textContent = lesson.summary;
  currentLessonAnchor.href = `#${lesson.id}`;

  const checklist = lesson.portalChecklist ?? [];
  currentLessonChecklist.innerHTML = checklist
    .map(
      (item, index) =>
        `<li class="flex gap-3"><span class="text-brand">${String(index + 1).padStart(2, '0')}</span><span>${escapeHtml(item)}</span></li>`
    )
    .join('');
}

function renderLesson(lesson) {
  const isOpen = lesson.status === 'open';
  const isCurrent = lesson.id === currentOpenLesson.id;
  const lessonUrl = lesson.lessonUrl ?? `./lesson.html?id=${lesson.id}`;
  const statusClass = isOpen
    ? isCurrent
      ? 'text-bgMain border-brand bg-brand'
      : 'text-brand border-brand/30 bg-brand/10'
    : 'text-zinc-500 border-zinc-800 bg-zinc-900/60';
  const cardClass = isOpen
    ? isCurrent
      ? 'lesson-card ring-1 ring-brand/40'
      : 'lesson-card'
    : 'lesson-card locked opacity-85';

  const videoBlock = isOpen
    ? `
      <div class="video-frame rounded-2xl border border-zinc-900 flex items-center justify-center p-6 mb-5">
        ${lessonUrl
          ? `<div class="flex flex-col items-center gap-3">
              <a href="${lessonUrl}" class="inline-flex rounded-full bg-brand px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.24em] text-bgMain hover:opacity-95 transition">Открыть урок</a>
            </div>`
          : `<div class="text-center">
              <div class="font-mono text-[11px] uppercase tracking-[0.24em] text-brand/80 mb-3">screen studio</div>
              <div class="text-white font-semibold mb-2">Скринкаст появится здесь</div>
            </div>`
        }
      </div>
    `
    : `
      <div class="rounded-2xl border border-zinc-900 bg-zinc-950/60 px-4 py-3 mb-5 font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
        Урок пока закрыт
      </div>
    `;

  return `
    <article id="${lesson.id}" class="${cardClass} relative rounded-[24px] bg-zinc-950/70 p-6">
      <div class="flex items-start justify-between gap-4 mb-5">
        <div>
          <div class="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500 mb-2">${lesson.date} · ${lesson.weekday}</div>
          <h3 class="text-xl font-black uppercase tracking-tight text-white leading-snug">${lesson.title}</h3>
        </div>
        <div class="shrink-0 rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] ${statusClass}">
          ${isCurrent ? 'сегодня' : isOpen ? 'открыт' : 'скоро'}
        </div>
      </div>
      <p class="text-zinc-400 leading-relaxed mb-5">${lesson.summary}</p>
      ${videoBlock}
      <div class="grid gap-4">
        <div class="rounded-2xl border border-zinc-900 bg-bgCard/30 p-4">
          <div class="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500 mb-2">Домашка</div>
          <div class="text-zinc-300">${lesson.homework}</div>
        </div>
      </div>
    </article>
  `;
}

gateForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (passwordInput.value === PORTAL_PASSWORD) {
    gateError.classList.add('hidden');
    unlockPortal();
    return;
  }

  gateError.classList.remove('hidden');
});

lockButton.addEventListener('click', lockPortal);

renderCurrentLesson(currentOpenLesson);
lessonsGrid.innerHTML = lessons.map(renderLesson).join('');

if (sessionStorage.getItem('claudeHubPortalUnlocked') === 'true') {
  unlockPortal();
}
