let clicksNum = document.querySelector("#clicks-num");

export function clicked() {
  clicksNum.textContent++;
  console.log(clicksNum);
}
