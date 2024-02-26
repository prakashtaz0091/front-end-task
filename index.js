const search_menu_open_btn = document.getElementById("search-menu-open-btn");

const search_menu_close_btn = document.getElementById("search-menu-close-btn");

const search_menu = document.getElementById("search-menu");

search_menu_open_btn.addEventListener("click", () => {
  search_menu.style.display = "flex";
});
search_menu_close_btn.addEventListener("click", () => {
  search_menu.style.display = "none";
});
