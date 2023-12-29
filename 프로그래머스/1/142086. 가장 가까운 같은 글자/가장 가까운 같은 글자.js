function solution(s) {
    const answer = Array.from({ length: s.length }, () => -1);
    s.split('').forEach((v, i, arr) => {
        for (let j=i-1; j>=0; j--) {
            if (v === arr[j]) {
                answer[i] = i-j; break;
            }
        }
    })
    return answer;
}