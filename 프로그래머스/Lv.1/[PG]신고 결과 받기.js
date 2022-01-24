function solution(id_list, report, k) {
    let result = new Array(id_list.length).fill(0);
    const userObj = {};
    for(const id of id_list) userObj[id] = new Set();
    
    for(const str of report){
        const [user_id, report_id] = str.split(' ');
        userObj[report_id].add(user_id);
    }
    
    for(const key in userObj){
        const report_list = userObj[key];
        if(report_list.size >= k)
            report_list.forEach((id) => result[id_list.indexOf(id)] += 1);
    }
    return result;
}