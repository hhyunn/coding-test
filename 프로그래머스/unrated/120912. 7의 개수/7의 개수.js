function solution(array) {
    let answer = 0;
    array.join('').split('').forEach(v => parseInt(v) === 7 ? answer++ : null);
    return answer;
}