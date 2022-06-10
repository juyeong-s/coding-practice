function solution1(phone_number) {
  return phone_number
    .split("")
    .map((num, index) => (index < phone_number.length - 4 ? "*" : num))
    .join("");
}

function solution2(phone_number) {
  // (?=) : 앞쪽 일치(Lookahead), /ab(?=c)/;
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}

function solution3(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}
