function solution(x, n) {
    let answer = [];
    for (let i=1; i<=n; i++) {
        answer.push((x+x)*i/2);
    }
    return answer;
}