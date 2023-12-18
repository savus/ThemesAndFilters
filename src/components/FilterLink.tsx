import { TFilterLinkState } from "../types";
import { useFilter } from "./providers/FilterLinkProvider";

export const FilterLink = ({
  text,
  filterState,
}: {
  text: string;
  filterState: TFilterLinkState;
}) => {
  const { filterLinkState, setFilterLinkState } = useFilter();
  return (
    <>
      <li
        className={`filter-link ${
          filterLinkState === filterState ? "active" : ""
        }`}
        onClick={() => {
          setFilterLinkState(filterState);
        }}
      >
        {text}
      </li>
    </>
  );
};
