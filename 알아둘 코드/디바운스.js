let timer;

document.querySelector("#input").addEventListener("input", (e) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    // 실행 코드 내용
  }, 200);
});
