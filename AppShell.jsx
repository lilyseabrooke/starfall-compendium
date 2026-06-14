/* AppShell — sidebar + top bar chrome for the Academy portal. */
(function () {
  const { Crest, IconButton, Badge } = window.SA;
  const Ic = ({ name, ...p }) => <i data-lucide={name} {...p}></i>;

  function AppShell({ active, onNavigate, title, eyebrow, actions, children }) {
    const d = window.SA_DATA;
    return (
      <div className="ap-shell">
        <aside className="ap-side">
          <div className="ap-brand">
            <Crest form="simple" size={40} basePath="assets" />
            <div className="ap-brand__wm">
              <span className="ap-brand__name">Starfall</span>
              <span className="ap-brand__sub">Academy</span>
            </div>
          </div>

          <nav className="ap-nav">
            {d.nav.map((n) => (
              <button
                key={n.id}
                className={"ap-nav__item" + (active === n.id ? " is-active" : "")}
                onClick={() => onNavigate && onNavigate(n.id)}
              >
                <Ic name={n.icon} />
                <span>{n.label}</span>
              </button>
            ))}
          </nav>

          <div className="ap-side__foot">
            <button className="ap-nav__item"><Ic name="settings" /><span>Settings</span></button>
            <div className="ap-user">
              <span className="ap-avatar">LV</span>
              <div className="ap-user__meta">
                <span className="ap-user__name">{d.student.name}</span>
                <span className="ap-user__rank">{d.student.rank} · {d.student.house}</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="ap-main">
          <header className="ap-top">
            <div className="ap-top__titles">
              {eyebrow ? <span className="sa-eyebrow">{eyebrow}</span> : null}
              <h1 className="ap-top__h1">{title}</h1>
            </div>
            <div className="ap-top__actions">
              <div className="ap-search">
                <Ic name="search" />
                <input placeholder="Search the archive…" />
                <kbd>⌘K</kbd>
              </div>
              <IconButton label="Owl post" variant="ghost"><Ic name="bell" /></IconButton>
              <Badge tone="gold" className="ap-aether"><Ic name="sparkles" /> {d.student.aether}</Badge>
              {actions}
            </div>
          </header>
          <div className="ap-canvas">{children}</div>
        </main>
      </div>
    );
  }

  window.AppShell = AppShell;
})();
