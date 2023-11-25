import { useState } from 'react';
import "./css/base.css";
import "./css/theme.css";
import "./css/styles.css";

function App() {

  return (
    <>
      <div className="theme-panel open">
        <div className="theme-body">
          <span>Change Theme</span>
          <div className="btn-group">
            <button className="switcher-btn active">Light</button>
            <button className="switcher-btn">Dark</button>
          </div>
          <button>
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
  )
}

export default App
