function solution(str1, str2) {
    let answer = 0;
    answer = (str1.indexOf(str2) !== -1) ? 1 : 2 ;
    return answer;
}