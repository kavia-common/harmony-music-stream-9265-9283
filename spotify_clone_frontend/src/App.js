import React from "react";
import "./App.css";

// Sidebar SVGs (basic, no extra text)
const HomeIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M21 21V9.625L12 3L3 9.625V21H9.5V15.3C9.5 14.9598 9.7557 14.7 10.0625 14.7H13.9375C14.2443 14.7 14.5 14.9598 14.5 15.3V21H21Z"
      stroke={active ? "#1DB954" : "#b3b3b3"}
      strokeWidth="2"
      strokeLinejoin="round"
      fill={active ? "#1db95433" : "none"}
    />
  </svg>
);

const SearchIcon = ({ active }) => (
  <svg width="24" height="24" fill="none">
    <circle
      cx="11"
      cy="11"
      r="7.5"
      stroke={active ? "#1DB954" : "#b3b3b3"}
      strokeWidth="2"
    />
    <path
      d="M20.5 20.5L16 16"
      stroke={active ? "#1DB954" : "#b3b3b3"}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const LibraryIcon = ({ active }) => (
  <svg width="24" height="24" fill="none">
    <rect
      x="4"
      y="5"
      width="16"
      height="14"
      rx="2"
      stroke={active ? "#1DB954" : "#b3b3b3"}
      strokeWidth="2"
    />
    <rect
      x="7"
      y="8"
      width="2"
      height="8"
      rx="1"
      fill={active ? "#1DB954" : "#b3b3b3"}
    />
    <rect
      x="11"
      y="8"
      width="2"
      height="8"
      rx="1"
      fill={active ? "#1DB954" : "#b3b3b3"}
    />
    <rect
      x="15"
      y="8"
      width="2"
      height="8"
      rx="1"
      fill={active ? "#1DB954" : "#b3b3b3"}
    />
  </svg>
);

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar__top">
      <div className="sidebar__logo">
        <svg height="40" width="135" viewBox="0 0 135 40" fill="none">
          <text
            x="0"
            y="28"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 900,
              fontSize: 30,
              fill: "#fff",
              letterSpacing: "1px",
            }}
          >
            Spotify
          </text>
        </svg>
      </div>
      <nav aria-label="Main Navigation" className="sidebar__nav">
        <ul>
          <li className="nav__item active">
            <span className="nav__icon">
              <HomeIcon active={true} />
            </span>
            <span className="nav__text">Home</span>
          </li>
          <li className="nav__item">
            <span className="nav__icon">
              <SearchIcon active={false} />
            </span>
            <span className="nav__text">Search</span>
          </li>
          <li className="nav__item">
            <span className="nav__icon">
              <LibraryIcon active={false} />
            </span>
            <span className="nav__text">Your Library</span>
          </li>
        </ul>
      </nav>
      {/* Remove all explicit playlist items: keep section stub ONLY if directly visible */}
    </div>
    <div className="sidebar__bottom">
      <button className="install-btn">Install App</button>
      <div className="sidebar__user-area">
        <div className="user-avatar" tabIndex={0} aria-label="User Profile" />
        <span className="user-name">Guest</span>
      </div>
    </div>
  </aside>
);

// Playlist UI stubs: REMOVE all demo/placeholder names/images/texts.
// Provide visually correct but EMPTY card rows (placeholder boxes only).
const PlaylistCard = () => (
  <div className="playlist-card empty" tabIndex={-1} aria-hidden="true">
    <div className="playlist-card__img-wrap">
      {/* No album art (if screenshot is blank) */}
    </div>
    <div className="playlist-card__text">
      {/* No title and desc */}
    </div>
  </div>
);

const MainContent = () => (
  <main className="main-content">
    {/* Only section headings/cards visible in screenshot are kept,
        REMOVE all named playlists and hardcoded rows if not visible */}
    <section className="home-section">
      <h2 className="section-title">Focus</h2>
      <div className="card-row">
        {/* If in screenshot: Show empty cards to match grid count */}
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
      </div>
    </section>
    <section className="home-section">
      <h2 className="section-title">Spotify Playlists</h2>
      <div className="card-row card-row--six">
        {/* Six empty cards: */}
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
      </div>
    </section>
  </main>
);

const FooterBar = () => (
  <footer className="footer-bar">
    <div className="footer__text">
      <b>Preview of Spotify</b> &nbsp; Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
    </div>
    <button className="footer__cta-btn">Sign up free</button>
  </footer>
);

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app-spotify">
      <Sidebar />
      <MainContent />
      <FooterBar />
    </div>
  );
}

export default App;
