function solution(left, right) {
    let answer = 0;
    let arr = [];
    for (let i=left; i<=right; i++) {
        for (let j=1; j<=right; j++) {
            i%j === 0 ? arr.push(j) : arr;
        }
        arr.length%2 ? answer-=i : answer+=i;
        arr = [];
    }
    return answer;
}