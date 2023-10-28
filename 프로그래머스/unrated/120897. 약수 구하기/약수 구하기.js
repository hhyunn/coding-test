function solution(n) {
    const answer = [];
    for (let i=1; i<=n; i++) {
        n % i ? null : answer.push(i);
    }
    return answer;
}