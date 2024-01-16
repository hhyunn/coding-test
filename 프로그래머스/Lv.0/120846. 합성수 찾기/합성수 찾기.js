function solution(n) {
    let count = 0;
    let arr = new Array(n).fill(0);
    for (let i=1; i<=n; i++) {
        for (let j=1; j<=n; j++) {
            i%j === 0 ? arr[i-1]++ : arr;
        }
    }
    arr.forEach(v => {
        v>=3 ? count++ : count;
    })
    return count;
}