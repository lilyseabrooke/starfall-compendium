/* CourseScreen — a multimedia course view with a scrying-glass player. */
(function () {
  const { Card, Badge, Button, Tabs, IconButton } = window.SA;
  const Ic = ({ name }) => <i data-lucide={name}></i>;

  function LessonRow({ l }) {
    return (
      <li className={"ap-lesson" + (l.active ? " is-active" : "")}>
        <span className={"ap-lesson__state" + (l.done ? " is-done" : "")}>
          {l.done ? <Ic name="check" /> : (l.active ? <Ic name="play" /> : <span className="ap-lesson__n">{l.n}</span>)}
        </span>
        <span className="ap-lesson__title">{l.title}</span>
        <span className="ap-lesson__len">{l.len}</span>
      </li>
    );
  }

  function CourseScreen({ course, onNavigate, onBack }) {
    const c = course || window.SA_DATA.courses[0];
    const d = window.SA_DATA;
    const [tab, setTab] = React.useState("lessons");
    return (
      <window.AppShell
        active="courses"
        onNavigate={onNavigate}
        eyebrow={c.term + " · " + c.mentor}
        title={c.title}
        actions={<Button variant="secondary" size="md" iconLeft={<Ic name="arrow-left" />} onClick={onBack}>Back to Atrium</Button>}
      >
        <div className="ap-course-grid">
          <div className="ap-course-main">
            <div className={"ap-player ap-glyph-bg--" + c.house}>
              <div className="ap-player__scrim" />
              <div className="ap-player__crest" aria-hidden="true"></div>
              <button className="ap-player__play" aria-label="Begin scrying"><Ic name="play" /></button>
              <div className="ap-player__bar">
                <span className="ap-player__time">04 · The Wandering Lights</span>
                <div className="ap-player__track"><span style={{ width: "34%" }} /></div>
                <span className="ap-player__time">27:11</span>
              </div>
            </div>

            <div className="ap-course-meta">
              <Badge tone={c.house} dot>{c.done}/{c.lessons} lessons</Badge>
              <span className="ap-meta-dot" /><span className="ap-muted">14 scryings</span>
              <span className="ap-meta-dot" /><span className="ap-muted">6 hrs of starlight</span>
              <div className="ap-course-meta__actions">
                <IconButton label="Bookmark" variant="outline"><Ic name="bookmark" /></IconButton>
                <IconButton label="Share" variant="outline"><Ic name="share-2" /></IconButton>
              </div>
            </div>

            <Tabs value={tab} onChange={setTab} items={[
              { value: "lessons", label: "Lessons", count: c.lessons },
              { value: "materials", label: "Materials" },
              { value: "discussion", label: "Discussion", count: 8 },
            ]} />

            {tab === "lessons" ? (
              <ul className="ap-lessons">{d.lessons.map((l) => <LessonRow key={l.n} l={l} />)}</ul>
            ) : (
              <div className="ap-empty"><Ic name="scroll-text" /><p>{tab === "materials" ? "Reading scrolls and star-charts appear here." : "Join the discussion in the common hall."}</p></div>
            )}
          </div>

          <aside className="ap-course-side">
            <Card variant="gilded" eyebrow="Your standing" title="Ascension">
              <div className="ap-ring">
                <div className="ap-ring__num">64<span>%</span></div>
                <span className="ap-ring__cap">to mastery</span>
              </div>
              <Button fullWidth iconLeft={<Ic name="play" />} style={{ marginTop: "var(--space-4)" }}>Resume lesson 04</Button>
            </Card>
            <Card variant="default">
              <span className="sa-eyebrow">Mentor</span>
              <div className="ap-mentor">
                <span className="ap-avatar ap-avatar--lg">{c.mentor.split(" ").slice(-1)[0][0]}</span>
                <div>
                  <div className="ap-mentor__name">{c.mentor}</div>
                  <div className="ap-muted">Magister of the {c.house === "teal" ? "Astral" : "Inner"} Circle</div>
                </div>
              </div>
              <Button variant="ghost" fullWidth iconLeft={<Ic name="send" />} style={{ marginTop: "var(--space-3)", justifyContent: "center" }}>Send owl post</Button>
            </Card>
          </aside>
        </div>
      </window.AppShell>
    );
  }

  window.CourseScreen = CourseScreen;
})();
