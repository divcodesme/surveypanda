import "./styles.css";

const workflowSteps = [
  "Build surveys",
  "Publish share links",
  "Collect responses",
  "Review insights",
];

function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Open-source survey platform</p>
          <h1>SurveyPanda</h1>
          <p className="lede">
            A baseline web app for creating surveys, sharing public response
            links, and turning submissions into clear summaries.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#workspace">
              Start building
            </a>
            <a className="button secondary" href="#architecture">
              View foundation
            </a>
          </div>
        </div>

        <div className="survey-preview" aria-label="Survey preview">
          <div className="preview-header">
            <span>Customer feedback</span>
            <strong>Draft</strong>
          </div>
          <label>
            How was your experience?
            <select defaultValue="great">
              <option value="great">Great</option>
              <option value="okay">Okay</option>
              <option value="poor">Needs work</option>
            </select>
          </label>
          <label>
            What should we improve next?
            <textarea placeholder="Share your thoughts..." />
          </label>
          <button type="button">Submit response</button>
        </div>
      </section>

      <section id="workspace" className="workflow" aria-label="Workflow">
        {workflowSteps.map((step, index) => (
          <article key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{step}</h2>
          </article>
        ))}
      </section>

      <section id="architecture" className="foundation">
        <h2>Baseline web foundation</h2>
        <p>
          The frontend is ready for React routes, API client contracts, question
          renderers, shared components, and theme work.
        </p>
      </section>
    </main>
  );
}

export default App;
