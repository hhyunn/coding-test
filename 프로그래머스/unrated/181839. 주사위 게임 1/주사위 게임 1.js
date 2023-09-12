function solution(a, b) {
    let answer = 0;
    if (a%2 !== 0 && b%2 !== 0) {
        answer = a**2 + b**2;
    } else if (a%2 !== 0 || b%2 !== 0) {
        answer = 2 * (a + b);
    } else {
        answer = a-b >= 0 ? a - b : -(a - b) ;
    }
    return answer;
}