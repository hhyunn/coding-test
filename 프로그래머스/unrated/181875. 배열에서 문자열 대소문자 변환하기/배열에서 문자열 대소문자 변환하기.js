function solution(strArr) {
    let answer = [];
    strArr.forEach((v, i) => {
        i%2 ? answer.push(v.toUpperCase()) : answer.push(v.toLowerCase());
    })
    return answer;
}