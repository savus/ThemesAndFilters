import { portfolioPictures } from "../portfolio-pictures";
import { FilterNav } from "./FilterNav";

export const PortfolioSection = () => {
  return (
    <>
      <section className="portfolio-section container">
        <div className="filter-links">
          <div className="search-container">
            <input type="text" placeholder="Search..." id="search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <FilterNav />
        </div>

        <div className="portfolio-grid">
          {/* <div className="portfolio-card" data-filter="web">
            <div className="card-body">
              <img src={portfolioPictures.Portfolio1} alt="" />
              <a href="#" className="popup-box">
                <div>Web Development</div>
                <h3>Food Website</h3>
              </a>
            </div>
          </div>

          <div className="portfolio-card" data-filter="web">
            <div className="card-body">
              <img src={portfolioPictures.Portfolio1} alt="" />
              <a href="#" className="popup-box">
                <div>Web Development</div>
                <h3>Food Website</h3>
              </a>
            </div>
          </div>

          <div className="portfolio-card" data-filter="web">
            <div className="card-body">
              <img src={portfolioPictures.Portfolio1} alt="" />
              <a href="#" className="popup-box">
                <div>Web Development</div>
                <h3>Food Website</h3>
              </a>
            </div>
          </div>

          <div className="portfolio-card" data-filter="web">
            <div className="card-body">
              <img src={portfolioPictures.Portfolio1} alt="" />
              <a href="#" className="popup-box">
                <div>Web Development</div>
                <h3>Food Website</h3>
              </a>
            </div>
          </div>

          <div className="portfolio-card" data-filter="app">
            <div className="card-body">
              <img src={portfolioPictures.Portfolio1} alt="" />
              <a href="#" className="popup-box">
                <div>Web Development</div>
                <h3>Food Website</h3>
              </a>
            </div>
          </div>

          <div className="portfolio-card" data-filter="app">
            <div className="card-body">
              <img src={portfolioPictures.Portfolio1} alt="" />
              <a href="#" className="popup-box">
                <div>Web Development</div>
                <h3>Food Website</h3>
              </a>
            </div>
          </div>

          <div className="portfolio-card" data-filter="ui">
            <div className="card-body">
              <img src={portfolioPictures.Portfolio1} alt="" />
              <a href="#" className="popup-box">
                <div>Web Development</div>
                <h3>Food Website</h3>
              </a>
            </div>
          </div>

          <div className="portfolio-card" data-filter="ui">
            <div className="card-body">
              <img src={portfolioPictures.Portfolio1} alt="" />
              <a href="#" className="popup-box">
                <div>Web Development</div>
                <h3>Food Website</h3>
              </a>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};
