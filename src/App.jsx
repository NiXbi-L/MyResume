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
    items: [
      'Docker, Docker Compose',
      'Деплой на нескольких машинах / серверах',
      'GitHub Actions, Linux, Nginx',
      'Kubernetes — пока изучаю',
    ],
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
    title: 'Фронтенд и макеты',
    items: [
      'React, Vite — рабочие интерфейсы под задачу, без упора в «сеньорный» визуал и анимации',
      'Figma: макеты и прототипы для команды и разработки, не уровень отдельного UI/UX-дизайнера',
    ],
  },
  {
    title: 'Прочее',
    items: [
      'LLM: API, интеграции',
      'Cursor и LLM в IDE — ускоряют рутину и разбор незнакомых мест; решение и ревью остаются за мной, вместе с докой и поиском',
      'Git / GitHub',
      'SSH, удалённые сервера',
    ],
  },
];

/** Актуальный фокус — показываем перед опытом работы */
const CURRENT_FOCUS = {
  period: '2025 — сейчас',
  title: 'AI-примерка и рекомендации одежды',
  intro:
    'Развиваю сервис виртуальной примерки и рекомендации. Разбираюсь в том, как устроены такие системы, чтобы решение можно было развивать дальше.',
  bullets: [
    'Сервис примерки на FastAPI: по входным данным подбирается промпт, изображение генерируется моделью Nano Banana 2; для уточнения промпта по посадке вещей локально используется Qwen2-VL-2B-Instruct.',
    'Рекомендации: ориентир — эффективные алгоритмы без лишней тяжести. В проекте: спроектировать сеть, которая по фото вещи выдаёт векторы признаков (стиль, посадка, цвета), затем на их основе построить граф сочетаемости и обходом рекомендовать вещи под стиль пользователя. Задача на этапе проектирования и изучения инструментов.',
  ],
};

const PET_PROJECTS = [
  {
    title: 'Telegram-бот: поиск соседа в общежитии',
    text: 'Для ДВФУ — помогал студентам находить соседа по общежитию.',
  },
  {
    title: 'Покер против нейросети',
    text: 'Игра с моделью на основе open-source проектов с GitHub.',
  },
  {
    title: 'Бронирование пространств ДВФУ',
    text: 'Сервис бронирования помещений и пространств университета.',
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
            <p className="hero__role">Junior product engineer · Backend-first / Python</p>
            <p className="hero__tagline">
              Могу вести разработку стартапа целиком со своей стороны: от макета в Figma до выката на серверы
              (сейчас через Docker Compose; оркестрацию в Kubernetes изучаю). Сильнее всего в бэкенде, API и в том,
              чтобы упростить и ускорить процессы вокруг кода. Понимаю этапы от идеи до продакшена и продуктовую
              логику — приоритет не «красивый сайт ради сайта», а работающий продукт.
            </p>
            <p className="hero__tagline hero__tagline--second">
              Интерфейс и визуал делаю в логике продукта: читабельно, аккуратно, с нормальным UX — без претензии на
              премиум-полировку и сложный клиентский интерактив «как в шоукейсе». Это не моя главная сила, но к
              результату отношусь серьёзно: до продакшена довожу ровно, без визуального шума. По инструментам — как у
              многих инженеров сейчас: в повседневной работе использую <strong>Cursor</strong> и LLM как ускоритель
              рутины и черновиков, рядом — документация и обычный поиск. Всё, что идёт в репозиторий, прохожу
              осознанно: разбор, ревью, тесты — без автопилота.
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
