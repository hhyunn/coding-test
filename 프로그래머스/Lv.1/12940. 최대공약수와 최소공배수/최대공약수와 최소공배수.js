function solution(n, m) {
    const gcd = (x, y) => {
        return x % y === 0 ? y : gcd(y, (x % y));
    }
    const gd = gcd(n, m);
    return [gd, n * m / gd];
}