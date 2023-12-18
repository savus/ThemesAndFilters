import { Component } from "react";
import { TFilterLinkState } from "../types";

export class FilterNav extends Component<{
  filterLinkState: TFilterLinkState;
  setFilterLinkState: (filterLinkState: TFilterLinkState) => void;
}> {
  render() {
    const { filterLinkState, setFilterLinkState } = this.props;
    return (
      <>
        <ul className="ul-defaults-none filter-nav">
          <li
            className={`filter-link ${
              filterLinkState === "all" ? "active" : ""
            }`}
            onClick={() => {
              setFilterLinkState("all");
            }}
          >
            All
          </li>
          <li
            className={`filter-link ${
              filterLinkState === "web" ? "active" : ""
            }`}
            onClick={() => {
              setFilterLinkState("web");
            }}
          >
            Web Development
          </li>
          <li
            className={`filter-link ${
              filterLinkState === "app" ? "active" : ""
            }`}
            onClick={() => {
              setFilterLinkState("app");
            }}
          >
            App Development
          </li>
          <li
            className={`filter-link ${
              filterLinkState === "ui" ? "active" : ""
            }`}
            onClick={() => {
              setFilterLinkState("ui");
            }}
          >
            UI design
          </li>
        </ul>
      </>
    );
  }
}
