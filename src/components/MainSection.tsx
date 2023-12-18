import { PortfolioSection } from "./PortfolioSection";
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

        <PortfolioSection />
      </main>
    </>
  );
};
