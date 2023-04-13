function solution(table, languages, preference) {
  const prefer = {};
  languages.forEach((language, idx) => (prefer[language] = preference[idx]));

  let answer = ["Z", 0]; // 직업군, 합
  table.forEach((data) => {
    const [job, ...languageData] = data.split(" ");
    let sum = 0;

    languageData.forEach((language, idx) => {
      const score = prefer[language];
      if (score) sum += score * (5 - idx);
    });

    if (answer[1] <= sum) {
      if (answer[1] === sum && answer[0] > job) answer = [job, sum];
      else answer = [job, sum];
    }
  });

  return answer[0];
}

console.log(
  solution(
    [
      "SI JAVA JAVASCRIPT SQL PYTHON C#",
      "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
      "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
      "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
      "GAME C++ C# JAVASCRIPT C JAVA",
    ],
    ["PYTHON", "C++", "SQL"],
    [7, 5, 5]
  )
);
console.log(
  solution(
    [
      "SI JAVA JAVASCRIPT SQL PYTHON C#",
      "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
      "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
      "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
      "GAME C++ C# JAVASCRIPT C JAVA",
    ],
    ["JAVA", "JAVASCRIPT"],
    [7, 5]
  )
);
