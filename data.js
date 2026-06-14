/* Mock data for the Starfall Academy portal UI kit. */
window.SA_DATA = {
  student: { name: "Lyra Vane", house: "Phoenix", rank: "Adept", aether: 1240, sigil: "A-4417" },
  nav: [
    { id: "atrium", label: "Atrium", icon: "layout-dashboard" },
    { id: "courses", label: "Courses", icon: "book-open" },
    { id: "ledger", label: "Ledger", icon: "scroll-text" },
    { id: "observatory", label: "Observatory", icon: "telescope" },
    { id: "archive", label: "Archive", icon: "library" },
  ],
  stats: [
    { label: "Aether", value: "1,240", icon: "sparkles", tone: "gold" },
    { label: "Courses", value: "5", icon: "book-open", tone: "teal" },
    { label: "Ascension", value: "62%", icon: "trending-up", tone: "forest" },
    { label: "Seals due", value: "2", icon: "stamp", tone: "crimson" },
  ],
  courses: [
    { id: "c1", title: "Astral Cartography", house: "teal", term: "Term IV", lessons: 14, done: 9, mentor: "Magister Orrin", glyph: "compass" },
    { id: "c2", title: "Rites of Emberlight", house: "crimson", term: "Term IV", lessons: 10, done: 4, mentor: "Dame Sera Vael", glyph: "flame" },
    { id: "c3", title: "The Whispering Glass", house: "plum", term: "Term IV", lessons: 12, done: 12, mentor: "Archivist Pell", glyph: "moon-star" },
    { id: "c4", title: "Verdant Summoning", house: "forest", term: "Term III", lessons: 8, done: 3, mentor: "Warden Thistle", glyph: "leaf" },
  ],
  lessons: [
    { n: "01", title: "The Seven Constellations", len: "18 min", done: true },
    { n: "02", title: "Reading the Drift", len: "24 min", done: true },
    { n: "03", title: "Charting by Starlight", len: "31 min", done: true },
    { n: "04", title: "The Wandering Lights", len: "27 min", done: false, active: true },
    { n: "05", title: "Maps of the Hollow Sky", len: "22 min", done: false },
    { n: "06", title: "The Cartographer's Oath", len: "15 min", done: false },
  ],
};
