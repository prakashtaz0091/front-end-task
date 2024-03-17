// tailwind.config = {
//     theme: {
//         extend: {
//             fontFamily: {
//                 cabinetGrotesk: "'Cabinet Grotesk', san-serif",
//             }
//         }
//     }
// }

//feel alive slider
const slidesContainer = document.querySelector(".slides-container");
const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", () => {
  console.log("next clicked");
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  slidesContainer.scrollLeft -= slideWidth;
});

//our experts slider
const slidesContainer2 = document.querySelectorAll(".slides-container")[1];
const slideWidth2 = slidesContainer.querySelectorAll(".slide")[1].clientWidth;
const prevButton2 = document.querySelectorAll(".prev")[1];
const nextButton2 = document.querySelectorAll(".next")[1];

nextButton2.addEventListener("click", () => {
  console.log("next clicked");
  slidesContainer2.scrollLeft += slideWidth2;
});

prevButton2.addEventListener("click", () => {
  slidesContainer2.scrollLeft -= slideWidth2;
});

//popular right now slider
const slidesContainer3 = document.querySelectorAll(".slides-container")[2];
const slideWidth3 = slidesContainer.querySelectorAll(".slide")[2].clientWidth;
const prevButton3 = document.querySelectorAll(".prev")[2];
const nextButton3 = document.querySelectorAll(".next")[2];

nextButton3.addEventListener("click", () => {
  console.log("next clicked");
  slidesContainer3.scrollLeft += slideWidth3;
});

prevButton3.addEventListener("click", () => {
  slidesContainer3.scrollLeft -= slideWidth3;
});
