function solution(arr) {
    let answer = [];

    // arr.sort().reverse().pop();
    // arr.length !== 0 ? answer.push(...arr) : answer.push(-1);
    
    // 가장 작은 수가 여러 개일 경우
    let minNum = Math.min(...arr);
    (arr.length !== 1) ? answer = arr.filter(v => v > minNum) : answer.push(-1);

    return answer;
}