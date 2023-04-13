function solution(play_time, adv_time, logs) {
  if (play_time === adv_time) return "00:00:00";

  const transToSec = (time) => {
    const [hh, mm, ss] = time.split(":").map((el) => parseInt(el));
    return hh * 3600 + mm * 60 + ss;
  };

  const transStr = (num) => `${String(Math.floor(num)).padStart(2, "0")}`;

  const formatTime = (time) => {
    const hh = time / 3600;
    const mm = (time / 60) % 60;
    const ss = time % 60;

    return `${transStr(hh)}:${transStr(mm)}:${transStr(ss)}`;
  };

  const play_sec = transToSec(play_time);
  const adv_sec = transToSec(adv_time);

  let join_status = Array.from({ length: play_sec }, () => 0);

  for (const log of logs) {
    const [start, end] = log.split("-");
    const start_sec = transToSec(start);
    const end_sec = transToSec(end);
    join_status[start_sec] += 1;
    join_status[end_sec] -= 1;
  }

  // 해당 i초에 들어와있는 사람 수
  for (let i = 1; i < play_sec; i++) {
    join_status[i] += join_status[i - 1];
  }

  // 해당 i초에 누적 재생 시간
  for (let i = 1; i < play_sec; i++) {
    join_status[i] += join_status[i - 1];
  }

  let answer = [join_status[adv_sec - 1], 0]; // [누적 재생 시간, 시작 시간]

  for (let i = 1; i < play_sec - adv_sec; i++) {
    const end = i + adv_sec;
    const duration = join_status[end] - join_status[i];

    if (answer[0] < duration) {
      answer = [duration, i + 1];
    }
  }
  return formatTime(answer[1]);
}

console.log(
  solution("00:00:07", "00:00:02", ["00:00:01-00:00:04", "00:00:02-00:00:05", "00:00:03-00:00:06"])
);

console.log(
  solution("02:03:55", "00:14:15", [
    "01:20:15-01:45:14",
    "00:40:31-01:00:00",
    "00:25:50-00:48:29",
    "01:30:59-01:53:29",
    "01:37:44-02:02:30",
  ])
);
console.log(
  solution("99:59:59", "25:00:00", [
    "69:59:59-89:59:59",
    "01:00:00-21:00:00",
    "79:59:59-99:59:59",
    "11:00:00-31:00:00",
  ])
);
console.log(
  solution("50:00:00", "50:00:00", ["15:36:51-38:21:49", "10:14:18-15:36:51", "38:21:49-42:51:45"])
);
