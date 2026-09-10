import { useEffect, useState } from 'react'
import './App.css'

const TAGLINE = 'full-stack systems + applied ML — built, deployed, shipped.'

const PROJECTS = [
  {
    sheet: '01',
    title: 'SpendLens',
    summary:
      'AI tool-spend auditor for startups, built in collaboration with Credex. Surfaces where teams are overspending on SaaS/AI tooling and flags redundant subscriptions.',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Anthropic API', 'Vercel'],
    live: 'https://spendlens-ashen.vercel.app',
    github: null,
  },
  {
    sheet: '02',
    title: 'InterviewAI',
    summary:
      'Full-stack mock interview platform. Runs live interview sessions and generates AI-driven feedback on responses.',
    stack: ['Node.js', 'Express', 'React', 'Vite', 'OpenAI API'],
    live: null,
    github: null,
  },
  {
    sheet: '03',
    title: 'ScreenAI',
    summary:
      'RAG-based candidate screening system, built as a 48-hour take-home for a PGAGI AI/ML & Backend Engineering Intern assignment. Retrieves and ranks candidates against role requirements.',
    stack: ['OpenAI GPT + Embeddings', 'PostgreSQL', 'pgvector'],
    live: null,
    github: null,
  },
  {
    sheet: '04',
    title: 'Job Portal',
    summary:
      'Full-stack job listing and application platform with authenticated employer and candidate flows.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Bcrypt'],
    live: null,
    github: null,
  },
  {
    sheet: '05',
    title: 'H1N1 Vaccine Uptake Prediction',
    summary:
      'Logistic regression model predicting likelihood of H1N1 vaccine uptake from survey data.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    live: null,
    github: null,
  },
]

const SKILLS = [
  { label: 'Languages', items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'SQL'] },
  { label: 'Frontend', items: ['React', 'Next.js 14', 'Vite'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'Supabase'] },
  { label: 'Data', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma'] },
  { label: 'ML / DS', items: ['Scikit-learn', 'Pandas', 'NumPy', 'ARIMA', 'LSTM'] },
  { label: 'Foundations', items: ['DSA (100+ solved)', 'OOP', 'OS', 'DBMS', 'Computer Networks'] },
]

function TypedTagline() {
  const [shown, setShown] = useState('')

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i += 1
      setShown(TAGLINE.slice(0, i))
      if (i >= TAGLINE.length) clearInterval(id)
    }, 28)
    return () => clearInterval(id)
  }, [])

  return (
    <p className="hero-tagline">
      <span className="prompt">$</span> {shown}
      <span className="cursor" aria-hidden="true">_</span>
    </p>
  )
}

function SectionLabel({ n, total, title }) {
  return (
    <div className="section-label">
      <span className="sheet-tag">SHEET {n}/{total}</span>
      <h2>{title}</h2>
    </div>
  )
}

export default function App() {
  return (
    <div className="page">
      <div className="blueprint-grid" aria-hidden="true" />

      <header className="hero">
        <p className="hero-eyebrow">Anupama Pandey</p>
        <h1>Full-stack developer &amp; AI/ML engineer</h1>
        <TypedTagline />
        <div className="hero-meta">
          <span>B.Tech CSE (AI/ML) · NITRA Technical Campus · 2022–2026</span>
        </div>
        <div className="hero-links">
          <a href="mailto:pandeyanupama255@gmail.com">pandeyanupama255@gmail.com</a>
          <span className="dot" aria-hidden="true">·</span>
          <a href="https://github.com/Anupama9721" target="_blank" rel="noreferrer">github.com/Anupama9721</a>
        </div>
      </header>

      <main>
        <section className="section" aria-labelledby="projects-heading">
          <SectionLabel n="01" total="05" title="Projects" />
          <div className="projects">
            {PROJECTS.map((p) => (
              <article className="project-card" key={p.title}>
                <div className="project-card-head">
                  <span className="sheet-tag small">{p.sheet}</span>
                  <h3>{p.title}</h3>
                </div>
                <p className="project-summary">{p.summary}</p>
                <ul className="stack-tags">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                {(p.live || p.github) && (
                  <div className="project-links">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer">
                        Code
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="research-heading">
          <SectionLabel n="02" total="05" title="Research" />
          <div className="research-card">
            <h3>ARIMA vs. LSTM for Urban Air Quality Prediction</h3>
            <p>
              Published April 2026. Compares classical time-series forecasting (ARIMA)
              against a deep-learning approach (LSTM) for predicting air quality across
              Delhi-NCR.
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="skills-heading">
          <SectionLabel n="03" total="05" title="Skills" />
          <div className="skills-grid">
            {SKILLS.map((group) => (
              <div className="skill-group" key={group.label}>
                <h4>{group.label}</h4>
                <p>{group.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact-section" aria-labelledby="contact-heading">
          <SectionLabel n="04" total="05" title="Contact" />
          <p className="contact-line">
            Open to full-stack and AI/ML roles. Reach out at{' '}
            <a href="mailto:pandeyanupama255@gmail.com">pandeyanupama255@gmail.com</a> or find
            more work on{' '}
            <a href="https://github.com/Anupama9721" target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="footer">
        <span>SHEET 05/05 — END OF DOCUMENT</span>
      </footer>
    </div>
  )
}
