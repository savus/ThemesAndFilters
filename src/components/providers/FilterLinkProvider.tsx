import { ReactNode, createContext, useContext, useState } from "react";
import { TFilterLinkState } from "../../types";

export type TFilterLinkContext = {
  filterLinkState: TFilterLinkState;
  setFilterLinkState: (input: TFilterLinkState) => void;
};

const FilterContext = createContext<TFilterLinkContext>(
  {} as TFilterLinkContext
);

export const FilterLinkProvider = ({ children }: { children: ReactNode }) => {
  const [filterLinkState, setFilterLinkState] =
    useState<TFilterLinkState>("all");
  return (
    <>
      <FilterContext.Provider value={{ filterLinkState, setFilterLinkState }}>
        {children}
      </FilterContext.Provider>
    </>
  );
};

export const useFilter = () => useContext(FilterContext);

// export type TThemeContext = {
//   theme: "light" | "dark";
//   setTheme: (input: "light" | "dark") => void;
// };

// const ThemeContext = createContext<TThemeContext>({} as TThemeContext);

// export const ThemeProvider = ({ children }: { children: ReactNode }) => {
//   const [theme, setTheme] = useState<"light" | "dark">("light");
//   return (
//     <>
//       <ThemeContext.Provider value={{ theme, setTheme }}>
//         {children}
//       </ThemeContext.Provider>
//     </>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);
