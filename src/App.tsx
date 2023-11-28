import { useState } from "react";
import "./css/base.css";
import "./css/theme.css";
import "./css/styles.css";
import { TActiveTab, open } from "./types";


function App() {
  const [openState, setIsOpenState] = useState<open>("");
  const [activeTabState, setActiveTabState] = useState<TActiveTab>("light");
  const root = document.documentElement;
  return (
    <>
      <div id="theme-toggle" className={`theme-panel ${openState}`}>
        <div className="theme-body">
          <span>Change Theme</span>
          <div className="btn-group">
            <button
              className={`switcher-btn ${
                activeTabState === "light" ? "active" : ""
              }`}
              onClick={() => {
                setActiveTabState("light");
                root.setAttribute("data-theme", activeTabState);
              }}
            >
              Light
            </button>
            <button
              className={`switcher-btn ${
                activeTabState === "dark" ? "active" : ""
              }`}
              onClick={() => {
                setActiveTabState("dark");
                root.setAttribute("data-theme", activeTabState);
              }}
            >
              Dark
            </button>
          </div>
          <button
            className="theme-tab"
            onClick={() => {
              if (openState === "open") return setIsOpenState("");
              return setIsOpenState("open");
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
        </div>
      </div>

      <main className="main-section">
        <header className="main-header">
          <nav className="navbar">
            <ul className="navbar-nav ul-defaults-none">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </nav>
        </header>
      </main>
    </>
  );
}

export default App;
