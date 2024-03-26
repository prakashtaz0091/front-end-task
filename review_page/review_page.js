let showMoreBtns = document.querySelectorAll(".review-show-more");
let showLessBtns = document.querySelectorAll(".review-show-less");

let headings = document.querySelectorAll(".reviews-card .review-title");
let contents = document.querySelectorAll(".reviews-card .review-content");

// showMoreBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   console.log();
//   //   for (let index = 0; index < contents.length; index++) {
//   //     const contentEl = contents[index];
//   //     const headerEl = headings[index];
//   //     headerEl.classList.remove("hidden");
//   //     contentEl.classList.remove("hidden");
//   //     showMoreBtn.classList.add("hidden");
//   //     showLessBtn.classList.remove("hidden");
//   //   }
// });

// showLessBtn.addEventListener("click", (e) => {
//   //   e.preventDefault();
//   //   for (let index = 0; index < contents.length; index++) {
//   //     if (index > 0) {
//   //       const contentEl = contents[index];
//   //       const headerEl = headings[index];
//   //       headerEl.classList.add("hidden");
//   //       contentEl.classList.add("hidden");
//   //       showMoreBtn.classList.remove("hidden");
//   //       showLessBtn.classList.add("hidden");
//   //     }
//   //   }
// });

for (let index = 0; index < showMoreBtns.length; index++) {
  const btn = showMoreBtns[index];

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    card = document.getElementById(btn.parentNode.id);
    let headings = card.querySelectorAll(".reviews-card .review-title");
    let contents = card.querySelectorAll(".reviews-card .review-content");
    let showLessBtn = card.querySelector(".review-show-less");

    //actions
    for (let index = 0; index < contents.length; index++) {
      const contentEl = contents[index];
      const headerEl = headings[index];
      headerEl.classList.remove("hidden");
      contentEl.classList.remove("hidden");
      btn.classList.add("hidden");
      showLessBtn.classList.remove("hidden");
    }
  });
}

for (let index = 0; index < showLessBtns.length; index++) {
  const btn = showLessBtns[index];

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    card = document.getElementById(btn.parentNode.id);
    let headings = card.querySelectorAll(".reviews-card .review-title");
    let contents = card.querySelectorAll(".reviews-card .review-content");
    let showMoreBtn = card.querySelector(".review-show-more");

    //actions
    for (let index = 0; index < contents.length; index++) {
      if (index > 0) {
        const contentEl = contents[index];
        const headerEl = headings[index];
        headerEl.classList.add("hidden");
        contentEl.classList.add("hidden");
        showMoreBtn.classList.remove("hidden");
        btn.classList.add("hidden");
      }
    }
  });
}
