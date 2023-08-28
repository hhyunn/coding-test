function solution(absolutes, signs) {
    let answer = 0;
    let arr = [];
    absolutes.map((v, i) => {
        signs[i] ? arr.push(v) : arr.push(-v) ;
    })
    answer = arr.reduce((a, c) => a + c, 0);
    return answer;
}