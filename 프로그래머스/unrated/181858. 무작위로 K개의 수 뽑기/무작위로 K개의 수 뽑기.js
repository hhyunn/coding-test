function solution(arr, k) {
    const answer = [...new Set(arr)].slice(0, k);
    while (answer.length !== k) {
        answer.push(-1);
    }
    return answer;
}