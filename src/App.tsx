import "./css/base.css";
import "./css/theme.css";
import "./css/styles.css";
import { ThemePanel } from "./components/ThemePanel";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { MainSection } from "./components/MainSection";

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemePanel />
        <MainSection />
      </ThemeProvider>
    </>
  );
}

export default App;
