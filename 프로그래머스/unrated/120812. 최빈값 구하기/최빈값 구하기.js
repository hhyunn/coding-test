function solution(array) {
    const arr = Array.from({ length: Math.max(...array) + 1 }, () => 0);
    array.forEach(v => arr[v]++);
    const idx = Math.max(...arr);
    return arr.filter(v => v === idx).length === 1 ? arr.indexOf(idx) : -1;
}