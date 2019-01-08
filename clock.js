const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

// 현재 시간에서 시계 불러오기
function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` :seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  // 매초마다 getTime 함수 실행
}

init();