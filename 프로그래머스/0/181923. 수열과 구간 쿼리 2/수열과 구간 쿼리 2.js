function solution(arr, queries) {
    const answer = Array.from({ length: queries.length }, () => []);
    queries.forEach(([s, e, k], i) => {
        for (let idx=s; idx<=e; idx++) {
            if (arr[idx] > k) {
                answer[i].push(arr[idx]);
            }
        }
        if (answer[i].length > 1) {
            answer[i] = Math.min(...answer[i]);
        } else if (answer[i].length === 0) {
            answer[i] = -1;
        }
    })
    return answer.flat();
}