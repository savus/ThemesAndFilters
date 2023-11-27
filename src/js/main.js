const theme = "theme";
const dataTheme = "data-theme";
const themeTab = ".theme-tab";
const switcherBtn = ".switcher-btn";
const dark = "dark";
const light = "light";
const open = "open";
const active = "active";
const tabId = "theme-toggle";

const root = document.documentElement;

/* theme */
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

toggleTheme.addEventListener('click', function() {
    const tab = document.getElementById(tabId);
    if (!tab.className.includes(open)) tab.classList.add(open);
    else tab.classList.remove(open);
})