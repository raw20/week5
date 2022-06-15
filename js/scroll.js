const section = document.querySelectorAll(".section");
const img = document.querySelectorAll(".right>div");
const addDownBtn = document.querySelector(".app-down");
const menuBar = document.querySelector(".menuBar");
const topRight = document.querySelector(".top-right");
function observerFnc(entries) {
  entries.forEach((ele) => {
    let index = ele.target.dataset.index;
    console.log(fullpage_api.getScrollY());
    if (fullpage_api.getScrollY() > 0) {
      addDownBtn.classList.remove("hidden");
      menuBar.classList.remove("blind");
      img[index].classList.add("active");
    } else {
      addDownBtn.classList.add("hidden");
      menuBar.classList.add("blind");
    }
  });
}
const option = {
  threshold: 0.6,
};
const observerObject = new IntersectionObserver(observerFnc, option);

section.forEach((selectionItem) => observerObject.observe(selectionItem));
