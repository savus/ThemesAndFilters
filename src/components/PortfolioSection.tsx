import { useState } from "react";
import { portfolioPictures } from "../portfolio-pictures";
import { TFilterLinkState } from "../types";
import { FilterNav } from "./FilterNav";

export const PortfolioSection = () => {
  const [filterLinkState, setFilterLinkState] =
    useState<TFilterLinkState>("all");
  return (
    <>
      <section className="portfolio-section container">
        <div className="filter-links">
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <FilterNav
            filterLinkState={filterLinkState}
            setFilterLinkState={setFilterLinkState}
          />
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
    </>
  );
};
