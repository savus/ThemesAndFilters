import { portfolioPictures } from "../portfolio-pictures";
import { useTheme } from "./providers/ThemeProvider";

export const MainSection = () => {
  const { theme } = useTheme();
  return (
    <>
      <main className={`Main-section`} data-theme={`${theme}`}>
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
                  <div>Web Development</div>
                  <h3>Food Website</h3>
                </a>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="card-body">
                <img src={portfolioPictures.Portfolio1} alt="" />
                <a href="#" className="popup-box">
                  <div>Web Development</div>
                  <h3>Food Website</h3>
                </a>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="card-body">
                <img src={portfolioPictures.Portfolio1} alt="" />
                <a href="#" className="popup-box">
                  <div>Web Development</div>
                  <h3>Food Website</h3>
                </a>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="card-body">
                <img src={portfolioPictures.Portfolio1} alt="" />
                <a href="#" className="popup-box">
                  <div>Web Development</div>
                  <h3>Food Website</h3>
                </a>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="card-body">
                <img src={portfolioPictures.Portfolio1} alt="" />
                <a href="#" className="popup-box">
                  <div>Web Development</div>
                  <h3>Food Website</h3>
                </a>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="card-body">
                <img src={portfolioPictures.Portfolio1} alt="" />
                <a href="#" className="popup-box">
                  <div>Web Development</div>
                  <h3>Food Website</h3>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
