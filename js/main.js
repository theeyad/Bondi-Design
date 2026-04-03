let searchIcon = document.querySelector(".search");
let searchInput = document.querySelector(".search-input");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("d-none");
  searchInput.focus();
});

document.addEventListener("click", (e) => {
  if (!searchIcon.contains(e.target) && !searchInput.contains(e.target)) {
    searchInput.classList.add("d-none");
  }
});
