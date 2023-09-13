function solution(numbers, n) {
    let answer = 0;
    numbers.forEach(v => {
        answer <= n ? answer += v : null;
    })
    return answer;
}