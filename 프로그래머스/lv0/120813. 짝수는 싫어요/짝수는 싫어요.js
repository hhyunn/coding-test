/*
function solution(n) {
    let answer = [];
    for(let i=1; i<=Math.ceil(n/2); i++){
        answer.push((i*2)-1);
    }
    return answer;
}
*/

const solution = (n) => {
    let answer = [];
    for (let i=1; i<=Math.ceil(n/2); i++) {
        answer.push((i*2)-1);
    }
    return answer;
}