const clickBtn = document.querySelector("#click-btn");

clickBtn.addEventListener("click", async function () {
  const increment = await import("./increment.js");
  increment.clicked();
});
