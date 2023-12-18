import { useState } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { TActiveTab, open } from "../types";

export const ThemePanel = () => {
  const [tabOpenState, setTabOpenState] = useState<open>("");
  const [switcherActive, setSwitcherActive] = useState<TActiveTab>("light");
  const { setTheme } = useTheme();
  return (
    <>
      <div id="theme-toggle" className={`theme-panel ${tabOpenState}`}>
        <div className="theme-body">
          <span>Change Theme</span>
          <div className="btn-group">
            <button
              className={`switcher-btn ${
                switcherActive === "light" ? "active" : ""
              }`}
              data-toggle="light"
              onClick={() => {
                setTheme("light");
                setSwitcherActive("light");
              }}
            >
              Light
            </button>
            <button
              className={`switcher-btn ${
                switcherActive === "dark" ? "active" : ""
              }`}
              data-toggle="dark"
              onClick={() => {
                setTheme("dark");
                setSwitcherActive("dark");
              }}
            >
              Dark
            </button>
          </div>
          <button
            className="theme-tab"
            onClick={() => {
              if (tabOpenState === "open") return setTabOpenState("");
              return setTabOpenState("open");
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
        </div>
      </div>
    </>
  );
};
