import { ReactNode, createContext, useContext, useState } from "react";

export type TThemeContext = {
  theme: "light" | "dark";
  setTheme: (input: "light" | "dark") => void;
};

const ThemeContext = createContext<TThemeContext>({} as TThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export const useTheme = () => useContext(ThemeContext);
