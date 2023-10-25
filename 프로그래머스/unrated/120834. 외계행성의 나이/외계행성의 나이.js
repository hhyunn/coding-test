function solution(age) {
    let answer = '';
    age.toString().split('').forEach(v => {
        answer += String.fromCharCode(97 + parseInt(v));
    })
    return answer;
}