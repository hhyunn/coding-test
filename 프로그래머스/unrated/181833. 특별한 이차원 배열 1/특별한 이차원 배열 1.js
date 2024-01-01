function solution(n) {
    const arr = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
    arr.map((v, i, arr) => v[i] = 1);
    return arr;
}