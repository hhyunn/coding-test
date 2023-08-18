function solution(arr, k) {
    let answer = [];
    answer = (k%2 !== 0) ? arr.map(v => v*k) : arr.map(v => v+k);
    return answer;
}