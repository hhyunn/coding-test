function solution(n) {
    let count = 0;
    for (let i=1; i<=n; i++) {
        n%i === 0 ? count += 1 : null;
    }
    return count;
}