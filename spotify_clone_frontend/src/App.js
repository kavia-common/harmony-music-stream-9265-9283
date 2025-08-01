import React from "react";
import "./App.css";

// SVG ICONS
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

const PlayIconOverlay = () => (
  <div className="play-overlay">
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="20" fill="#1DB954" />
      <polygon points="16,13 29,20 16,27" fill="white" />
    </svg>
  </div>
);

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar__top">
      <div className="sidebar__logo">
        {/* Spotify Logo SVG */}
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
      <div className="sidebar__playlists">
        <h3 className="sidebar__sectiontitle">PLAYLISTS</h3>
        <ul className="playlistlist">
          <li>Chill Hits</li>
          <li>Coding Mode</li>
          <li>Lo-fi Beats</li>
          <li>Top EDM 2023</li>
          <li>Classical Relax</li>
          <li>Jazz Evenings</li>
        </ul>
      </div>
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

const mockFocusCards = [
  {
    title: "Mood Booster",
    desc: "Get happy with bright, energetic tunes.",
    img: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
  },
  {
    title: "Peaceful Piano",
    desc: "Relax with soft classical piano pieces.",
    img: "https://i.scdn.co/image/ab67706c0000da84a1a12e814e45e22bcc74c888",
  },
  {
    title: "Feel Good Indie",
    desc: "Uplifting indie to power your day.",
    img: "https://i.scdn.co/image/ab67706c0000da84c8ba7b2f40cfac3cc6effb98",
  },
  {
    title: "90s Hits",
    desc: "Throwback to the best of the 90s.",
    img: "https://i.scdn.co/image/ab67706c0000da84769c5255f34d1f0dbb6bff80",
  },
  {
    title: "Rock Classics",
    desc: "Iconic tracks from rock legends.",
    img: "https://i.scdn.co/image/ab67706c0000da84c27c4582b453d56a781b3d95",
  },
];

const mockPlaylistCards = [
  {
    title: "Discover Weekly",
    desc: "Your weekly mixtape of fresh music.",
    img: "https://i.scdn.co/image/ab67616d00001e027d0a5073e7a115e2ca2d2ccd",
  },
  {
    title: "Release Radar",
    desc: "New tracks from artists you follow.",
    img: "https://i.scdn.co/image/ab67616d00001e027e1c8b6011b5bfe6cd5d9a3d",
  },
  {
    title: "Hot Country",
    desc: "Nashville's current biggest hits.",
    img: "https://i.scdn.co/image/ab67706c0000da843e4b2c59162f7870be3b9747",
  },
  {
    title: "Hit Rewind",
    desc: "Revisit the greatest chart toppers.",
    img: "https://i.scdn.co/image/ab67616d00001e023e7cee1955e50b285cf4904d",
  },
  {
    title: "Beast Mode",
    desc: "Music to power your workout.",
    img: "https://i.scdn.co/image/ab67706c0000da84df20e396f5eea012af190775",
  },
  {
    title: "Song Exploder",
    desc: "Tracks with fascinating stories.",
    img: "https://i.scdn.co/image/ab67616d00001e02dc5d14c2b251f68c14492557",
  },
];

const PlaylistCard = ({ title, desc, img }) => (
  <div className="playlist-card" tabIndex={0}>
    <div className="playlist-card__img-wrap">
      <img src={img} alt={title} className="playlist-card__img" />
      <PlayIconOverlay />
    </div>
    <div className="playlist-card__text">
      <div className="playlist-card__title">{title}</div>
      <div className="playlist-card__desc">{desc}</div>
    </div>
  </div>
);

const MainContent = () => (
  <main className="main-content">
    <section className="home-section">
      <h2 className="section-title">Focus</h2>
      <div className="card-row">
        {mockFocusCards.map((card, idx) => (
          <PlaylistCard key={idx} {...card} />
        ))}
      </div>
    </section>
    <section className="home-section">
      <h2 className="section-title">Spotify Playlists</h2>
      <div className="card-row card-row--six">
        {mockPlaylistCards.map((card, idx) => (
          <PlaylistCard key={idx} {...card} />
        ))}
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
