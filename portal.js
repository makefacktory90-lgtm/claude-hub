import { PORTAL_PASSWORD, getOpenLesson, lessons } from './lessons-data.js';

const app = document.getElementById('app');
const gate = document.getElementById('gate');
const gateForm = document.getElementById('gate-form');
const gateError = document.getElementById('gate-error');
const passwordInput = document.getElementById('password');
const lessonsGrid = document.getElementById('lessons-grid');
const lockButton = document.getElementById('lock-button');
const currentOpenLesson = getOpenLesson();

const lessonScenes = [
  { label: 'читает книжку', accent: '#f97316', glow: '#fb923c', item: 'book' },
  { label: 'слушает музыку', accent: '#ec4899', glow: '#f472b6', item: 'music' },
  { label: 'бежит на пробежку', accent: '#22c55e', glow: '#4ade80', item: 'run' },
  { label: 'ест мороженое', accent: '#60a5fa', glow: '#93c5fd', item: 'icecream' },
  { label: 'держит карточку промпта', accent: '#c084fc', glow: '#d8b4fe', item: 'prompt' },
  { label: 'собирает папки', accent: '#f59e0b', glow: '#fbbf24', item: 'folders' },
  { label: 'сидит за ноутом', accent: '#2dd4bf', glow: '#5eead4', item: 'laptop' },
  { label: 'чекает чеклист', accent: '#fb7185', glow: '#fda4af', item: 'checklist' },
  { label: 'кодит в терминале', accent: '#34d399', glow: '#6ee7b7', item: 'terminal' },
  { label: 'собирает сервис', accent: '#38bdf8', glow: '#7dd3fc', item: 'service' },
  { label: 'разбирает документ', accent: '#a78bfa', glow: '#c4b5fd', item: 'document' },
  { label: 'смотрит таблицу', accent: '#14b8a6', glow: '#5eead4', item: 'table' },
  { label: 'подключает сервисы', accent: '#f43f5e', glow: '#fb7185', item: 'connector' },
  { label: 'собирает базу знаний', accent: '#84cc16', glow: '#bef264', item: 'library' },
  { label: 'делает визуал', accent: '#f472b6', glow: '#f9a8d4', item: 'design' },
  { label: 'заполняет досье', accent: '#fb923c', glow: '#fdba74', item: 'profile' },
  { label: 'настраивает голос', accent: '#818cf8', glow: '#a5b4fc', item: 'voice' },
  { label: 'собирает арсенал', accent: '#facc15', glow: '#fde047', item: 'arsenal' }
];

function getLessonNumber(lesson) {
  return Number.parseInt(lesson.id.replace('day-', ''), 10);
}

function getScene(lessonNumber) {
  return lessonScenes[(lessonNumber - 1) % lessonScenes.length];
}

