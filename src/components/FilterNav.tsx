import { Component } from "react";
import { FilterLink } from "./FilterLink";
import { FilterLinkProvider } from "../components/providers/FilterLinkProvider";

export class FilterNav extends Component {
  render() {
    return (
      <>
        <ul className="ul-defaults-none filter-nav">
          <FilterLinkProvider>
            <FilterLink text="All" filterState="all" />
            <FilterLink text="Web Deveopment" filterState="web" />
            <FilterLink text="App Development" filterState="app" />
            <FilterLink text="UI Design" filterState="ui" />
          </FilterLinkProvider>
        </ul>
      </>
    );
  }
}
