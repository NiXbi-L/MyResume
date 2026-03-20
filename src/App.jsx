import './App.css';

const CONTACT = {
  github: 'https://github.com/NiXbi-L',
  telegram: 'https://t.me/NiXbiL',
  email: 'mailto:rspinko965@gmail.com',
  phone: 'tel:+79914975923',
};

const SKILL_GROUPS = [
  {
    title: 'Языки',
    items: ['Python', 'C / C++'],
    chips: true,
  },
  {
    title: 'Бэкенд и API',
    items: ['FastAPI', 'Django', 'Flask', 'aiogram'],
  },
  {
    title: 'Данные',
    items: ['PostgreSQL', 'SQLite', 'MySQL', 'Redis'],
  },
  {
    title: 'Инфраструктура',
    items: ['Docker', 'GitHub Actions', 'Linux', 'Nginx'],
  },
  {
    title: 'Парсинг и автоматизация',
    items: [
      'Парсинг веб-страниц',
      'Обход защит (капча, блокировки по IP)',
      'Playwright, Selenium',
    ],
  },
  {
    title: 'ML / CV',
    items: ['OpenCV', 'PyTorch / TensorFlow — базовый уровень'],
  },
  {
    title: 'Fullstack / UI',
    items: [
      'React, Vite',
      'Фронтенд и прототипы интерфейсов — в основном через Cursor (AI в IDE)',
    ],
  },
  {
    title: 'Прочее',
    items: ['Работа с LLM (API, интеграции)', 'Git / GitHub', 'SSH, удалённые сервера'],
  },
];

/** Актуальный фокус — показываем перед опытом работы */
const CURRENT_FOCUS = {
  period: '2025 — сейчас',
  title: 'AI-примерка и рекомендации одежды',
  intro:
    'Развиваю сервис примерки и рекомендательную систему; интересно разобраться в устройстве таких систем, чтобы проект можно было применить дальше.',
  bullets: [
    'Сервис примерки на FastAPI: по входным данным подбирается промпт, изображение генерируется моделью Nano Banana 2; для уточнения промпта по посадке вещей локально используется Qwen2-VL-2B-Instruct.',
    'Рекомендации: ориентир — эффективные алгоритмы без лишней тяжести. В проекте: спроектировать сеть, которая по фото вещи выдаёт векторы признаков (стиль, посадка, цвета), затем на их основе построить граф сочетаемости и обходом рекомендовать вещи под стиль пользователя. Задача на этапе проектирования и изучения инструментов.',
  ],
};

const PET_PROJECTS = [
  {
    title: 'Telegram-бот: поиск соседа в общежитии',
    text: 'Бот для ДВФУ: помогал находить соседа по общежитию.',
  },
  {
    title: 'Покер против нейросети',
    text: 'Игра с моделью на базе готовых open-source решений с GitHub.',
  },
  {
    title: 'Бронирование пространств ДВФУ',
    text: 'Сервис для бронирования помещений/пространств университета.',
  },
];

const EXPERIENCE = [
  {
    period: '2024 — 2025',
    place: 'R&D, ЦПИР ДВФУ',
    bullets: [
      'Парсер китайских новостных сайтов с обходом антибот-защиты (капча, IP) — проект бота востоковеда.',
      'Модуль оценки рукописного текста: OpenCV, алгоритмы анализа почерка.',
    ],
  },
  {
    period: '2023 — 2024',
    place: 'Freelance / Telegram-боты',
    bullets: ['Разработка ботов под бизнес-задачи: интеграции, БД, деплой.'],
  },
];

export default function App() {
  return (
    <div className="page">
      <div className="shell">
        <header className="hero">
          <img
            className="hero__photo"
            src={`${import.meta.env.BASE_URL}Myphoto.jpg`}
            alt="Фото"
            width={200}
            height={200}
          />
          <div className="hero__text">
            <h1 className="hero__name">Спинко Ренат Дмитриевич</h1>
            <p className="hero__role">Backend / Python · Junior</p>
            <p className="hero__tagline">
              Проектирование и разработка бэкенда; fullstack-задачи — с пониманием фронта; UI и прототипы делаю через{' '}
              <strong>Cursor</strong>.
            </p>
            <nav className="hero__links" aria-label="Контакты">
              <a href={CONTACT.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <span className="dot">·</span>
              <a href={CONTACT.telegram} target="_blank" rel="noreferrer">
                Telegram
              </a>
              <span className="dot">·</span>
              <a href={CONTACT.email}>Email</a>
              <span className="dot">·</span>
              <a href={CONTACT.phone}>Телефон</a>
            </nav>
          </div>
        </header>

        <section className="section">
          <h2 className="section__title">Сейчас в работе</h2>
          <article className="timeline__item timeline__item--highlight">
            <div className="timeline__meta">
              <span className="timeline__period">{CURRENT_FOCUS.period}</span>
              <h3 className="timeline__place">{CURRENT_FOCUS.title}</h3>
            </div>
            <p className="current__intro">{CURRENT_FOCUS.intro}</p>
            <ul className="timeline__bullets">
              {CURRENT_FOCUS.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section">
          <h2 className="section__title">Пет-проекты</h2>
          <ul className="pet-list">
            {PET_PROJECTS.map((p) => (
              <li key={p.title} className="pet-list__item">
                <h3 className="pet-list__title">{p.title}</h3>
                <p className="pet-list__text">{p.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="section__title">Опыт</h2>
          <ul className="timeline">
            {EXPERIENCE.map((job) => (
              <li key={job.place} className="timeline__item">
                <div className="timeline__meta">
                  <span className="timeline__period">{job.period}</span>
                  <h3 className="timeline__place">{job.place}</h3>
                </div>
                <ul className="timeline__bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="section__title">Навыки</h2>
          <div className="skills">
            {SKILL_GROUPS.map((g) => (
              <article key={g.title} className="skill-card">
                <h3 className="skill-card__title">{g.title}</h3>
                {g.chips ? (
                  <div className="chips">
                    {g.items.map((x) => (
                      <span key={x} className="chip">
                        {x}
                      </span>
                    ))}
                  </div>
                ) : (
                  <ul className="skill-card__list">
                    {g.items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section section--muted">
          <h2 className="section__title">Образование</h2>
          <p>
            ДВФУ, программа «Разработка и управление цифровыми продуктами», 2024 — настоящее время.
          </p>
        </section>

        <footer className="footer">
          <a href={CONTACT.github} target="_blank" rel="noreferrer">
            github.com/NiXbi-L
          </a>
          <span className="footer__hint"> · Vite + React</span>
        </footer>
      </div>
    </div>
  );
}