function renderAccessory(item, accent, glow) {
  switch (item) {
    case 'book':
      return `
        <rect x="118" y="146" width="84" height="56" rx="12" fill="#fff7ed" opacity="0.94"/>
        <path d="M160 146v56" stroke="${accent}" stroke-width="4"/>
        <path d="M128 160h22M170 160h22M128 174h18M174 174h16" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      `;
    case 'music':
      return `
        <path d="M115 142c6-14 16-22 45-22 29 0 39 8 45 22" stroke="${glow}" stroke-width="10" stroke-linecap="round" fill="none"/>
        <circle cx="118" cy="156" r="14" fill="${accent}"/>
        <circle cx="202" cy="156" r="14" fill="${accent}"/>
        <path d="M238 124v32a10 10 0 1 1-8-10v-26l28-6v30a10 10 0 1 1-8-10v-26z" fill="${glow}"/>
      `;
    case 'run':
      return `
        <path d="M106 182h42M214 182h42" stroke="${glow}" stroke-width="8" stroke-linecap="round" opacity="0.9"/>
        <path d="M94 202h30M226 202h26" stroke="${glow}" stroke-width="6" stroke-linecap="round" opacity="0.7"/>
        <path d="M124 220c10 0 22-5 34-5 11 0 18 4 28 4" stroke="${accent}" stroke-width="10" stroke-linecap="round"/>
      `;
    case 'icecream':
      return `
        <path d="M226 150l-16 54h34l-18-54z" fill="#f59e0b"/>
        <circle cx="226" cy="136" r="18" fill="${glow}"/>
        <circle cx="244" cy="138" r="16" fill="#f9a8d4"/>
        <circle cx="235" cy="122" r="15" fill="#fde68a"/>
      `;
    case 'prompt':
      return `
        <rect x="198" y="120" width="82" height="82" rx="16" fill="rgba(255,255,255,0.9)"/>
        <path d="M214 144h42M214 160h50M214 176h28" stroke="${accent}" stroke-width="6" stroke-linecap="round"/>
        <circle cx="250" cy="132" r="8" fill="${glow}"/>
      `;
    case 'folders':
      return `
        <path d="M188 144h36l10 12h44v54h-90z" fill="#fef3c7"/>
        <path d="M178 162h40l10 12h42v50h-92z" fill="${glow}"/>
        <path d="M168 180h44l8 10h44v42h-96z" fill="${accent}"/>
      `;
    case 'laptop':
      return `
        <rect x="190" y="138" width="92" height="58" rx="12" fill="rgba(12,18,32,0.92)" stroke="${glow}" stroke-width="4"/>
        <rect x="202" y="150" width="68" height="26" rx="8" fill="${accent}" opacity="0.22"/>
        <path d="M182 204h108l-12 20h-84z" fill="#d4d4d8"/>
      `;
    case 'checklist':
      return `
        <rect x="192" y="126" width="88" height="96" rx="18" fill="#f8fafc"/>
        <path d="M210 152l8 8 14-18M210 180l8 8 14-18" stroke="${accent}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M242 148h22M242 176h22M210 204h54" stroke="${glow}" stroke-width="5" stroke-linecap="round"/>
      `;
    case 'terminal':
      return `
        <rect x="190" y="132" width="94" height="74" rx="16" fill="#111827" stroke="${glow}" stroke-width="4"/>
        <circle cx="208" cy="148" r="4" fill="#f87171"/>
        <circle cx="222" cy="148" r="4" fill="#fbbf24"/>
        <circle cx="236" cy="148" r="4" fill="#34d399"/>
        <path d="M210 172l16 14-16 14M238 200h28" stroke="${accent}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      `;
    case 'service':
      return `
        <rect x="188" y="132" width="96" height="88" rx="22" fill="#ecfeff" opacity="0.95"/>
        <rect x="202" y="148" width="66" height="12" rx="6" fill="${glow}"/>
        <rect x="202" y="170" width="36" height="32" rx="10" fill="${accent}" opacity="0.9"/>
        <rect x="244" y="170" width="24" height="14" rx="7" fill="#0f172a" opacity="0.75"/>
        <rect x="244" y="188" width="24" height="14" rx="7" fill="#0f172a" opacity="0.45"/>
      `;
    case 'document':
      return `
        <path d="M196 126h54l30 30v64h-84z" fill="#fafaf9"/>
        <path d="M250 126v30h30" fill="${glow}"/>
        <path d="M210 166h44M210 182h52M210 198h34" stroke="${accent}" stroke-width="6" stroke-linecap="round"/>
      `;
    case 'table':
      return `
        <rect x="188" y="130" width="96" height="88" rx="18" fill="#ecfeff"/>
        <path d="M188 158h96M188 186h96M220 130v88M252 130v88" stroke="${accent}" stroke-width="4"/>
        <rect x="188" y="130" width="96" height="28" rx="18" fill="${glow}" opacity="0.7"/>
      `;
    case 'connector':
      return `
        <path d="M198 162c0-14 12-26 26-26h18v20h-18c-3 0-6 3-6 6s3 6 6 6h18v20h-18c-14 0-26-12-26-26z" fill="${accent}"/>
        <path d="M274 162c0 14-12 26-26 26h-18v-20h18c3 0 6-3 6-6s-3-6-6-6h-18v-20h18c14 0 26 12 26 26z" fill="${glow}"/>
      `;
    case 'library':
      return `
        <rect x="190" y="136" width="18" height="72" rx="6" fill="${accent}"/>
        <rect x="212" y="128" width="20" height="80" rx="6" fill="#38bdf8"/>
        <rect x="236" y="140" width="16" height="68" rx="6" fill="#fb7185"/>
        <rect x="256" y="122" width="18" height="86" rx="6" fill="${glow}"/>
      `;
    case 'design':
      return `
        <rect x="188" y="132" width="96" height="88" rx="20" fill="#111827" stroke="${glow}" stroke-width="4"/>
        <circle cx="220" cy="166" r="16" fill="${accent}"/>
        <rect x="242" y="150" width="24" height="24" rx="7" fill="#fde68a"/>
        <path d="M206 198l20-16 14 10 20-18 12 24z" fill="${glow}"/>
      `;
    case 'profile':
      return `
        <rect x="192" y="128" width="92" height="94" rx="20" fill="#fff7ed"/>
        <circle cx="238" cy="158" r="18" fill="${accent}" opacity="0.9"/>
        <path d="M214 204c6-18 18-26 24-26s18 8 24 26" fill="${glow}"/>
        <path d="M210 132h56" stroke="#0f172a" stroke-width="4" stroke-linecap="round" opacity="0.4"/>
      `;
    case 'voice':
      return `
        <rect x="222" y="126" width="28" height="58" rx="14" fill="${accent}"/>
        <path d="M206 170c0 18 14 32 30 32s30-14 30-32" stroke="${glow}" stroke-width="8" stroke-linecap="round" fill="none"/>
        <path d="M238 202v24M222 226h32" stroke="#f8fafc" stroke-width="6" stroke-linecap="round"/>
      `;
    case 'arsenal':
      return `
        <rect x="188" y="138" width="96" height="78" rx="18" fill="#1f2937" stroke="${glow}" stroke-width="4"/>
        <path d="M206 176h20M216 166v20" stroke="${accent}" stroke-width="8" stroke-linecap="round"/>
        <path d="M246 162l18 18M264 162l-18 18" stroke="#fde68a" stroke-width="8" stroke-linecap="round"/>
        <path d="M210 132c10-12 26-18 52-16" stroke="${glow}" stroke-width="5" stroke-linecap="round" fill="none"/>
      `;
    default:
      return '';
  }
}

