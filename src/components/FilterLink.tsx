import { TFilterLinkState } from "../types";
import { useFilter } from "./providers/FilterLinkProvider";

export const FilterLink = ({
  text,
  linkName,
}: {
  text: string;
  linkName: TFilterLinkState;
}) => {
  const { filterLinkState, setFilterLinkState } = useFilter();
  return (
    <>
      <li
        className={`filter-link ${
          filterLinkState === linkName ? "active" : ""
        }`}
        data-link={linkName}
        onClick={() => {
          setFilterLinkState(linkName);
        }}
      >
        {text}
      </li>
    </>
  );
};
