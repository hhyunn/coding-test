function solution(n) {
    let answer = [];
    
    let strN = String(n);
    answer = strN.split('').reverse().map(x => Number(x));
    
    return answer;
}