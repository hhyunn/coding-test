function solution(n) {
    let answer = 0;
    answer = n.toString().split('').reduce((a, c) => a + parseInt(c), 0);
    return answer;
}