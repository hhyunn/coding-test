function solution(q, r, code) {
    let answer = '';
    code.split('').forEach((v, i) => {
       i%q === r ? answer += v : null; 
    });
    return answer;
}