document.addEventListener("DOMContentLoaded", () => {
  const scrollBar = document.querySelector(".scroll-progress-vertical");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    scrollBar.style.height = scrollPercent + "%";
  });
});
