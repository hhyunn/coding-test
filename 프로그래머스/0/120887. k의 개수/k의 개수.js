function solution(i, j, k) {
    let count = 0;
    for (let idx=i; idx<=j; idx++) {
        const strIdx = idx.toString();
        if (strIdx.length > 1) {
            for (let num of strIdx) {
                num.includes(k) ? count++ : count;
            }
        } else {
            strIdx.includes(k) ? count++ : count;
        }
    }
    return count;
}