function renderLessonArt(lessonNumber) {
  const scene = getScene(lessonNumber);
  const gradId = `lesson-grad-${lessonNumber}`;
  const shadowId = `lesson-shadow-${lessonNumber}`;
  const numberLabel = String(lessonNumber).padStart(2, '0');

  return `
    <svg viewBox="0 0 320 220" class="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${scene.glow}"/>
          <stop offset="100%" stop-color="${scene.accent}"/>
        </linearGradient>
        <filter id="${shadowId}" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="${scene.accent}" flood-opacity="0.35"/>
        </filter>
      </defs>
      <rect x="0" y="0" width="320" height="220" rx="24" fill="#09090b"/>
      <circle cx="262" cy="42" r="54" fill="${scene.accent}" opacity="0.18"/>
      <circle cx="72" cy="182" r="58" fill="${scene.glow}" opacity="0.12"/>
      <text x="24" y="42" fill="rgba(255,255,255,0.14)" font-size="30" font-family="JetBrains Mono, monospace" font-weight="700">${numberLabel}</text>
      <text x="24" y="200" fill="rgba(255,255,255,0.48)" font-size="12" font-family="JetBrains Mono, monospace" letter-spacing="2">${scene.label.toUpperCase()}</text>
      <g filter="url(#${shadowId})">
        <polygon
          points="160,32 182,92 246,92 194,128 214,188 160,150 106,188 126,128 74,92 138,92"
          fill="url(#${gradId})"
          stroke="rgba(255,255,255,0.28)"
          stroke-width="4"
        />
      </g>
      <ellipse cx="142" cy="102" rx="8" ry="12" fill="#111827"/>
      <ellipse cx="178" cy="102" rx="8" ry="12" fill="#111827"/>
      <path d="M144 128c8 8 24 8 32 0" stroke="#111827" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M118 144c-12 6-20 14-24 24" stroke="rgba(255,255,255,0.75)" stroke-width="7" stroke-linecap="round" fill="none"/>
      <path d="M202 144c12 6 20 14 24 24" stroke="rgba(255,255,255,0.75)" stroke-width="7" stroke-linecap="round" fill="none"/>
      <path d="M132 168c-8 12-10 24-8 34" stroke="rgba(255,255,255,0.72)" stroke-width="7" stroke-linecap="round" fill="none"/>
      <path d="M188 168c8 12 10 24 8 34" stroke="rgba(255,255,255,0.72)" stroke-width="7" stroke-linecap="round" fill="none"/>
      ${renderAccessory(scene.item, scene.accent, scene.glow)}
    </svg>
  `;
}

function renderLessonVisual(lesson, isOpen) {
  const lessonNumber = getLessonNumber(lesson);
  const isCurrent = currentOpenLesson && lesson.id === currentOpenLesson.id;
  const lessonUrl = lesson.lessonUrl ?? `./lesson.html?id=${lesson.id}`;
  const actionLabel = isOpen ? 'Открыть урок' : 'Скоро';

  return `
    <div class="lesson-visual-shell rounded-[22px] border border-zinc-900 overflow-hidden mb-5">
      <div class="lesson-art ${isOpen ? 'is-open' : 'is-locked'} relative">
        ${renderLessonArt(lessonNumber)}
        <div class="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between gap-3">
          <div class="rounded-full bg-black/45 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/75 backdrop-blur">
            Урок ${lessonNumber}
          </div>
          ${
            isOpen
              ? `<a href="${lessonUrl}" class="inline-flex rounded-full bg-brand px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-bgMain hover:opacity-95 transition">Открыть урок</a>`
              : `<div class="rounded-full border border-white/10 bg-black/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 backdrop-blur">${actionLabel}</div>`
          }
        </div>
      </div>
    </div>
  `;
}

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

function renderLesson(lesson) {
  const isOpen = lesson.status === 'open';
  const isCurrent = currentOpenLesson && lesson.id === currentOpenLesson.id;
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
      ${renderLessonVisual(lesson, isOpen)}
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

lessonsGrid.innerHTML = lessons.map(renderLesson).join('');

if (sessionStorage.getItem('claudeHubPortalUnlocked') === 'true') {
  unlockPortal();
}
