function solution(array, n) {
    let answer = 0;
    array.forEach(v => {
        v === n ? answer++ : null;
    })
    return answer;
}