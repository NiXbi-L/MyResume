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
    title: 'Прочее',
    items: ['Работа с LLM (API, интеграции)', 'Git / GitHub', 'SSH, удалённые сервера'],
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
              Проектирование и разработка бэкенда; задачи fullstack закрываю с пониманием структуры фронта.
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
