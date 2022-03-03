SELECT STAGE, ROUND(AVG(STUDENT_NUM), 0) as avg_std_num, ROUND(SUM(STUDENT_NUM)/SUM(TEACHER_NUM), 1) as avg_std_per_teacher
FROM SCHOOLS
GROUP BY STAGE
ORDER BY avg_std_num DESC, avg_std_per_teacher ASC;