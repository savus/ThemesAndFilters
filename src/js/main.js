document.addEventListener("DOMContentLoaded", function () {
  // const theme = "theme";
  // const dataTheme = "data-theme";
  // const themeTab = ".theme-tab";
  // const switcherBtn = ".switcher-btn";
  // const dark = "dark";
  // const light = "light";
  // const open = "open";
  // const active = "active";
  // const tabId = "theme-toggle";
  // const filterLink = ".filter-link";
  // const dataFilter = "[data-filter]";

  // const root = document.documentElement;
  // const currentTheme = localStorage.getItem(theme)
  //   ? localStorage.getItem(theme)
  //   : "light";

  // /* theme */

  // const toggleTheme = document.querySelector(themeTab);
  // const switcher = document.querySelectorAll(switcherBtn);

  // toggleTheme.addEventListener("click", function () {
  //   const tab = document.getElementById(tabId);

  //   if (tab.className.includes(open)) tab.classList.remove(open);
  //   else tab.classList.add(open);
  // });

  // const setActive = (element, selector) => {
  //   if (document.querySelector(`${selector}.${active}`) !== null)
  //     document.querySelector(`${selector}.${active}`).classList.remove(active);
  //   element.classList.add(active);
  // };

  // const setTheme = (val) => {
  //   if (val === dark) {
  //     root.setAttribute(dataTheme, dark);
  //     localStorage.setItem(theme, dark);
  //   } else {
  //     root.setAttribute(dataTheme, light);
  //     localStorage.setItem(theme, light);
  //   }
  // };

  // for (const elm of switcher) {
  //   elm.addEventListener("click", function () {
  //     const toggle = this.dataset.toggle;
  //     setActive(elm, switcherBtn);
  //     setTheme(toggle);
  //   });
  // }

  // root.setAttribute(dataTheme, currentTheme);
  // setActive(
  //   document.querySelector(`[data-toggle=${currentTheme}]`, switcherBtn)
  // );

  const filterLinks = document.querySelectorAll(".filter-link");
  const portfolioCards = document.querySelectorAll("[data-filter]");
  const searchBox = document.getElementById("search");

  const setActive = (element, selector) => {
    if (document.querySelector(`${selector}.active`) !== null) {
      document.querySelector(`${selector}.active`).classList.remove("active");
    }
    element.classList.add("active");
  };

  searchBox.addEventListener("keyup", (e) => {
    const searchInput = e.target.value.toLowerCase().trim();
    portfolioCards.forEach((card) => {
      if (card.dataset.filter.includes(searchInput)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  filterLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const dataLink = this.dataset.link;
      setActive(link, ".filter-link");
      portfolioCards.forEach((card) => {
        if (dataLink === "all") {
          card.style.display = "block";
        } else if (card.dataset.filter === dataLink) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
