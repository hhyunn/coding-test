function solution(arr) {
    const answer = [];
    for (let i=0; i<arr.length; i++) {
        arr[i] === arr[i+1] ? null : answer.push(arr[i]) ;
    }
    return answer;
}

// function solution(arr) {
//     let answer = [];
//     arr.forEach(v => {
//         answer.includes(v) ? (answer.at(-1) === v ? null : answer.push(v)) : answer.push(v);
//     })
//     return answer;
// }

// function solution(arr) {
//     let answer = [];
//     arr.forEach(v => {
//         answer.at(-1) === v ? null : answer.push(v);
//     })
//     return answer;
// }