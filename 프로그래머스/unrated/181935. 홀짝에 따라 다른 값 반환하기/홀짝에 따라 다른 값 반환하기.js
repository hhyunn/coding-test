function solution(n) {
    let answer = 0;
    for (let i=1; i<=n; i++) {
        if (n%2) {
            answer += (i*2)-1 <= n ? (i*2)-1 : null;
        } else {
            answer += (i*2)**2 <= n**2 ? (i*2)**2 : null;
        }
    }
    return answer;
}