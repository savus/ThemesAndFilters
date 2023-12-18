import { Component } from "react";
import { FilterLink } from "./FilterLink";
import { FilterLinkProvider } from "../components/providers/FilterLinkProvider";

export class FilterNav extends Component {
  render() {
    return (
      <>
        <ul className="ul-defaults-none filter-nav">
          <FilterLinkProvider>
            <FilterLink text="All" linkName="all" />
            <FilterLink text="Web Deveopment" linkName="web" />
            <FilterLink text="App Development" linkName="app" />
            <FilterLink text="UI Design" linkName="ui" />
          </FilterLinkProvider>
        </ul>
      </>
    );
  }
}
