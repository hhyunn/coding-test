function solution(arr, queries) {
    queries.forEach(v => {
        const [s, e, k] = v;
        for (let i=s; i<=e; i++) {
            Number.isInteger(i/k) ? arr[i]++ : arr;
        }
    })
    return arr;
}