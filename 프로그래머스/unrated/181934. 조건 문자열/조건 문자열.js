function solution(ineq, eq, n, m) {
    let answer = 0;
    if (ineq === '>' && eq === '=') {
        answer = +(n >= m);
    } else if (ineq === '<' && eq === '=') {
        answer = +(n <= m);
    } else if (ineq === '>' && eq === '!') {
        answer = +(n > m);
    } else {
        answer = +(n < m);
    }
    return answer;
}