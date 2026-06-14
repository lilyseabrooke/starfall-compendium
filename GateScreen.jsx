/* GateScreen — the enrollment gate (login). */
(function () {
  const { Crest, Button, Input, Checkbox } = window.SA;
  const Ic = ({ name }) => <i data-lucide={name}></i>;

  function GateScreen({ onEnter }) {
    return (
      <div className="ap-gate">
        <div className="ap-gate__aura" />
        <div className="ap-gate__card">
          <Crest form="full" size={108} basePath="assets" />
          <div className="ap-gate__wm">
            <span className="ap-gate__name">Starfall Academy</span>
            <span className="ap-gate__motto">By Starlight We Rise</span>
          </div>
          <hr className="sa-rule" style={{ width: "100%", margin: "var(--space-2) 0 var(--space-5)" }} />
          <form className="ap-gate__form" onSubmit={(e) => { e.preventDefault(); onEnter && onEnter(); }}>
            <Input label="Initiate name" placeholder="e.g. Lyra Vane" defaultValue="Lyra Vane" iconLeft={<Ic name="user-round" />} />
            <Input label="Sigil key" type="password" defaultValue="aether" iconLeft={<Ic name="key-round" />} hint="Found on your enrollment scroll." />
            <div className="ap-gate__row">
              <Checkbox label="Remember this hall" defaultChecked />
              <a href="#" onClick={(e) => e.preventDefault()}>Lost your sigil?</a>
            </div>
            <Button type="submit" variant="primary" size="lg" fullWidth iconLeft={<Ic name="sparkles" />}>Enter the Atrium</Button>
            <Button type="button" variant="secondary" size="lg" fullWidth onClick={onEnter}>Enroll as a New Initiate</Button>
          </form>
        </div>
        <p className="ap-gate__foot">Term IV · MMXXVI · The doors close at the new moon</p>
      </div>
    );
  }

  window.GateScreen = GateScreen;
})();
