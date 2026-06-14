/* AtriumScreen — the student dashboard. */
(function () {
  const { Card, Badge, Button } = window.SA;
  const Ic = ({ name }) => <i data-lucide={name}></i>;

  function StatTile({ s }) {
    return (
      <div className={"ap-stat ap-stat--" + s.tone}>
        <span className="ap-stat__icon"><Ic name={s.icon} /></span>
        <div className="ap-stat__body">
          <span className="ap-stat__value">{s.value}</span>
          <span className="ap-stat__label">{s.label}</span>
        </div>
      </div>
    );
  }

  function CourseCard({ c, onOpen }) {
    const pct = Math.round((c.done / c.lessons) * 100);
    const complete = c.done === c.lessons;
    return (
      <Card variant="default" interactive className="ap-course" onClick={() => onOpen(c)}>
        <div className={"ap-course__glyph ap-glyph--" + c.house}><Ic name={c.glyph} /></div>
        <div className="ap-course__main">
          <div className="ap-course__top">
            <span className="sa-eyebrow">{c.term}</span>
            {complete ? <Badge tone="forest" dot>Complete</Badge> : <Badge tone="neutral">{c.done}/{c.lessons}</Badge>}
          </div>
          <h3 className="ap-course__title">{c.title}</h3>
          <p className="ap-course__mentor"><Ic name="user-round" /> {c.mentor}</p>
          <div className="ap-progress"><span style={{ width: pct + "%" }} /></div>
        </div>
      </Card>
    );
  }

  function AtriumScreen({ onNavigate, onOpenCourse }) {
    const d = window.SA_DATA;
    const AppShell = window.AppShell;
    return (
      <AppShell
        active="atrium"
        onNavigate={onNavigate}
        eyebrow="Term IV · Arcane Studies"
        title="The Atrium"
        actions={<Button size="md" iconLeft={<Ic name="plus" />}>New Petition</Button>}
      >
        <section className="ap-hero">
          <div className="ap-hero__text">
            <span className="sa-eyebrow">Welcome back, Adept</span>
            <h2 className="ap-hero__h">Good evening, Lyra.</h2>
            <p className="ap-hero__p">The observatory dome is open and the Wandering Lights are charted to appear tonight. Three lessons await your seal.</p>
            <div className="ap-hero__cta">
              <Button iconLeft={<Ic name="play" />}>Resume Cartography</Button>
              <Button variant="secondary" iconLeft={<Ic name="telescope" />}>Open Observatory</Button>
            </div>
          </div>
          <div className="ap-hero__crest" aria-hidden="true"></div>
        </section>

        <div className="ap-stats">
          {d.stats.map((s) => <StatTile key={s.label} s={s} />)}
        </div>

        <div className="ap-grid">
          <div className="ap-col-main">
            <div className="ap-section__head">
              <h3 className="sa-h3" style={{ fontSize: "var(--text-xl)" }}>Continue your studies</h3>
              <a className="ap-link" href="#" onClick={(e) => { e.preventDefault(); onNavigate("courses"); }}>All courses <Ic name="arrow-right" /></a>
            </div>
            <div className="ap-courses">
              {d.courses.map((c) => <CourseCard key={c.id} c={c} onOpen={onOpenCourse} />)}
            </div>
          </div>

          <aside className="ap-col-side">
            <Card variant="gilded" eyebrow="Tonight" title="Owl Post">
              <ul className="ap-feed">
                <li><span className="ap-feed__dot ap-glyph--teal"><Ic name="telescope" /></span><div><b>Stargazing rite</b><span>Observatory · 9:00 PM</span></div></li>
                <li><span className="ap-feed__dot ap-glyph--crimson"><Ic name="stamp" /></span><div><b>2 seals due</b><span>Rites of Emberlight</span></div></li>
                <li><span className="ap-feed__dot ap-glyph--plum"><Ic name="award" /></span><div><b>Glass mastery earned</b><span>The Whispering Glass</span></div></li>
              </ul>
            </Card>
            <Card variant="parchment">
              <span className="sa-eyebrow">Decree</span>
              <p className="ap-decree">"Let no initiate mistake the map for the territory, nor the star for its light."</p>
              <span className="ap-decree__by">— The Cartographer's Oath</span>
            </Card>
          </aside>
        </div>
      </AppShell>
    );
  }

  window.AtriumScreen = AtriumScreen;
})();
