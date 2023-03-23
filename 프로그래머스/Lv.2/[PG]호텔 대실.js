function solution(book_time) {
  let room = [];
  book_time.sort();

  for (const [start, end] of book_time) {
    const startTime = transTime(start);
    const idx = room.findIndex((el) => el <= startTime);

    if (idx === -1) room.push(transTime(end) + 10);
    else room[idx] = transTime(end) + 10;
  }
  return room.length;
}

function transTime(timeStr) {
  const [hour, end] = timeStr.split(":");
  return +hour * 60 + +end;
}

console.log(
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ])
);
console.log(
  solution([
    ["09:10", "10:10"],
    ["10:20", "12:20"],
  ])
);
console.log(
  solution([
    ["10:20", "12:30"],
    ["10:20", "12:30"],
    ["10:20", "12:30"],
  ])
);
