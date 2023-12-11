import "./css/base.css";
import "./css/theme.css";
import "./css/styles.css";
import { portfolioPictures } from "./portfolio-pictures";

function App() {
  return (
    <>
      <div id="theme-toggle" className={`theme-panel`}>
        <div className="theme-body">
          <span>Change Theme</span>
          <div className="btn-group">
            <button className={`switcher-btn`} data-toggle="light">
              Light
            </button>
            <button className={`switcher-btn`} data-toggle="dark">
              Dark
            </button>
          </div>
          <button className="theme-tab">
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

        <section className="portfolio-section container">
          <div className="filter-links">
            <div className="search-container">
              <input type="text" placeholder="Search..." />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <ul className="ul-defaults-none filter-nav">
              <li className="filter-link active">All</li>
              <li className="filter-link">Web Development</li>
              <li className="filter-link">App Development</li>
              <li className="filter-link">UI design</li>
            </ul>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-card">
              <div className="card-body">
                <img src={portfolioPictures.Portfolio1} alt="" />
                <a href="#" className="popup-box">
                  <div>Web Devlopment</div>
                  <h3>Food Website</h3>
                </a>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="card-body">
                <img src={portfolioPictures.Portfolio1} alt="" />
                <a href="#" className="popup-box">
                  <div>Web Devlopment</div>
                  <h3>Food Website</h3>
                </a>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="card-body">
                <img src={portfolioPictures.Portfolio1} alt="" />
                <a href="#" className="popup-box">
                  <div>Web Devlopment</div>
                  <h3>Food Website</h3>
                </a>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="card-body">
                <img src={portfolioPictures.Portfolio1} alt="" />
                <a href="#" className="popup-box">
                  <div>Web Devlopment</div>
                  <h3>Food Website</h3>
                </a>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="card-body">
                <img src={portfolioPictures.Portfolio1} alt="" />
                <a href="#" className="popup-box">
                  <div>Web Devlopment</div>
                  <h3>Food Website</h3>
                </a>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="card-body">
                <img src={portfolioPictures.Portfolio1} alt="" />
                <a href="#" className="popup-box">
                  <div>Web Devlopment</div>
                  <h3>Food Website</h3>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
