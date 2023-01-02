let timer;

document.querySelector(".body").addEventListener("scroll", (e) => {
  if (!timer) {
    timer = setTimeout(() => {
      timer = null;
      // 실행할 코드 내용
    }, 200);
  }
});
