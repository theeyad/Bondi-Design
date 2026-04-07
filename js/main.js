// Start Header
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
// End Header

// Start Portfolio
let portfolioFilterBtns = document.querySelectorAll(".portfolio-filter button");
let portfolioBtnClasses = [
  "active",
  "rounded-pill",
  "custom-btn",
  "text-capitalize",
  "fw-bold",
  "fs-5",
  "px-3",
  "py-2",
];
let portfolioImages = document.querySelectorAll(".portfolio .image img");

portfolioFilterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    portfolioFilterBtns.forEach((btn) => {
      portfolioBtnClasses.forEach((cls) => btn.classList.remove(cls));
    });

    portfolioBtnClasses.forEach((cls) => e.target.classList.add(cls));

    portfolioFilter(portfolioImages, e.target.dataset.name);
  });
});

function portfolioFilter(images, btnName) {
  let filtered;
  let portfolioContainer = document.querySelector(".portfolio-container");

  //// filtering images
  btnName === "all"
    ? (filtered = Array.from(images))
    : (filtered = Array.from(images).filter(
        (ele) => ele.dataset.name === btnName,
      ));

  //// determine num of rows to create
  let numOfRows = Math.ceil(filtered.length / 4);

  let newPortfolioContainer = document.createElement("div");
  newPortfolioContainer.className =
    "container container-fluid-xxl portfolio-container";

  let portfolioSection = document.getElementById("portfolio");

  for (let i = 0; i < numOfRows; i++) {
    let row = document.createElement("div");
    row.className = "row mt-4";

    // get only the 4 images for this row
    let chunk = filtered.slice(i * 4, (i + 1) * 4);

    chunk.forEach((img) => {
      let image = document.createElement("div");
      image.className = "image col-12 col-sm-6 col-lg-3";
      image.dataset.name = img.dataset.name;

      image.append(img);

      row.append(image);
    });

    newPortfolioContainer.append(row);
  }

  //// deleting old portfolio container
  portfolioContainer.remove();

  //// adding new portfolio container
  portfolioSection.append(newPortfolioContainer);
}
// End Portfolio

// Start Tech
const marquee = document.getElementById("marquee");
const clone = marquee.innerHTML;
marquee.innerHTML += clone;
// End Tech
