function solution(myString, pat) {
    let answer = 0;
    answer = +myString.toLowerCase().includes(pat.toLowerCase());
    return answer;
}