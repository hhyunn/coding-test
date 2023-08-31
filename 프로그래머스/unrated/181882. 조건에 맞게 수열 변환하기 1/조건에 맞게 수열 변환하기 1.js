function solution(arr) {
    let answer = [];
    answer = arr.map(v => (v>=50 && v%2===0) ? v/2 : (v<50 && v%2!==0) ? v*2 : v);
    return answer;
}