function solution(n) {
    const arr = [];
    for (let i = 1; i <= 200; i++) {
        if (i % 3 && !i.toString().includes('3')) arr.push(i);
    }
    return arr[n - 1];
}